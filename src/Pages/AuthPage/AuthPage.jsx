import React from 'react';
import './AuthPage.scss'
import {LoginFormiks} from "../../Components/Form/LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";

const AuthPage = (props) => {
    if (props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div className='wrapper'>
            <LoginFormiks login={props.login}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(AuthPage)
