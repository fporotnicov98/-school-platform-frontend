import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {getClasses} from "../../Redux/classReducer";
import './TasksPage.scss'

class TasksPage extends React.Component {
    state = {
        addTasks: false,
        showTasks: false,
        checkTasks: false
    }

    componentDidMount() {
        this.props.getClasses()
    }

    addTasks = () => {
        this.setState({addTasks: true, showTasks: false, checkTasks: false})
    }
    showTasks = () => {
        this.setState({addTasks: false, showTasks: true, checkTasks: false})
    }
    checkTasks = () => {
        this.setState({addTasks: false, showTasks: false, checkTasks: true})
    }

    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        return (
            <div>
                {
                    this.props.auth.role === 'student' &&
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
                    this.props.auth.role === 'teacher' &&
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
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        classroom: state.classroom.classroom,
    }
}

export default connect(mapStateToProps, {getClasses})(TasksPage)