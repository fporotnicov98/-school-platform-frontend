import React from 'react';
import './AuthPage.scss'
import {LoginFormiks} from "../../Components/Form/LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";

const AuthPage = (props) => {
    return (
        <div className='wrapper'>
            <LoginFormiks login={props.login}/>
        </div>
    );
}

export default connect(null, {login})(AuthPage)
