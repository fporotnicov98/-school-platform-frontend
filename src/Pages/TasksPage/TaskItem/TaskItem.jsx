import React, {useEffect, useState} from 'react';
import {withRouter, Redirect, NavLink} from "react-router-dom";
import date from "../../../Assets/Other/date";
import {connect} from "react-redux";
import {compose} from "redux";
import {getTaskItem, updateTask} from "../../../Redux/taskReducer";
import Preloader from "../../../Assets/Commons/Preloader";

const TaskItem = (props) => {

    let [title, setTitle] = useState(props.taskItem.taskTitle)
    let [description, setDesc] = useState(props.taskItem.taskText)

    
    
    let handleTitle = (e) => {
        setTitle(e.target.value)
    }
    let handleDesc = (e) => {
        setDesc(e.target.value)
    }

   
    

    if (!props.auth.isAuth) return <Redirect to={'/'}></Redirect>
    if (!props.taskItem) return <Preloader/>
    return (
        <>
            <div className='wrapper'>
                <nav className='blue-grey lighten-4'>
                    <div className="nav-wrapper">
                        <NavLink to="/tasks" className="breadcrumb">Задания</NavLink>
                        <NavLink to="/tasks/showTasks" className="breadcrumb">Все задания</NavLink>
                        <a href="#!" className="breadcrumb">Изменить задание</a>
                    </div>
                </nav>
                <div className='z-depth-2 add-tasks blue-grey lighten-4'>
                    <div className='tasks-body'>
                        <div className='class-number'>
                            <span>Класс: </span>
                            <span>{props.taskItem.classNumber}</span>
                        </div>
                        <div className='subject'>Предмет:
                            <span className='subject-text'>{props.auth.subject}</span>
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
            </div>
        </>
    );
};


export default TaskItem
