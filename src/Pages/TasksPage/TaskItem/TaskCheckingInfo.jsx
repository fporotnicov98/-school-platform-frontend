import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import Preloader from "../../../Assets/Commons/Preloader";

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
                            <span>Оценка {props.homeworkItem.mark}</span>
                            <span>Комментарий учителя {props.homeworkItem.teacherDesc}</span>
                        </div>
                }
            </div>
        </div>
    );
};

export default TaskCheckingInfo;
