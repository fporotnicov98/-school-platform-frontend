import React from 'react';
import './PersonalPage.scss'
import {RegisterFormiks} from "../../Components/Form/RegisterForm";
import {connect} from "react-redux";
import {registration} from "../../Redux/authReducer";

const PersonalPage = (props) => {
    if (!props.isToggleModerator) return null
    return (
        <div className='wrapper'>
            <RegisterFormiks registration={props.registration}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isToggleStudent: state.auth.isToggleStudent,
        isToggleTeacher: state.auth.isToggleTeacher,
        isToggleModerator: state.auth.isToggleModerator
    }
}

export default connect(mapStateToProps, {registration})(PersonalPage)