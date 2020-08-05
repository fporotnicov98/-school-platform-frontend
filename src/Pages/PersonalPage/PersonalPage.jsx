import React,{useState,useEffect} from 'react';
import './PersonalPage.scss'
import {RegisterStudentFormiks} from "../../Components/Form/RegisterForm/RegisterFormStudent";
import {connect} from "react-redux";
import {moderatorReg, studentReg, teacherReg} from "../../Redux/authReducer";
import {RegisterModeratorFormiks} from "../../Components/Form/RegisterForm/RegisterFormModerator";
import {RegisterTeacherFormiks} from "../../Components/Form/RegisterForm/RegisterFormTeacher";
import {NavLink, Redirect} from "react-router-dom";
import M from "materialize-css";
import AddClass from "../../Components/Form/RegisterForm/AddClass";

const PersonalPage = props => {

    useEffect(() => {
        M.AutoInit()
    }, [])

    let [isToggleModerator, setToggleModerator] = useState(false)
    let [isToggleStudent, setToggleStudent] = useState(false)
    let [isToggleTeacher, setToggleTeacher] = useState(false)
    let [isToggleClasses, setToggleClasses] = useState(false)

    let addModerator = () => {
        setToggleModerator(true)
        setToggleStudent(false)
        setToggleTeacher(false)
        setToggleClasses(false)
    }
    let addStudent = () => {
        setToggleModerator(false)
        setToggleStudent(true)
        setToggleTeacher(false)
        setToggleClasses(false)
    }
    let addTeacher = () => {
        setToggleModerator(false)
        setToggleStudent(false)
        setToggleTeacher(true)
        setToggleClasses(false)
    }
    let addClasses = () => {
        setToggleModerator(false)
        setToggleStudent(false)
        setToggleTeacher(false)
        setToggleClasses(true)
    }

        if (!props.isAuth) return <Redirect to={'/'}></Redirect>
        if (props.role !== 'moderator') return null
        return (
            <div className='wrapper'>
                <div className='moderator'>
                    <div className='control-panel'>
                        <div className='add-user card blue-grey lighten-4'>
                            <NavLink to='/classroom'><span>Класс</span></NavLink>
                            <a onClick={addClasses}
                               className="btn-floating btn-small waves-effect waves-light yellow darken-2"><i
                                className="material-icons">add</i></a>
                        </div>
                        <div className='add-user card blue-grey lighten-4'>
                            <NavLink to='/students'><span>Ученик</span></NavLink>
                            <a onClick={addStudent}
                               className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                className="material-icons">add</i></a>
                        </div>
                        <div className='add-user card blue-grey lighten-4'>
                            <NavLink to='/teachers'><span>Учитель</span></NavLink>
                            <a onClick={addTeacher}
                               className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                className="material-icons">add</i></a>
                        </div>
                        <div className='add-user card blue-grey lighten-4'>
                            <NavLink to='/moderators'><span>Модератор</span></NavLink>
                            <a onClick={addModerator}
                               className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                className="material-icons">add</i></a>
                        </div>
                    </div>
                    {
                        isToggleModerator &&
                        <RegisterModeratorFormiks moderatorReg={props.moderatorReg}/>
                    }
                    {
                        isToggleStudent && <RegisterStudentFormiks studentReg={props.studentReg}/>
                    }
                    {
                        isToggleTeacher && <RegisterTeacherFormiks teacherReg={props.teacherReg}/>
                    }
                    {
                        isToggleClasses && <AddClass/>
                    }
                </div>
            </div>
        );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role
    }
}

export default connect(mapStateToProps, {moderatorReg, studentReg, teacherReg})(PersonalPage)