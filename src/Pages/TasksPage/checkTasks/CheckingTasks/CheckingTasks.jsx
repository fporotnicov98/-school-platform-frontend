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
                        {/*<span>{props.taskItem.classNumber}</span>*/}
                    </div>
                    <div className='subject'>Предмет:
                        {/*<span className='subject-text'>{props.taskItem.subject}</span>*/}
                    </div>
                    <div className='topic'>Тема задания:
                        {/*<span>{props.taskItem.taskTitle}</span>*/}
                    </div>
                    <div className='date'>Ученик:
                        {/*<span>{props.taskItem.publicDate}</span>*/}
                    </div>
                    <div className='deadline'>Срок сдачи:
                        {/*<span>{props.taskItem.deadlineDate}</span>*/}
                    </div>
                    <div className='description'>Дата публикации ученика
                        {/*<span>{props.taskItem.taskText}</span>*/}
                    </div>
                    <div className='description'>Ответ ученика
                        {/*<span>{props.taskItem.taskText}</span>*/}
                    </div>
                    <div className='description'>Примечание
                        {/*<span>{props.taskItem.taskText}</span>*/}
                    </div>
                    <div className='answer'>Оценка
                        {/*<input type='text' value={answer} onChange={handleAnswer}/>*/}
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
