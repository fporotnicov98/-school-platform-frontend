import React from 'react';
import logo from './../../Assets/Images/logo.png'
import './Header.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header nav-wrapper blue-grey lighten-4">
            <a href="#s" className="brand-logo"><img src={logo} alt="Logo"/></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Войти</NavLink></li>
                <li><NavLink to="/personal">Личный кабинет</NavLink></li>
                <li><NavLink to="#s">Выйти</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;
