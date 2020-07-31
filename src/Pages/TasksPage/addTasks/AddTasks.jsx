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

        let handleDay = (e) => {
            setDay(e.target.value)
        }
        let handleMonth = (e) => {
            setMonth(e.target.value)
        }
        let handleYear = (e) => {
            setYear(e.target.value)
        }
        let handleClass = (e) => {
            setClass(e.target.value)
        }
        let handleTitle = (e) => {
            setTitle(e.target.value)
        }
        let handleDesc = (e) => {
            setDesc(e.target.value)
        }

        let resetForms = val => {
            setClass(val)
            setDay(val)
            setMonth(val)
            setYear(val)
            setTitle(val)
            setDesc(val)
        }


        if (!props.auth.isAuth) return <Redirect to={'/'}></Redirect>
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
                                    <input id="topic" type="text" className="validate" value={title} onChange={handleTitle}/>
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
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={11}>11</MenuItem>
                                        <MenuItem value={12}>12</MenuItem>
                                        <MenuItem value={13}>13</MenuItem>
                                        <MenuItem value={14}>14</MenuItem>
                                        <MenuItem value={15}>15</MenuItem>
                                        <MenuItem value={16}>16</MenuItem>
                                        <MenuItem value={17}>17</MenuItem>
                                        <MenuItem value={18}>18</MenuItem>
                                        <MenuItem value={19}>19</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={21}>21</MenuItem>
                                        <MenuItem value={22}>22</MenuItem>
                                        <MenuItem value={23}>23</MenuItem>
                                        <MenuItem value={24}>24</MenuItem>
                                        <MenuItem value={25}>25</MenuItem>
                                        <MenuItem value={26}>26</MenuItem>
                                        <MenuItem value={27}>27</MenuItem>
                                        <MenuItem value={28}>28</MenuItem>
                                        <MenuItem value={29}>29</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                        <MenuItem value={31}>31</MenuItem>
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
                                        <MenuItem value={'Январь'}>Январь</MenuItem>
                                        <MenuItem value={'Февраль'}>Февраль</MenuItem>
                                        <MenuItem value={'Март'}>Март</MenuItem>
                                        <MenuItem value={'Апрель'}>Апрель</MenuItem>
                                        <MenuItem value={'Май'}>Май</MenuItem>
                                        <MenuItem value={'Июнь'}>Июнь</MenuItem>
                                        <MenuItem value={'Июль'}>Июль</MenuItem>
                                        <MenuItem value={'Август'}>Август</MenuItem>
                                        <MenuItem value={'Сентябрь'}>Сентябрь</MenuItem>
                                        <MenuItem value={'Октябрь'}>Октябрь</MenuItem>
                                        <MenuItem value={'Ноябрь'}>Ноябрь</MenuItem>
                                        <MenuItem value={'Декабрь'}>Декабрь</MenuItem>
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
                                        <MenuItem value={2020}>2022</MenuItem>
                                    </Select>
                                </div>
                            </div>
                            <div className='description'>Описание задания
                                <div className="input-field">
                                    <textarea className='materialize-textarea' value={description}
                                              onChange={handleDesc}></textarea>
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



