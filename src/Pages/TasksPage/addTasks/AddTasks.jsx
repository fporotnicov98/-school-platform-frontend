import React, {useState} from 'react';
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import './../TasksPage.scss';
import Select from "@material-ui/core/Select";
import DateFnsUtils from '@date-io/date-fns';
import {  KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import date from '../../../Assets/Other/date'

const AddTasks = (props) => {
    const [selectedDate, setSelectedDate] = useState(date());   


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    if (!props.auth.isAuth) return <Redirect to={'/'}></Redirect>
    return (
        <div className='wrapper'>
            <div className='z-depth-2 tasks blue-grey lighten-4'>
                <div className='class-number'>
                    <span>Выбрать класс: </span>
                    <Select
                        className='class'
                        native
                        inputProps={{
                            name: 'class-number',
                            id: 'class-number',
                        }}
                    >
                        {
                            props.classroom.map(item =>
                                <option
                                    value={item.classNumber}>{item.classNumber}</option>
                            )
                        }
                    </Select>
                </div>
                <div className='subject'>Предмет:
                    <span className='subject-text'>{props.auth.subject}</span>
                </div>
                <div className='topic'>
                    <div className="input-field col s6">
                        <input id="topic" type="text" className="validate"/>
                            <label htmlFor="topic">Тема задания</label>
                    </div>
                </div>
                <div className='date'>Дата публикации:
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            format="dd/MM/yyyy"
                            value={date()}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div className='deadline'>Срок сдачи:
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div className='description'>Описание задания
                    <div className="input-field col s12">
                        <textarea id="textarea1"></textarea>
                        <label htmlFor="textarea1">Textarea</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Отправить
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </div>
);
};

const mapStateToProps = state => {
    return {
    auth: state.auth,
    classroom: state.classroom.classroom,
}
}

export default connect(mapStateToProps, {})(AddTasks)



