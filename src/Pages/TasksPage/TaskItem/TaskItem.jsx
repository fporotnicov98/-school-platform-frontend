import React, {useState} from 'react';
import {Redirect, NavLink} from "react-router-dom";
import date from "../../../Assets/Other/date";
import Preloader from "../../../Assets/Commons/Preloader";
import './../addTasks/AddTasks.scss'
import InputLabel from "@material-ui/core/InputLabel";

const TaskItem = (props) => {

    let [title, setTitle] = useState(props.taskItem && props.taskItem.taskTitle)
    let [description, setDesc] = useState(props.taskItem && props.taskItem.taskText)
    let [answer, setAnswer] = useState('')
    let [file, setFile] = useState('')
    let [fileName, setFileName] = useState('')

    let handleTitle = (e) => setTitle(e.target.value)
    let handleDesc = (e) => setDesc(e.target.value)
    let handleAnswer = (e) => setAnswer(e.target.value)

    let selectedDocument = (e) => {
        if (e.target.files.length) {
            setFile(e.target.files[0])
            setFileName(e.target.files[0].name)
        }
    }

    if (!props.auth.isAuth) return <Redirect to={'/'}/>
    if (props.auth.role === 'student' && props.homeworks.some(homework => homework.taskId === props.taskItem._id && homework.student === props.auth.fio)) return <Redirect
        to={'/tasks/showTasks'}/>
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
                        <div className='task-item'>
                            <InputLabel>Класс: </InputLabel>
                            <span>{props.taskItem.classNumber}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Предмет: </InputLabel>
                            <span>{props.taskItem.subject}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Тема задания: </InputLabel>
                            <input type="text" value={title} onChange={handleTitle}/>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Дата публикации: </InputLabel>
                            <span>{props.taskItem.publicDate}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Срок сдачи: </InputLabel>
                            <span>{props.taskItem.deadlineDate}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Описание задания: </InputLabel>
                            <textarea className='materialize-textarea' value={description}
                                      onChange={handleDesc}/>
                        </div>
                        <button className="btn waves-effect waves-light cyan darken-2"
                                onClick={() => props.updateTask(props.taskItem._id, title, description, date())}>Изменить
                            задание
                        </button>
                    </div>
                </div>
            }
            {
                props.auth.role === 'student' &&
                <div className='z-depth-2 add-tasks blue-grey lighten-4'>
                    <div className='tasks-body'>
                        <div className='task-item'>
                            <InputLabel>Класс: </InputLabel>
                            <span>{props.taskItem.classNumber}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Предмет: </InputLabel>
                            <span>{props.taskItem.subject}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Тема задания: </InputLabel>
                            <span>{props.taskItem.taskTitle}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Дата публикации: </InputLabel>
                            <span>{props.taskItem.publicDate}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Срок сдачи: </InputLabel>
                            <span>{props.taskItem.deadlineDate}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Описание задания: </InputLabel>
                            <span>{props.taskItem.taskText}</span>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Ответ на задание: </InputLabel>
                            <input type='text' value={answer} onChange={handleAnswer}/>
                        </div>
                        <div className='task-item'>
                            <InputLabel>Файл задания: </InputLabel>
                            <a href='#!'
                               onClick={() => props.downloadFile(props.taskItem.taskFileName)}>{props.taskItem.taskFileName}<i
                                className="files fas fa-file-word"/></a>
                        </div>
                        <div className="task-item file-field">
                            <div className="add-file">
                                <InputLabel>Загрузить файл</InputLabel>
                                <input onChange={selectedDocument} type="file"/>
                            </div>
                            <input className="file-path validate" type="text"/>
                        </div>
                        <button className="btn waves-effect waves-light cyan darken-2"
                                onClick={() => {
                                    props.addHomework(props.auth.classNumber, props.taskItem._id, props.auth.fio, date(), props.taskItem.publicDate, props.taskItem.subject, props.taskItem.teacher, answer, fileName, props.taskItem.deadlineDate, props.taskItem.taskTitle)
                                    props.saveFile(file)
                                }}>Отправить
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default TaskItem