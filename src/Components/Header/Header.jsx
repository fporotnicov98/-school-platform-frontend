import React from 'react';
import './Header.scss'
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import M from "materialize-css";

class Header extends React.Component {
    componentDidMount() {
        M.Sidenav.init(this.Sidenav, {})
    }

    render() {
        return (
            <>
                <nav className="header nav-wrapper blue-grey lighten-4">
                    {
                        (this.props.isAuth) &&
                        <a href="#s" data-target="slide-out" className="sidenav-trigger show-on-large"><i
                            className="material-icons">menu</i></a>}
                    <a href="#s" className="brand-logo">LearnSchool</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {
                            (this.props.role === 'moderator') &&
                            <li><NavLink to="/personal">Личный кабинет</NavLink></li>
                        }
                        {
                            (this.props.isAuth) &&
                            <li><NavLink to="#s" onClick={() => this.props.logout()}>Выйти</NavLink></li>
                        }
                    </ul>
                </nav>
                <div id="slide-out" className="sidenav" ref={Sidenav => {
                    this.Sidenav = Sidenav;
                }}>
                    <div className="user-view">
                        {
                            (this.props.role === 'moderator') &&
                            <li className='role-user name black-text'>Я модератор</li>
                        }
                        {
                            (this.props.role === 'student') && <li className='role-user name black-text'>Я ученик</li>
                        }
                        {
                            (this.props.role === 'teacher') && <li className='role-user name black-text'>Я учитель</li>
                        }
                        <a href="#s"><span className="black-text name">Зубенко Михайил Петрович</span></a>
                        <a href="#s"><span className="black-text email">zubenkoMP@gmail.com</span></a>
                        <NavLink to='/profile'
                                 className="side-btn waves-effect waves-light btn white-text cyan darken-2">Профиль</NavLink>
                        <NavLink to='/journal'
                                 className="side-btn waves-effect waves-light btn white-text cyan darken-2">Журнал</NavLink>
                        <NavLink to='/schedule'
                                 className="side-btn waves-effect waves-light btn white-text cyan darken-2">Расписание</NavLink>
                        <NavLink to=''
                                 className="side-btn waves-effect waves-light btn white-text cyan darken-2">Класс</NavLink>
                        <NavLink to=''
                                 className="side-btn waves-effect waves-light btn white-text cyan darken-2">Задания</NavLink>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role,
    }
}

export default connect(mapStateToProps, {logout})(Header);
