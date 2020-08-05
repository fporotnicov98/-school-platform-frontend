import React from 'react';
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {getClasses} from "../../Redux/classReducer";
import './TasksPage.scss'

const TasksPage = props => {

        if (!props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        return (
            <div>
                {
<<<<<<< HEAD
                    this.props.auth.role === 'teacher' &&
=======
                    props.auth.role === 'student' &&
                    <div>
                        <div className='wrapper'>
                            <div className='z-depth-2 tasks blue-grey lighten-4'>
                                <div className='class'>
                                    <div className='class-block'>
                                        <NavLink to='/tasks/showTasks' className='white-text btn small cyan darken-2'>Мои
                                            задания</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    props.auth.role === 'teacher' &&
>>>>>>> 8c4ba9561ce049bdb9dc50587c8f68ce26e1760e
                    <div className='wrapper'>
                        <div className='z-depth-2 tasks blue-grey lighten-4'>
                            <div className='class'>
                                <div className='class-block'>
                                    <NavLink to='/tasks/addTasks' className='white-text btn small cyan darken-2'>Добавить
                                        задание</NavLink>
                                    <NavLink to='/tasks/showTasks' className='white-text btn small cyan darken-2'>Посмотреть
                                        все задания</NavLink>
                                    <NavLink to='/tasks/checkTasks' className='white-text btn small cyan darken-2'>Проверка
                                        заданий</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        classroom: state.classroom.classroom,
    }
}

export default connect(mapStateToProps, {getClasses})(TasksPage)