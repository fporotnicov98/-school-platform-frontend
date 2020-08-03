import React, {useEffect, useState} from 'react';
import {Redirect, NavLink} from "react-router-dom";
import date from "../../../Assets/Other/date";
import Preloader from "../../../Assets/Commons/Preloader";


const TaskItem = (props) => {

    let [title, setTitle] = useState(props.taskItem && props.taskItem.taskTitle)
    let [description, setDesc] = useState(props.taskItem && props.taskItem.taskText)
    let [answer, setAnswer] = useState('')

    let handleTitle = (e) => {
        setTitle(e.target.value)
    }
    let handleDesc = (e) => {
        setDesc(e.target.value)
    }
    let handleAnswer = (e) => {
        setAnswer(e.target.value)
    }


    if (!props.auth.isAuth) return <Redirect to={'/'}/>
    if (!props.taskItem) return <Preloader/>
    return (
        <div className='wrapper'>
            {
                props.auth.role === 'teacher' &&
                <nav className='blue-grey lighten-4'>
                    <div className="nav-wrapper">
                        <NavLink to="/tasks" className="breadcrumb">Задания</NavLink>
                        <NavLink to="/tasks/showTasks" className="breadcrumb">Все задания</NavLink>
                        <a href="#!" className="breadcrumb">Изменить задание</a>
                    </div>
                </nav>
            }
            {
                props.auth.role === 'student' &&
                <nav className='blue-grey lighten-4'>
                    <div className="nav-wrapper">
                        <NavLink to="/tasks" className="breadcrumb">Задания</NavLink>
                        <NavLink to="/tasks/showTasks" className="breadcrumb">Все задания</NavLink>
                        <a href="#!" className="breadcrumb">Отправить ответ</a>
                    </div>
                </nav>
            }
            {
                props.auth.role === 'teacher' &&
                <div className='z-depth-2 add-tasks blue-grey lighten-4'>
                    <div className='tasks-body'>
                        <div className='class-number'>
                            <span>Класс: </span>
                            <span>{props.taskItem.classNumber}</span>
                        </div>
                        <div className='subject'>Предмет:
                            <span className='subject-text'>{props.taskItem.subject}</span>
                        </div>
                        <div className='topic'>Тема задания:
                            <div className="input-field">
                                <input id="topic" type="text" className="validate" value={title}
                                       onChange={handleTitle} placeholder="Введите тему задания"/>
                            </div>
                        </div>
                        <div className='date'>Дата публикации:
                            <input type="text" value={props.taskItem.publicDate}/>
                        </div>
                        <div className='deadline'>Срок сдачи:
                            <input type='text' value={props.taskItem.deadlineDate}/>
                        </div>
                        <div className='description'>Описание задания
                            <div className="input-field">
                                    <textarea className='materialize-textarea' value={description}
                                              onChange={handleDesc}/>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light cyan darken-2" type="submit"
                                name="action"
                                onClick={() => props.updateTask(props.taskItem._id, title, description, date())}>Изменить
                            задание
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            }
            {
                props.auth.role === 'student' &&
                <div className='z-depth-2 add-tasks blue-grey lighten-4'>
                    <div className='tasks-body'>
                        <div className='class-number'>
                            <span>Класс: </span>
                            <span>{props.taskItem.classNumber}</span>
                        </div>
                        <div className='subject'>Предмет:
                            <span className='subject-text'>{props.taskItem.subject}</span>
                        </div>
                        <div className='topic'>Тема задания:
                            <span>{props.taskItem.taskTitle}</span>
                        </div>
                        <div className='date'>Дата публикации:
                            <span>{props.taskItem.publicDate}</span>
                        </div>
                        <div className='deadline'>Срок сдачи:
                            <span>{props.taskItem.deadlineDate}</span>
                        </div>
                        <div className='description'>Описание задания
                            <span>{props.taskItem.taskText}</span>
                        </div>
                        <div className='answer'>Ответ на задание
                            <input type='text' value={answer} onChange={handleAnswer}/>
                        </div>
                        <button className="btn waves-effect waves-light cyan darken-2"
                                onClick={() => props.addHomework(props.auth.classNumber, props.taskItem._id, props.auth.fio, date(), props.taskItem.subject, props.taskItem.teacher, answer, props.taskItem.deadlineDate, props.taskItem.taskTitle)}>Отправить
                            ответ<i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default TaskItem