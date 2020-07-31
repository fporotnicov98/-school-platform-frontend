import React, {useEffect,useState} from 'react';
import {withRouter, Redirect} from "react-router-dom";
import date from "../../../Assets/Other/date";
import {connect} from "react-redux";
import {compose} from "redux";
import {getTaskItem, updateTask} from "../../../Redux/taskReducer";

const TaskItem = (props) => {

    let [title, setTitle] = useState('')
    let [description, setDesc] = useState('')

    useEffect(() => {
        props.getTaskItem(props.match.params.tasksId)
    }, [])

    
    let handleTitle = (e) => {
        setTitle(e.target.value)
    }
    let handleDesc = (e) => {
        setDesc(e.target.value)
    }

   
    

    if (!props.auth.isAuth) return <Redirect to={'/'}></Redirect>
    return (
        <>
            <div className='wrapper'>
                <div className='z-depth-2 add-tasks blue-grey lighten-4'>
                    <div className='tasks-body'>
                        <div className='class-number'>
                            <span>Класс: </span>
                            <span>{props.task && props.task.classNumber}</span>
                        </div>
                        <div className='subject'>Предмет:
                            <span className='subject-text'>{props.auth.subject}</span>
                        </div>
                        <div className='topic'>Тема задания:
                            <div className="input-field">
                                <input id="topic" type="text" className="validate" value={props.task && props.task.taskTitle}
                                       onChange={handleTitle} placeholder="Введите тему задания"/>
                            </div>
                        </div>
                        <div className='date'>Дата публикации:
                            <input type="text" value={props.task && props.task.publicDate}/>
                        </div>
                        <div className='deadline'>Срок сдачи:
                            {props.task && props.task.deadlineDate}
                        </div>
                        <div className='description'>Описание задания
                            <div className="input-field">
                                    <textarea className='materialize-textarea' value={props.task && props.task.taskText}
                                              onChange={handleDesc}></textarea>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light cyan darken-2" type="submit"
                                name="action"
                                onClick={() => props.updateTask(props.task._id, title, description, date())}>Изменить
                            задание
                            <i className="material-icons right">send</i>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        task: state.task.taskItem,
        auth: state.auth,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getTaskItem, updateTask})
)(TaskItem)
