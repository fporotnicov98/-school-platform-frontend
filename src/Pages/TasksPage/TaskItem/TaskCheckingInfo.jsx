import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import Preloader from "../../../Assets/Commons/Preloader";
import './../addTasks/AddTasks.scss'

const TaskCheckingInfo = (props) => {
    if (!props.auth.isAuth) return <Redirect to={'/'}/>
    if (!props.homeworkItem) return <Preloader/>
    return (
        <div className='wrapper'>
            <nav className='blue-grey lighten-4'>
                <div className="nav-wrapper">
                    <NavLink to="/tasks" className="breadcrumb">Задания</NavLink>
                    <NavLink to="/tasks/showTasks" className="breadcrumb">Все задания</NavLink>
                    <a href="#!" className="breadcrumb">Отправить ответ</a>
                </div>
            </nav>
            <div className='z-depth-2 add-tasks blue-grey lighten-4'>
                {
                    !props.homeworkItem.mark && !props.homeworkItem.teacherDesc
                        ? <div className='tasks-body'>
                            <h4>Ваше задание было отправлено, ожидайте оценку от учителя</h4>
                        </div>
                        : <div className='tasks-body'>
                            <h4>Ваша работы была оценена учителем</h4>
                            <div className='mark'>
                                <p>Оценка:</p>
                                    {
                                        props.homeworkItem.mark === '5' &&
                                        <span className='red-text'>{props.homeworkItem.mark}</span>
                                    }
                                    {
                                        props.homeworkItem.mark === '4' &&
                                        <span className='orange-text'>{props.homeworkItem.mark}</span>
                                    }
                                    {
                                        props.homeworkItem.mark === '3' &&
                                        <span className='yellow-text'>{props.homeworkItem.mark}</span>
                                    }
                                    {
                                        props.homeworkItem.mark === '2' &&
                                        <span className='red-text'>{props.homeworkItem.mark}</span>
                                    }

                            </div>
                            <div className='desc'>
                                <p>Комментарий учителя: </p><span>{props.homeworkItem.teacherDesc}</span>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default TaskCheckingInfo;
