import React from 'react';
import './PersonalPage.scss'
import {RegisterStudentFormiks} from "../../Components/Form/RegisterForm/RegisterFormStudent";
import {connect} from "react-redux";
import {moderatorReg, studentReg, teacherReg} from "../../Redux/authReducer";
import {RegisterModeratorFormiks} from "../../Components/Form/RegisterForm/RegisterFormModerator";
import {RegisterTeacherFormiks} from "../../Components/Form/RegisterForm/RegisterFormTeacher";
import {NavLink, Redirect} from "react-router-dom";
import M from "materialize-css";

class PersonalPage extends React.Component {
    componentDidMount() {
        M.Modal.init(this.Modal, {})
        M.FormSelect.init(this.FormSelect, {})
        M.FormSelect.init(this.FormSelect1, {})
    }

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
        if (!this.props.isAuth) return <Redirect to={'/'}></Redirect>
        if (this.props.role != 'moderator') return null
        return (
            <div className='wrapper'>
                <div className='moderator'>
                    <div className='control-panel'>
                        <div className='add-user card blue-grey lighten-4'>
                            <NavLink to='/users'><span>Класс</span></NavLink>
                            <a data-target="modal1"
                               className="btn modal-trigger btn-floating btn-small waves-effect waves-light yellow darken-2"><i
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
                    <div id="modal1" className="modal" ref={Modal => {
                        this.Modal = Modal
                    }
                    }>
                        <div className="modal-content">
                            <h4>Добавить класс</h4>
                            <div className="input-field number-class">
                                <select ref={FormSelect => {
                                    this.FormSelect = FormSelect;
                                }}>
                                    <option value="" disabled selected>Выберите номер</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                </select>
                            </div>
                            <div className="input-field letter-class">
                                <select ref={FormSelect => {
                                    this.FormSelect1 = FormSelect;
                                }}>
                                    <option value="" disabled selected>Выберите букву</option>
                                    <option value="А">А</option>
                                    <option value="Б">Б</option>
                                    <option value="В">В</option>
                                    <option value="Г">Г</option>
                                    <option value="Д">Д</option>
                                    <option value="Е">Е</option>
                                    <option value="Ж">Ж</option>
                                    <option value="З">З</option>
                                    <option value="И">И</option>
                                    <option value="К">К</option>
                                </select>
                            </div>
                            <a href="#!"
                               className="center modal-close waves-effect waves-light btn-flat cyan darken-2 white-text">Добавить</a>
                        </div>

                    </div>
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