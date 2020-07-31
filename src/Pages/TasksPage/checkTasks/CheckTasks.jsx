import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/core/styles/withStyles";
import { getHomeworks } from "../../../Redux/homeworkReducer";

const CheckTasks = (props) => {
    
    useEffect(() => {
        props.getHomeworks()
    }, [])


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
            <nav className='blue-grey lighten-4'>
                <div className="nav-wrapper">
                    <NavLink to="/tasks" className="breadcrumb">Задания</NavLink>
                    <a href="#!" className="breadcrumb">Ответы учеников</a>
                </div>
            </nav>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead className='blue-grey z-depth-1-half lighten-4'>
                        <TableRow>
                            <TableCell>Номер задания</TableCell>
                            <TableCell>Класс</TableCell>
                            <TableCell>Ученик</TableCell>
                            <TableCell>Тема</TableCell>
                            <TableCell>Срок сдачи задания</TableCell>
                            <TableCell>Дата отправки учеником</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.homeworks.map((homework, index) => (
                            <>
                                {
                                    homework.teacher === "Геровская Наталья"
                                        ?
                                        <StyledTableRow key={index}>
                                            <NavLink to={`/tasks/checkTasks/` + homework._id}>
                                                <TableCell component="th" scope="row">{index + 1}</TableCell>
                                            </NavLink>
                                            <TableCell>{homework.classNumber}</TableCell>
                                            <TableCell>{homework.student}</TableCell>
                                            <TableCell>{homework.taskTitle}</TableCell>
                                            <TableCell>{homework.deadlineDate}</TableCell>
                                            <TableCell>{homework.publicDate}</TableCell>
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
        homeworks: state.homework.homeworks
    }
}

export default connect(mapStateToProps, {getHomeworks})(CheckTasks)