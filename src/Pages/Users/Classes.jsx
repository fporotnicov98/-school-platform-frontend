import React, {Component} from 'react';
import {connect} from "react-redux";
import {getModerator, getStudent, getTeacher, updateStudent, updateTeacher} from "../../Redux/userReducer";
import {NavLink, Redirect} from "react-router-dom";
import M from "materialize-css";
import './Classes.scss'
import {deleteClassroom, getClasses} from "../../Redux/classReducer";
import {deleteSchedule} from "../../Redux/scheduleReducer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

class Classes extends Component {

    componentDidMount() {
        this.props.getClasses()
        this.props.getStudent();
        this.props.getModerator();
        this.props.getTeacher();
        M.Collapsible.init(this.Collapsible, {accordion: false});
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/'></Redirect>
        return (
            <div className='row'>
                <div className='users'>
                    <nav className='blue-grey lighten-4'>
                        <div className="nav-wrapper">
                            <NavLink to="/personal" className="breadcrumb">Личный кабинет</NavLink>
                            <a href="#!" className="breadcrumb">Классы</a>
                        </div>
                    </nav>
                    <ul ref={Collapsible => {
                        this.Collapsible = Collapsible;
                    }} className="collapsible popout">
                        <li className='active'>
                            <div className="collapsible-header blue-grey lighten-4">Классы</div>
                            <div className="collapsible-body">
                                {
                                    this.props.classroom.map((item) =>
                                        <div className='items white z-depth-1-half'>
                                            <div className='info'>
                                                <div className='number-class'>Класс: <NavLink
                                                    to={'/classroom/' + item._id}><span
                                                    className='number '>{item.classNumber}</span></NavLink></div>
                                                <div className='id-class'>ID класса: {item._id}</div>
                                            </div>
                                            <div className='buttons'>
                                                <a className='delete'
                                                   onClick={() => {
                                                       this.props.deleteSchedule(item._id)
                                                       this.props.deleteClassroom(item._id)
                                                       this.props.students.map(student => {
                                                           student.classroom === item._id
                                                           && this.props.updateStudent(student._id, student.fio, student.login, student.email, student.mobileNumber, null)
                                                       })
                                                       this.props.teachers.map(teacher => {
                                                           teacher.classroom === item._id
                                                           && this.props.updateTeacher(teacher._id, teacher.fio, teacher.login, teacher.email, teacher.mobileNumber, teacher.subject, null)
                                                       })
                                                   }
                                                   }
                                                   href="#s">
                                                    <i className="material-icons">delete</i>
                                                </a>
                                            </div>

                                        </div>
                                    )
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        students: state.users.students,
        teachers: state.users.teachers,
        moderators: state.users.moderators,
        classroom: state.classroom.classroom,
        classId: state.classroom.classId,
    }
}

export default connect(mapStateToProps,
    {
        getStudent,
        getTeacher,
        getModerator,
        getClasses,
        deleteClassroom,
        updateStudent,
        updateTeacher,
        deleteSchedule
    })(Classes);
