import React, {Component} from 'react';
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addStudentToClass, addTeacherToClass, deleteStudentToClass, getClassroom} from "../../../Redux/classReducer";
import {getStudent, getTeacher, updateStudent, updateTeacher} from "../../../Redux/userReducer";
import './ClassroomItem.scss'
import M from "materialize-css";

class ClassroomItem extends Component {

    componentDidMount() {
        let classId = this.props.match.params.classId
        if (!classId) {
            alert('404')
        }
        this.props.getClassroom(classId)
        this.props.getStudent()
        this.props.getTeacher()
        M.Dropdown.init(this.Dropdown, {})
    }

    state = {
        isClick: false,
    }

    handleStudents = () => {
        this.setState({isClick: !this.state.isClick})
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/'}></Redirect>
        return (
            <div className="classroom">
                <div className="card blue-grey lighten-4">
                    <div className="card-content">
                        <div className='class-header'>
                            <span className="card-title">{this.props.classNumber}</span>
                            <span className='class-teacher'>Классный руководитель:
                                {
                                    this.props.classroom.map(item =>
                                        item._id === this.props.classId
                                            ? item.classTeacher.fio
                                            ? <div>
                                                <span>{item.classTeacher.fio}</span>
                                                <a onClick={() => {
                                                    this.props.updateTeacher(item.classTeacher.teacherId, item.fio, item.login, item.email, item.mobileNumber, item.subject, "")
                                                    this.props.addTeacherToClass(this.props.classId, "", "")
                                                }}
                                                   href="#s"><i className='material-icons'>remove_circle_outline</i></a>
                                            </div>
                                            : <a ref={Dropdown => {
                                                this.Dropdown = Dropdown;
                                            }} data-target="dropdown1"
                                                 className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                                className="material-icons">add</i></a>
                                            : null
                                    )
                                }
                            </span>
                            <ul id="dropdown1" className="dropdown-content">
                                {
                                    this.props.teachers.map((item, index) =>
                                        <li onClick={() => {
                                            this.props.addTeacherToClass(this.props.classId, item._id, item.fio)
                                            this.props.updateTeacher(item._id, item.fio, item.login, item.email, item.mobileNumber, item.subject, this.props.classId)
                                        }}
                                            key={index}><a href="#!">{item.fio}</a></li>
                                    )
                                }
                            </ul>
                        </div>
                        {
                            this.props.classroom.map(item =>
                                item.students.length > 0 && <span>Учащиеся: </span>
                            )
                        }
                        {
                            this.props.classroom.map(item =>
                                item._id === this.props.classId
                                    ? item.students.map((student, index) =>
                                        <div key={index} className='items white z-depth-1-half'>
                                            <div className='info'>
                                                <span>{index + 1}.</span>
                                                <div className='fio'>{student.fio}</div>
                                                <a onClick={() => {
                                                    this.props.updateStudent(student.studentId, item.fio, item.login, item.email, item.mobileNumber, null)
                                                    this.props.deleteStudentToClass(this.props.classId, student.studentId)

                                                }}
                                                   href="#s"><i className='material-icons'>remove_circle_outline</i></a>
                                            </div>
                                        </div>
                                    )
                                    : null
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
                                                this.props.addStudentToClass(this.props.classId, item._id, item.fio)
                                                this.props.updateStudent(item._id, item.fio, item.login, item.email, item.mobileNumber, this.props.classId)
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        classNumber: state.classroom.classNumber,
        classId: state.classroom.classId,
        students: state.users.students,
        teachers: state.users.teachers,
        classroom: state.classroom.classroom
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
        updateTeacher
    })
)(ClassroomItem);