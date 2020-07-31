import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/core/styles/withStyles";

const CheckTasks = (props) => {

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
                            <TableCell>Ученик</TableCell>
                            <TableCell>Тема</TableCell>
                            <TableCell>Класс</TableCell>
                            <TableCell>Срок сдачи</TableCell>
                            <TableCell>Дата обновления</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*{props.tasks.map((task, index) => (*/}
                        {/*    <>*/}
                        {/*        {*/}
                        {/*            task.teacher === props.auth.fio*/}
                        {/*                ?*/}
                        {/*                <StyledTableRow key={index}>*/}
                        {/*                    <NavLink to={`/tasks/showTasks/` + task._id}>*/}
                        {/*                        <TableCell component="th" scope="row">{index + 1}</TableCell>*/}
                        {/*                    </NavLink>*/}
                        {/*                    <TableCell>{task.subject}</TableCell>*/}
                        {/*                    <TableCell>{task.taskTitle}</TableCell>*/}
                        {/*                    <TableCell>{task.classNumber}</TableCell>*/}
                        {/*                    <TableCell>{task.deadlineDate}</TableCell>*/}
                        {/*                    <TableCell>{task.editedDate}</TableCell>*/}
                        {/*                </StyledTableRow>*/}
                        {/*                : null*/}
                        {/*        }*/}
                        {/*    </>*/}
                        {/*))}*/}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, {})(CheckTasks)