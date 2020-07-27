import React from 'react';
import './PersonalPage.scss'
import {RegisterStudentFormiks} from "../../Components/Form/RegisterForm/RegisterFormStudent";
import {connect} from "react-redux";
import {moderatorReg, studentReg, teacherReg} from "../../Redux/authReducer";
import {RegisterModeratorFormiks} from "../../Components/Form/RegisterForm/RegisterFormModerator";
import {RegisterTeacherFormiks} from "../../Components/Form/RegisterForm/RegisterFormTeacher";
import {NavLink, Redirect} from "react-router-dom";
import M from "materialize-css";
import AddClass from "../../Components/Form/RegisterForm/AddClass";

class PersonalPage extends React.Component {
    componentDidMount() {
        M.Modal.init(this.Modal, {})
    }

    state = {
        isToggleModerator: false,
        isToggleStudent: false,
        isToggleTeacher: false,
        isToggleClasses: false,
    }

    addModerator = () => {
        this.setState({isToggleModerator: true, isToggleStudent: false, isToggleTeacher: false, isToggleClasses: false})
    }
    addStudent = () => {
        this.setState({isToggleStudent: true, isToggleTeacher: false, isToggleModerator: false, isToggleClasses: false})
    }
    addTeacher = () => {
        this.setState({isToggleTeacher: true, isToggleModerator: false, isToggleStudent: false, isToggleClasses: false})
    }
    addClasses = () => {
        this.setState({isToggleClasses: true, isToggleTeacher: false, isToggleModerator: false, isToggleStudent: false})
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/'}></Redirect>
        if (this.props.role != 'moderator') return null
        return (
            <div className='wrapper'>
                <div className='moderator'>
                    <div className='control-panel'>
                        <div className='add-user card blue-grey lighten-4'>
                            <NavLink to='/classroom'><span>Класс</span></NavLink>
                            <a onClick={
                                this.addClasses
                            }
                               className="btn-floating btn-small waves-effect waves-light yellow darken-2"><i
                                className="material-icons">add</i></a>
                        </div>
                        <div className='add-user card blue-grey lighten-4'>
                            <NavLink to='/students'><span>Ученик</span></NavLink>
                            <a onClick={this.addStudent}
                               className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                className="material-icons">add</i></a>
                        </div>
                        <div className='add-user card blue-grey lighten-4'>
                            <NavLink to='/teachers'><span>Учитель</span></NavLink>
                            <a onClick={this.addTeacher}
                               className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                className="material-icons">add</i></a>
                        </div>
                        <div className='add-user card blue-grey lighten-4'>
                            <NavLink to='/moderators'><span>Модератор</span></NavLink>
                            <a onClick={this.addModerator}
                               className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                className="material-icons">add</i></a>
                        </div>
                    </div>
                    {
                        this.state.isToggleModerator &&
                        <RegisterModeratorFormiks moderatorReg={this.props.moderatorReg}/>
                    }
                    {
                        this.state.isToggleStudent && <RegisterStudentFormiks studentReg={this.props.studentReg}/>
                    }
                    {
                        this.state.isToggleTeacher && <RegisterTeacherFormiks teacherReg={this.props.teacherReg}/>
                    }
                    {
                        this.state.isToggleClasses && <AddClass/>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role
    }
}

export default connect(mapStateToProps, {moderatorReg, studentReg, teacherReg})(PersonalPage)