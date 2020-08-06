import React, {useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const CheckingTasks = (props) => {

    let [rating, setRating] = useState('')
    let [notation, setNotation] = useState('')

    let handleRating = (e) => setRating(e.target.value)
    let handleNotation = (e) => setNotation(e.target.value)
    let resetRating = () => setRating("")
    let resetNotation = () => setNotation("")

    if (!props.auth.isAuth) return <Redirect to={'/'}/>
    if (props.homeworkItem.mark) return <Redirect to={'/tasks/checkTasks'}/>
    return (
        <div className='wrapper'>
            <nav className='blue-grey lighten-4'>
                <div className="nav-wrapper">
                    <NavLink to="/tasks" className="breadcrumb">Задания</NavLink>
                    <NavLink to="/tasks/checkTasks" className="breadcrumb">Ответы учеников</NavLink>
                    <a href="#!" className="breadcrumb">Проверка задания</a>
                </div>
            </nav>
            <div className='z-depth-2 add-tasks blue-grey lighten-4'>
                <div className='tasks-body'>
                    <div className='task-item'>
                        <InputLabel>Класс: </InputLabel>
                        <span>{props.homeworkItem.classNumber}</span>
                    </div>
                    <div className='task-item'>
                        <InputLabel>Предмет: </InputLabel>
                        <span className='subject-text'>{props.homeworkItem.subject}</span>
                    </div>
                    <div className='task-item'>
                        <InputLabel>Тема задания: </InputLabel>
                        <span>{props.homeworkItem.taskTitle}</span>
                    </div>
                    <div className='task-item'>
                        <InputLabel>Ученик: </InputLabel>
                        <span>{props.homeworkItem.student}</span>
                    </div>
                    <div className='task-item'>
                        <InputLabel>Срок сдачи: </InputLabel>
                        <span>{props.homeworkItem.deadlineDate}</span>
                    </div>
                    <div className='task-item'>
                        <InputLabel>Дата публикации ученика: </InputLabel>
                        <span>{props.homeworkItem.publicDate}</span>
                    </div>
                    <div className='task-item'>
                        <InputLabel>Ответ ученика: </InputLabel>
                        <span>{props.homeworkItem.answerToTask}</span>
                    </div>
                    <div className='task-item'>
                            <InputLabel>Файл ученика: </InputLabel>
                            <a href='#!' download={props.homeworkItem.answerFileName} onClick={() => props.downloadFile(props.homeworkItem.answerFileName)}>{props.homeworkItem.answerFileName}</a>
                    </div>
                    <div className='task-item'>
                        <InputLabel>Примечание: </InputLabel>
                        {
                            !props.homeworkItem.teacherDesc
                            ? <textarea className='materialize-textarea' value={notation}
                                        onChange={handleNotation}/>
                            : <span>{props.homeworkItem.teacherDesc}</span>
                        }

                    </div>
                    <div className='task-item'>
                        <InputLabel>Оценка: </InputLabel>
                        {
                            !props.homeworkItem.mark
                            ? <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={rating}
                                    onChange={handleRating}
                                >
                                    <MenuItem value={'2'}>2</MenuItem>
                                    <MenuItem value={'3'}>3</MenuItem>
                                    <MenuItem value={'4'}>4</MenuItem>
                                    <MenuItem value={'5'}>5</MenuItem>
                                </Select>
                            : <span>{props.homeworkItem.mark}</span>
                        }

                    </div>
                    <button className="btn waves-effect waves-light cyan darken-2" onClick={() => {
                        props.setMark(props.homeworkItem._id, rating, notation)
                        resetRating()
                        resetNotation()
                        setTimeout(() => props.getHomeworkItem(props.homeworkItem._id), 500)
                    }}>
                        Отправить результат проверки
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckingTasks;
