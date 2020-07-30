import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import { getTasks } from '../../../Redux/taskReducer'

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

    function createData(subject, theme, classroom, deadline, update) {
        return { subject, theme, classroom, deadline, update };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

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
                                            <TableCell component="th" scope="row">
                                                {task.subject}
                                            </TableCell>
                                            <TableCell align="left">{task.taskTitle}</TableCell>
                                            <TableCell align="left">{task.classNumber}</TableCell>
                                            <TableCell align="left">{task.deadlineDate}</TableCell>
                                            <TableCell align="left">{task.editedDate}</TableCell>
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

export default connect(mapStateToProps, { getTasks })(ShowTasks)