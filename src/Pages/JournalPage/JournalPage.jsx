import React, {useEffect} from 'react';
import './JournalPage.scss'
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import withStyles from "@material-ui/core/styles/withStyles";
import Preloader from "../../Assets/Commons/Preloader";

const JournalPage = (props) => {

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    if (!props.class) return <Preloader/>
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
                                    item.classNumber === props.auth.classNumber
                                        ? <TableCell>{item.publicDate}</TableCell>
                                        : null
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
                                            homework.classNumber === props.auth.classNumber && homework.student === student.fio && homework.publicTaskDate &&
                                            < TableCell>{homework.mark}</TableCell>
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


export default JournalPage;
