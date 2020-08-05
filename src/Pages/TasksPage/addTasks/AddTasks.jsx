import React, {useState} from 'react';
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import './../TasksPage.scss';
import Select from "@material-ui/core/Select";
import date from '../../../Assets/Other/date'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {addTask} from "../../../Redux/taskReducer";

const AddTasks = (props) => {

        let [day, setDay] = useState('')
        let [month, setMonth] = useState('')
        let [year, setYear] = useState('')
        let [classNumber, setClass] = useState('')
        let [title, setTitle] = useState('')
        let [description, setDesc] = useState('')

        let handleDay = e =>  setDay(e.target.value)
        let handleMonth = e => setMonth(e.target.value)
        let handleYear = e => setYear(e.target.value)
        let handleClass = e => setClass(e.target.value)
        let handleTitle = e => setTitle(e.target.value)
        let handleDesc = e => setDesc(e.target.value)
        
        let resetForms = val => {
            setClass(val)
            setDay(val)
            setMonth(val)
            setYear(val)
            setTitle(val)
            setDesc(val)
        }

        let days = [...Array(32).keys()].splice(1)
        let months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]

        if (!props.auth.isAuth) return <Redirect to={'/'}/>
        return (
            <>
                <div className='wrapper'>
                    <nav className='blue-grey lighten-4'>
                        <div className="nav-wrapper">
                            <NavLink to="/tasks" className="breadcrumb">Задания</NavLink>
                            <a href="#!" className="breadcrumb">Добавить задание</a>
                        </div>
                    </nav>
                    <div className='z-depth-2 add-tasks blue-grey lighten-4'>
                        <div className='tasks-body'>
                            <div className='class-number'>
                                <span>Выбрать класс: </span>
                                <Select
                                    className='class'
                                    native
                                    onChange={handleClass}
                                    value={classNumber}
                                >
                                    <option value="" disabled selected>Выбрать класс</option>
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
                            <div className='topic'>Тема задания:
                                <div className="input-field">
                                    <input id="topic" type="text" className="validate" value={title}
                                           onChange={handleTitle}/>
                                </div>
                            </div>
                            <div className='date'>Дата публикации:
                                <input type="text" value={date()}/>
                            </div>
                            <div className='deadline'>Срок сдачи:
                                <div className='deadline-day'>
                                    <InputLabel id="demo-simple-select-label">День</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={day}
                                        onChange={handleDay}
                                    >
                                        {
                                            days.map(day => <MenuItem value={day}>{day}</MenuItem>)
                                        }
                                    </Select>
                                </div>
                                <div className='deadline-month'>
                                    <InputLabel id="demo-simple-select-label">Месяц</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={month}
                                        onChange={handleMonth}
                                    >
                                        {
                                            months.map(month => <MenuItem value={month}>{month}</MenuItem>)
                                        }
                                    </Select>
                                </div>
                                <div className='deadline-year'>
                                    <InputLabel id="demo-simple-select-label">Год</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={year}
                                        onChange={handleYear}
                                    >
                                        <MenuItem value={2020}>2020</MenuItem>
                                        <MenuItem value={2020}>2021</MenuItem>
                                    </Select>
                                </div>
                            </div>
                            <div className='description'>Описание задания
                                <div className="input-field">
                                <textarea className='materialize-textarea' value={description}
                                          onChange={handleDesc}/>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light cyan darken-2" type="submit"
                                    name="action" onClick={() => {
                                props.addTask(classNumber, date(), `${day} ${month} ${year}`, props.auth.subject, props.auth.fio, title, description)
                                resetForms("")
                            }}>Опубликовать задание
                                <i className="material-icons right">send</i>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
;

const mapStateToProps = state => {
    return {
        auth: state.auth,
        classroom: state.classroom.classroom,
        addTask: state.task.addTask
    }
}

export default connect(mapStateToProps, {addTask})(AddTasks)



