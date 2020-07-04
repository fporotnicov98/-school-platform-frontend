import React from 'react';
import './PersonalPage.scss'
import {RegisterStudentFormiks} from "../../Components/Form/RegisterForm/RegisterFormStudent";
import {connect} from "react-redux";
import {moderatorReg, registration, studentReg, teacherReg} from "../../Redux/authReducer";
import {RegisterModeratorFormiks} from "../../Components/Form/RegisterForm/RegisterFormModerator";
import {RegisterTeacherFormiks} from "../../Components/Form/RegisterForm/RegisterFormTeacher";

class PersonalPage extends React.Component {
    state = {
        isToggleModerator: false,
        isToggleStudent: false,
        isToggleTeacher: false,
    }

    addModerator = () => {
        this.setState({isToggleModerator: true, isToggleStudent: false, isToggleTeacher: false})
    }
    addStudent = () => {
        this.setState({isToggleStudent: true, isToggleTeacher: false, isToggleModerator: false})
    }
    addTeacher = () => {
        this.setState({isToggleTeacher: true, isToggleModerator: false, isToggleStudent: false})
    }
    render() {
        if (!this.props.isToggleModerator) return null
        return (
            <div className='wrapper'>
                <div className='moderator'>
                    <div className='control-panel'>
                        <ul id="dropdown2" className="dropdown-content">
                            <li><a href="#!">Редактировать</a></li>
                        </ul>
                        <div className='add-user card blue-grey lighten-4'>
                            <span>Добавить класс</span>
                            <a className="btn-floating btn-small waves-effect waves-light yellow darken-2"><i
                                className="material-icons">add</i></a>
                            <span className='more'><a className="dropdown-trigger" href="#s" data-target="dropdown2"><i className="material-icons">more_vert</i></a></span>
                        </div>
                        <div className='add-user card blue-grey lighten-4'>
                            <span>Добавить ученика</span>
                            <a onClick={this.addStudent} className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                className="material-icons">add</i></a>
                            <span className='more'><a className="dropdown-trigger" href="#s" data-target="dropdown2"><i className="material-icons">more_vert</i></a></span>
                        </div>
                        <div className='add-user card blue-grey lighten-4'>
                            <span>Добавить учителя</span>
                            <a onClick={this.addTeacher} className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                className="material-icons">add</i></a>
                            <span className='more'><a className="dropdown-trigger" href="#s" data-target="dropdown2"><i className="material-icons">more_vert</i></a></span>
                        </div>
                        <div className='add-user card blue-grey lighten-4'>
                            <span>Добавить модератора</span>
                            <a onClick={this.addModerator} className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                className="material-icons">add</i></a>
                            <span className='more'><a className="dropdown-trigger" href="#s" data-target="dropdown2"><i className="material-icons">more_vert</i></a></span>
                        </div>
                    </div>
                    {
                        this.state.isToggleModerator && <RegisterModeratorFormiks moderatorReg={this.props.moderatorReg}/>
                    }
                    {
                        this.state.isToggleStudent && <RegisterStudentFormiks studentReg={this.props.studentReg}/>
                    }
                    {
                        this.state.isToggleTeacher && <RegisterTeacherFormiks teacherReg={this.props.teacherReg}/>
                    }
                </div>
            </div>
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

export default connect(mapStateToProps, {moderatorReg, studentReg, teacherReg })(PersonalPage)