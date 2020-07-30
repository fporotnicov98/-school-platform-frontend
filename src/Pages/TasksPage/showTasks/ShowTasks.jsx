import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import {getTasks} from '../../../Redux/taskReducer'

const ShowTasks = (props) => {

    useEffect(() => {
        props.getTasks()
    }, [props.tasks])

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    if (!props.auth.isAuth) return <Redirect to={'/'}></Redirect>
    return (
        <div className='wrapper'>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead className='blue-grey z-depth-1-half lighten-4'>
                        <TableRow>
                            <TableCell>Предмет</TableCell>
                            <TableCell>Тема</TableCell>
                            <TableCell>Класс</TableCell>
                            <TableCell>Срок сдачи</TableCell>
                            <TableCell>Дата обновления</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.tasks.map((task, index) => (
                            <>
                                {
                                    task.teacher === props.auth.fio
                                        ?
                                        <StyledTableRow key={index}>
                                            <NavLink to={`/tasks/showTasks/` + task._id}>
                                                <TableCell component="th" scope="row">{task.subject}</TableCell>
                                                <TableCell align="left">{task.taskTitle}</TableCell>
                                                <TableCell align="left">{task.classNumber}</TableCell>
                                                <TableCell align="left">{task.deadlineDate}</TableCell>
                                                <TableCell align="left">{task.editedDate}</TableCell>
                                            </NavLink>
                                        </StyledTableRow>
                                        : null
                                }
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        auth: state.auth,
        tasks: state.task.tasks
    }
}

export default connect(mapStateToProps, {getTasks})(ShowTasks)