import React, {useEffect} from 'react';
import './JournalPage.scss'
import {Redirect,withRouter} from "react-router-dom";
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

const JournalPage = (props) => {

    useEffect(() => {
        props.getClassroom(props.match.params.classId)
        props.getTasks()
        props.getHomeworks()
        props.getTasks()
        props.getHomeworks()
    }, [props.match.params.classId])

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    if (!props.class || !props.tasks || !props.homeworks ) return <Preloader/>
    if (!props.auth.isAuth) return <Redirect to={'/'}/>
    return (
        <div className='z-depth-2 journal blue-grey lighten-4'>
            <h5>Электронный журнал:</h5>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead className='z-depth-1-half'>
                        <TableRow>
                            <TableCell>Ученик</TableCell>
                            {
                                props.tasks.map(item =>  
                                    item.classNumber === props.auth.classNumber && <TableCell>{item.publicDate}</TableCell> 
                                )
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.class.students.map(student =>
                                <StyledTableRow>
                                    <TableCell component="th" scope="row">{student.fio}</TableCell>
                                    {
                                        props.homeworks.map(homework =>
                                            homework.classNumber === props.auth.classNumber
                                             && homework.student === student.fio 
                                             && <TableCell>{homework.mark}</TableCell>
                                        )
                                    }
                                </StyledTableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
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


