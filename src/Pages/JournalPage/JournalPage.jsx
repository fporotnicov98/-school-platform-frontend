import React, {useEffect} from 'react';
import './JournalPage.scss'
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import withStyles from "@material-ui/core/styles/withStyles";
import Preloader from "../../Assets/Commons/Preloader";
import {getClassroom} from "../../Redux/classReducer";
import {getHomeworks} from "../../Redux/homeworkReducer";
import {getTasks} from "../../Redux/taskReducer";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {uniq} from "lodash";
// import uniq from 'lodash/uniq'

const JournalPage = (props) => {

    let [subject, setSubject] = React.useState()
    let [uniqueTasks, setUniqueTasks] = React.useState([])
    let [sameData, setSameData] = React.useState([])

    let handleSubject = (e) => setSubject(e.target.value)

    let selectUniqueSubject = () => setUniqueTasks(uniq(props.tasks.map(item => item.subject)))


    let selectMarkToDate = () => {

    }

    useEffect(() => {
        props.getClassroom(props.match.params.classId)
        props.getTasks()
        props.getHomeworks()
        selectUniqueSubject()
    }, [props.match.params.classId])

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    if (!props.class || !props.tasks || !props.homeworks) return <Preloader/>
    if (!props.auth.isAuth) return <Redirect to={'/'}/>
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
                    <Table aria-label="customized table">
                        <TableHead className='z-depth-1-half'>
                            <TableRow>
                                <TableCell className='students'>Ученик</TableCell>
                                {
                                    props.tasks.map(item =>
                                        item.classNumber === props.auth.classNumber && subject === item.subject &&
                                        <TableCell className='dates'>{item.publicDate}</TableCell>
                                    )
                                }
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
                                            props.homeworks.map(homework =>
                                                homework.classNumber === props.auth.classNumber
                                                && homework.student === student.fio
                                                && homework.subject === subject
                                                && <TableCell className='marks'>
                                                    {
                                                        props.homeworks.map(homework =>
                                                            props.tasks.map(task =>
                                                                homework.publicTaskDate === task.publicDate
                                                                && homework.student
                                                            )
                                                        )
                                                    }

                                                    {homework.mark}
                                                </TableCell>
                                            )
                                        }
                                        <TableCell className='final-mark'></TableCell>
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
    connect(mapStateToProps, {getClassroom, getTasks, getHomeworks})
)(JournalPage)


