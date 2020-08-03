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

const JournalPage = (props) => {

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    if (props.auth.isAuth) return <Redirect to={'/'}></Redirect>
    return (
        <div className='z-depth-2 journal blue-grey lighten-4'>
            <h5>Электронный журнал:</h5>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead className='blue-grey z-depth-1-half lighten-4'>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Предмет</TableCell>
                            <TableCell>Тема</TableCell>
                            <TableCell>Класс</TableCell>
                            <TableCell>Срок сдачи</TableCell>
                            <TableCell>Дата обновления</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell component="th" scope="row"></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};


export default JournalPage;
