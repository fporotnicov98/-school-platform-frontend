import React, { useEffect } from 'react';
import './JournalPage.scss'
import { Redirect, withRouter, NavLink } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import withStyles from "@material-ui/core/styles/withStyles";
import Preloader from "../../Assets/Commons/Preloader";
import { getClassroom } from "../../Redux/classReducer";
import { getHomeworks } from "../../Redux/homeworkReducer";
import { getTasks } from "../../Redux/taskReducer";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { uniq } from "lodash";
// import uniq from 'lodash/uniq'

const JournalPage = (props) => {

    let [subject, setSubject] = React.useState()
    let [uniqueTasks, setUniqueTasks] = React.useState([])

    let handleSubject = (e) => setSubject(e.target.value)

    let selectUniqueSubject = () => setUniqueTasks(uniq(props.tasks.map(item => item.subject)))

    let dates = uniq(props.tasks.map(item => item.subject === subject && item.publicDate).filter(date => date != false))

    useEffect(() => {
        props.getClassroom(props.match.params.classId)
        props.getTasks()
        props.getHomeworks()
        selectUniqueSubject()

    }, [props.match.params.classId])

    let markToStudent = []

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    if (!props.class || !props.tasks || !props.homeworks) return <Preloader />
    if (!props.auth.isAuth) return <Redirect to={'/'} />
    return (
        <div o className='z-depth-2 journal blue-grey lighten-4'>
            <h5>Электронный журнал:</h5>
            {
                props.auth.role === 'student' &&
                <div className='select-subject'>
                    <InputLabel id="demo-simple-select-label">Предмет: </InputLabel>
                    <Select
                        id="demo-simple-select"
                        value={subject}
                        onChange={handleSubject}
                    >
                        {
                            uniqueTasks.map(item =>
                                <MenuItem value={item}>{item}</MenuItem>
                            )
                        }

                    </Select>
                </div>
            }
            {
                subject &&
                <TableContainer component={Paper}>
                    <Table size='small' aria-label="customized table">
                        <TableHead className='z-depth-1-half'>
                            <TableRow>
                                <TableCell className='students'>Ученик</TableCell>
                                {
                                    dates.map(date =>
                                        props.homeworks.some(homework => homework.publicTaskDate === date && homework.subject === subject)
                                        && <TableCell className='dates'>{date}</TableCell>
                                    )
                                }

                                {/*{*/}
                                {/*    props.tasks.map(item =>*/}
                                {/*        item.classNumber === props.auth.classNumber && subject === item.subject &&*/}
                                {/*        <TableCell className='dates'>{item.publicDate}</TableCell>*/}
                                {/*    )*/}
                                {/*}*/}
                                <TableCell className='final-mark'>Итоговая оценка</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.class.students.map(student =>
                                    <StyledTableRow>
                                        <TableCell className='students' component="th"
                                            scope="row">{student.fio}</TableCell>
                                        {
                                            dates.map(date =>
                                                props.homeworks.some(homework =>
                                                    homework.classNumber === props.auth.classNumber
                                                    && date === homework.publicTaskDate
                                                    && homework.student === student.fio
                                                    && homework.subject === subject
                                                ) ? <TableCell className='marks'>
                                                        {
                                                            props.homeworks.map(homework =>
                                                                homework.student === student.fio
                                                                && homework.subject === subject
                                                                && date === homework.publicTaskDate
                                                                && <span><NavLink to={`/tasks/showTasksAfterCheck/` + homework._id}>
                                                                    {homework.mark}
                                                                </NavLink>
                                                                </span>
                                                            )
                                                        }
                                                    </TableCell>
                                                    : <TableCell className='marks'></TableCell>
                                            )
                                        }
                                        <TableCell className='final-mark'>
                                            {
                                                !isNaN((props.homeworks.map(homework =>
                                                    homework.classNumber === props.auth.classNumber
                                                    && homework.student === student.fio
                                                    && homework.subject === subject
                                                    && +homework.mark
                                                ).reduce((a, b) => a + b, 0) /
                                                    (props.homeworks.map(homework =>
                                                        homework.classNumber === props.auth.classNumber
                                                        && homework.student === student.fio
                                                        && homework.subject === subject
                                                        && homework.mark
                                                    )).filter(homework => homework !== false).length).toFixed(1))
                                                    ? (props.homeworks.map(homework =>
                                                        homework.classNumber === props.auth.classNumber
                                                        && homework.student === student.fio
                                                        && homework.subject === subject
                                                        && +homework.mark
                                                    ).reduce((a, b) => a + b, 0) /
                                                        (props.homeworks.map(homework =>
                                                            homework.classNumber === props.auth.classNumber
                                                            && homework.student === student.fio
                                                            && homework.subject === subject
                                                            && homework.mark
                                                        )).filter(homework => homework !== false).length).toFixed(1)
                                                    : '-'
                                            }
                                        </TableCell>
                                    </StyledTableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        class: state.classroom.class,
        tasks: state.task.tasks,
        homeworks: state.homework.homeworks
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getClassroom, getTasks, getHomeworks })
)(JournalPage)


