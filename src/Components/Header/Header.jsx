import React, {useEffect} from 'react';
import './Header.scss'
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import M from "materialize-css";

const Header = props => {

    useEffect(() => {
        M.AutoInit()
    }, [])

        return (
            <>
                <nav className="header nav-wrapper blue-grey lighten-4">
                    {
<<<<<<< HEAD
                        this.props.isAuth &&
                        <a href="#s" data-target="slide-out" className="sidenav-trigger show-on-large"><i
=======
                        props.isAuth && <a href="#s" data-target="slide-out" className="sidenav-trigger show-on-large"><i
>>>>>>> 8c4ba9561ce049bdb9dc50587c8f68ce26e1760e
                            className="material-icons">menu</i></a>}
                    <a href="#s" className="brand-logo">LearnSchool</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {
                            (props.auth.role === 'moderator') &&
                            <li><NavLink to="/personal">Личный кабинет</NavLink></li>
                        }
                        {
                            (props.isAuth) &&
                            <li><NavLink to="#s" onClick={() => props.logout()}>Выйти</NavLink></li>
                        }
                    </ul>
                </nav>
                <div id="slide-out" className="sidenav">
                    <div className="user-view">
                        {
                            (props.auth.role === 'moderator') &&
                            <li className='role-user name black-text'>Я модератор</li>
                        }
                        {
                            (props.auth.role === 'student') &&
                            <li className='role-user name black-text'>Я ученик</li>
                        }
                        {
                            (props.auth.role === 'teacher') &&
                            <li className='role-user name black-text'>Я учитель</li>
                        }
                        <a href="#s"><span className="black-text name">{props.auth.fio}</span></a>
                        <NavLink to='/profile'
                                 className="sidenav-close side-btn waves-effect waves-light btn white-text cyan darken-2">Профиль</NavLink>
                        {
                            (props.auth.role === 'teacher' || props.auth.role === 'student') &&
                            <>
                                <NavLink to='/schedule'
                                         className="sidenav-close side-btn waves-effect waves-light btn white-text cyan darken-2">Расписание</NavLink>
                                {
                                    props.auth.classId
                                    && <NavLink to={'/journal/' + props.auth.classId}
                                                className="sidenav-close side-btn waves-effect waves-light btn white-text cyan darken-2">Журнал</NavLink>
                                }
                                {
                                    props.auth.classId
                                    && <NavLink to={'/dialogs/' + props.auth.classId}
                                                className="sidenav-close side-btn waves-effect waves-light btn white-text cyan darken-2">Класс</NavLink>
                                }
                                {
                                    this.props.auth.role === 'student' && <NavLink to='/tasks/showTasks'
                                                                                   className="sidenav-close side-btn waves-effect waves-light btn white-text cyan darken-2">Задания</NavLink>
                                }
                                {
                                    this.props.auth.role === 'teacher' && <NavLink to='/tasks'
                                                                                   className="sidenav-close side-btn waves-effect waves-light btn white-text cyan darken-2">Задания</NavLink>
                                }
                            </>
                        }
                    </div>
                </div>
            </>
        );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        auth: state.auth,
    }
}

export default connect(mapStateToProps, {logout})(Header);
