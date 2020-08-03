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
import {getHomeworks} from "../../../Redux/homeworkReducer";

const ShowTasks = (props) => {

    useEffect(() => {
        props.getTasks()
        props.getHomeworks()
    }, [])

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    if (!props.auth.isAuth) return <Redirect to={'/'}/>
    return (
        <div className='wrapper'>
            <nav className='blue-grey lighten-4'>
                <div className="nav-wrapper">
                    <NavLink to="/tasks" className="breadcrumb">Задания</NavLink>
                    <a href="#!" className="breadcrumb">Все задания</a>
                </div>
            </nav>
            {
                props.auth.role === 'teacher' &&
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead className='blue-grey z-depth-1-half lighten-4'>
                            <TableRow>
                                <TableCell>Номер задания</TableCell>
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
                                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                </NavLink>
                                                <TableCell>{task.subject}</TableCell>
                                                <TableCell>{task.taskTitle}</TableCell>
                                                <TableCell>{task.classNumber}</TableCell>
                                                <TableCell>{task.deadlineDate}</TableCell>
                                                <TableCell>{task.editedDate}</TableCell>
                                            </StyledTableRow>
                                            : null
                                    }
                                </>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            {
                props.auth.role === 'student' &&
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead className='blue-grey z-depth-1-half lighten-4'>
                            <TableRow>
                                <TableCell>Номер задания</TableCell>
                                <TableCell>Предмет</TableCell>
                                <TableCell>Тема</TableCell>
                                <TableCell>Класс</TableCell>
                                <TableCell>Срок сдачи</TableCell>
                                <TableCell>Дата обновления</TableCell>
                                <TableCell>Статус</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.tasks.map((task, index) => (
                                <>
                                    {
                                        task.classNumber === props.auth.classNumber
                                            ?
                                            <StyledTableRow key={index}>
                                                {
                                                    props.homeworks.length > 0 &&
                                                    <NavLink to={`/tasks/showTasks/` + task._id}>
                                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                    </NavLink>
                                                }
                                                {
                                                    props.homeworks.map(homework =>
                                                        homework.taskId === task._id && homework.student === props.auth.fio
                                                        && <NavLink to={`/tasks/showTasksAfterCheck/` + homework._id}>
                                                            <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                        </NavLink>
                                                    )
                                                }
                                                <TableCell>{task.subject}</TableCell>
                                                <TableCell>{task.taskTitle}</TableCell>
                                                <TableCell>{task.classNumber}</TableCell>
                                                <TableCell>{task.deadlineDate}</TableCell>
                                                <TableCell>{task.editedDate}</TableCell>
                                                <TableCell>
                                                    {
                                                        props.homeworks.length > 0
                                                            ? <span className='green-text'>Не отправленgо</span>
                                                            : props.homeworks.map(item =>
                                                            item.taskId === task._id &&
                                                            <span className='red-text'>{item.status}</span>
                                                            )
                                                    }
                                                </TableCell>
                                            </StyledTableRow>
                                            : null
                                    }
                                </>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    );
}


const mapStateToProps = state => {
    return {
        auth: state.auth,
        tasks: state.task.tasks,
        homeworks: state.homework.homeworks
    }
}

export default connect(mapStateToProps, {getTasks, getHomeworks})(ShowTasks)