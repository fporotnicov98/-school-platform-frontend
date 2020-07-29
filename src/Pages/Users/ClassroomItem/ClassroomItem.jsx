import React, { Component } from 'react';
import { compose } from "redux";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addStudentToClass, addTeacherToClass, deleteStudentToClass, getClassroom } from "../../../Redux/classReducer";
import { getStudent, getTeacher, getTeachersInfo, updateStudent, updateTeacher } from "../../../Redux/userReducer";
import './ClassroomItem.scss'
import M from "materialize-css";
import Preloader from "../../../Assets/Commons/Preloader";
import SchedulePage from "../../SchedulePage/SchedulePage";
import { addSchedule, getScheduleItem, updateSchedule } from "../../../Redux/scheduleReducer";

class ClassroomItem extends Component {

    componentDidMount() {
        let classId = this.props.match.params.classId
        if (!classId) {
            alert('404')
        }
        this.props.getClassroom(classId)
        this.props.getStudent()
        this.props.getTeacher()
        this.props.getScheduleItem(classId)
        this.props.getTeachersInfo()
        M.Dropdown.init(this.Dropdown, {})
    }

    state = {
        isClick: false,
    }

    handleStudents = () => {
        this.setState({ isClick: !this.state.isClick })
    }

    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        if (!this.props.class) return <Preloader />
        if (!this.props.scheduleItem) return <Preloader />
        return (
            <div className="classroom">
                <div className="card blue-grey lighten-4">
                    <div className="card-content">
                        <div className='class-header'>
                            <span className="card-title">{this.props.classNumber}</span>
                            <span className='add-schedule' onClick={() => {
                                this.props.addSchedule(this.props.classNumber, this.props.classId)
                                setTimeout(() => this.props.getScheduleItem(this.props.classId), 500)
                            }}>Добавить расписание</span>
                            <span className='class-teacher'>Классный руководитель:
                                {
                                    this.props.class.classTeacher.fio
                                        ? <div>
                                            <span>{this.props.class.classTeacher.fio}</span>
                                            <a href="#s" onClick={() => {
                                                this.props.addTeacherToClass(this.props.classId, "", "")
                                                this.props.updateTeacher(this.props.class.classTeacher.teacherId, this.props.class.classTeacher.fio, this.props.class.classTeacher.login, this.props.class.classTeacher.email, this.props.class.classTeacher.mobileNumber, this.props.class.classTeacher.subject, null)
                                                this.props.getClassroom(this.props.classId)
                                            }}><i className='material-icons'>remove_circle_outline</i></a>
                                        </div>
                                        : <a data-target="dropdown1"
                                            className="btn-floating btn-small waves-effect waves-light cyan darken-2"
                                            ref={Dropdown => {
                                                this.Dropdown = Dropdown;
                                            }}><i className="material-icons">add</i></a>
                                }
                            </span>
                            <ul id="dropdown1" className="dropdown-content">
                                {
                                    this.props.teachers.map((item, index) =>
                                        !item.classroom
                                            ?
                                            <li key={index} onClick={() => {
                                                this.props.addTeacherToClass(this.props.classId, item._id, item.fio, item.login, item.email, item.mobileNumber, item.subject)
                                                this.props.updateTeacher(item._id, item.fio, item.login, item.email, item.mobileNumber, item.subject, this.props.classId)
                                                this.props.getClassroom(this.props.classId)
                                            }}><a href="#">{item.fio}</a></li>
                                            : null
                                    )
                                }
                            </ul>
                        </div>
                        {
                            this.props.class.students.length > 0 && <span>Учащиеся: </span>
                        }
                        {
                            this.props.class.students.map((student, index) =>
                                <div key={index} className='items white z-depth-1-half'>
                                    <div className='info'>
                                        <span>{index + 1}.</span>
                                        <div className='fio'>{student.fio}</div>
                                        <a href="#" onClick={() => {
                                            this.props.deleteStudentToClass(this.props.classId, student.studentId)
                                            this.props.updateStudent(student.studentId, student.fio, student.login, student.email, student.mobileNumber, null)
                                            this.props.getClassroom(this.props.classId)
                                        }}><i className='material-icons'>remove_circle_outline</i></a>
                                    </div>
                                </div>
                            )
                        }
                        <span className='add-student'>Добавить ученика:
                            <a onClick={() => this.handleStudents()}
                                className="btn-floating btn-small waves-effect waves-light cyan darken-2">
                                <i className="material-icons">add</i>
                            </a>
                        </span>
                        <div className='students'>
                            {this.state.isClick &&
                                this.props.students.map((item, index) =>
                                    !item.classroom
                                        ?
                                        <div key={index} className='items white z-depth-1-half'>
                                            <div className='info'>
                                                <span>{index + 1}.</span>
                                                <div className='fio'>{item.fio}</div>
                                                <div className='login'>{item.login}</div>
                                                <a onClick={() => {
                                                    this.props.addStudentToClass(this.props.classId, item._id, item.fio, item.login, item.email, item.mobileNumber)
                                                    this.props.updateStudent(item._id, item.fio, item.login, item.email, item.mobileNumber, this.props.classId)
                                                    this.props.getClassroom(this.props.classId)
                                                }
                                                }
                                                    href="#s"><i className='material-icons'>add_circle_outline</i></a>
                                            </div>
                                        </div>
                                        : null
                                )
                            }
                        </div>
                    </div>
                </div>
                {this.props.scheduleItem.length > 0
                    ? <SchedulePage getScheduleItem={this.props.getScheduleItem} teacherInfo={this.props.teacherInfo} auth={this.props.auth} scheduleItem={this.props.scheduleItem} updateSchedule={this.props.updateSchedule} classId={this.props.classId} />
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        classNumber: state.classroom.classNumber,
        classId: state.classroom.classId,
        students: state.users.students,
        teachers: state.users.teachers,
        classroom: state.classroom.classroom,
        class: state.classroom.class,
        scheduleItem: state.schedule.scheduleItem,
        teacherInfo: state.users.teacherInfo,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        getClassroom,
        getTeacher,
        getStudent,
        addStudentToClass,
        addTeacherToClass,
        deleteStudentToClass,
        updateStudent,
        updateTeacher,
        getScheduleItem,
        addSchedule,
        getTeachersInfo,
        updateSchedule
    })
)(ClassroomItem);