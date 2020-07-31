import React from 'react';
import {NavLink} from "react-router-dom";

const CheckingTasks = (props) => {
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
                    <div className='class-number'>
                        <span>Класс: </span>
                        <span>{props.homeworkItem.classNumber}</span>
                    </div>
                    <div className='subject'>Предмет:
                        <span className='subject-text'>{props.homeworkItem.subject}</span>
                    </div>
                    <div className='topic'>Тема задания:
                        <span>{props.homeworkItem.taskTitle}</span>
                    </div>
                    <div className='date'>Ученик:
                        <span>{props.homeworkItem.student}</span>
                    </div>
                    <div className='deadline'>Срок сдачи:
                        <span>{props.homeworkItem.deadlineDate}</span>
                    </div>
                    <div className='description'>Дата публикации ученика
                        <span>{props.homeworkItem.publicDate}</span>
                    </div>
                    <div className='description'>Ответ ученика
                        <span>{props.homeworkItem.answerToTask}</span>
                    </div>
                    <div className='description'>Примечание
                        <span></span>
                    </div>
                    <div className='answer'>Оценка
                        
                    </div>
                    <button className="btn waves-effect waves-light cyan darken-2" type="submit" name="action">
                        Отправить результат првоерки
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckingTasks;
