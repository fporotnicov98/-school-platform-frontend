import React from 'react';
import './Header.scss'
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {chooseModerator, chooseStudent, chooseTeacher} from "../../Redux/authReducer";


class Header extends React.Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            let instances = window.M.Sidenav.init(elems, {edge: 'left', draggable: false});
        });
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.dropdown-trigger');
            let instances = window.M.Dropdown.init(elems, {});
        });
    }

    render() {
        return (
            <>
                <ul id="dropdown1" className="role dropdown-content">
                    <li><a onClick={this.props.chooseStudent} href="#s">Я - ученик</a></li>
                    <li><a onClick={this.props.chooseTeacher} href="#s">Я - учитель</a></li>
                    <li><a onClick={this.props.chooseModerator} href="#s">Я - модератор</a></li>
                </ul>

                <nav className="header nav-wrapper blue-grey lighten-4">
                    <a href="#s" data-target="slide-out" className="sidenav-trigger show-on-large"><i
                        className="material-icons">menu</i></a>
                    <a href="#s" className="brand-logo">LearnSchool</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a className="dropdown-trigger" href="#s" data-target="dropdown1">Роль<i
                            className="material-icons right">arrow_drop_down</i></a></li>
                        <li><NavLink to="/">Войти</NavLink></li>
                        {
                            this.props.isToggleModerator && <li><NavLink to="/personal">Личный кабинет</NavLink></li>
                        }
                        <li><NavLink to="#s">Выйти</NavLink></li>
                    </ul>
                </nav>
                <div id="slide-out" className="sidenav">
                    <div className="user-view">
                        {
                            this.props.isToggleModerator && <li className='role-user name black-text'>Я модератор</li>
                        }
                        {
                            this.props.isToggleStudent && <li className='role-user name black-text'>Я ученик</li>
                        }
                        {
                            this.props.isToggleTeacher && <li className='role-user name black-text'>Я учитель</li>
                        }
                        <a href="#s"><span className="black-text name">Зубенко Михайил Петрович</span></a>
                        <a href="#s"><span className="black-text email">zubenkoMP@gmail.com</span></a>
                        <NavLink to='/profile' className="side-btn waves-effect waves-light btn white-text cyan darken-2">Профиль</NavLink>
                        <NavLink to='/journal' className="side-btn waves-effect waves-light btn white-text cyan darken-2">Журнал</NavLink>
                        <NavLink to='/schedule' className="side-btn waves-effect waves-light btn white-text cyan darken-2">Расписание</NavLink>
                        <NavLink to='' className="side-btn waves-effect waves-light btn white-text cyan darken-2">Класс</NavLink>
                        <NavLink to='' className="side-btn waves-effect waves-light btn white-text cyan darken-2">Задания</NavLink>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isToggleStudent: state.auth.isToggleStudent,
        isToggleTeacher: state.auth.isToggleTeacher,
        isToggleModerator: state.auth.isToggleModerator
    }
}

export default connect(mapStateToProps, {chooseStudent, chooseTeacher, chooseModerator})(Header);
