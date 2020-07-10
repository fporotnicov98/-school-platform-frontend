import React, { Component } from 'react';
import { compose } from "redux";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getClassroom } from "../../../Redux/classReducer";
import { getStudent, getTeacher, updateStudent, updateTeacher } from "../../../Redux/userReducer";
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
    }

    state = {
        isClick: false,
    }

    handleStudents = () => {
        this.setState({ isClick: !this.state.isClick })
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
                                    <a className="btn-floating btn-small waves-effect waves-light cyan darken-2">
                                    <i className="material-icons">add</i>
                                </a>
                            </span>
                        </div>
                        <span>Учащиеся: </span>
                        {
                            this.props.students.map((item, index) =>
                                item.classroom === this.props.classId
                                    ?
                                    <div className='items white z-depth-1-half'>
                                        <div className='info'>
                                            <span>{index + 1}.</span>
                                            <div className='fio'>{item.fio}</div>
                                            <div className='login'>{item.login}</div>
                                            <div className='email'>{item.email}</div>
                                            <div className='mobileNumber'>{item.mobileNumber}</div>
                                            <a onClick={() => this.props.updateStudent(item._id, item.fio, item.login, item.email, item.mobileNumber, "none")} href="#s"><i className='material-icons'>remove_circle_outline</i></a>
                                        </div>
                                    </div>
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
                                    item.classroom === 'none'
                                        ?
                                        <div className='items white z-depth-1-half'>
                                            <div className='info'>
                                                <span>{index + 1}.</span>
                                                <div className='fio'>{item.fio}</div>
                                                <div className='login'>{item.login}</div>
                                                <div className='email'>{item.email}</div>
                                                <div className='mobileNumber'>{item.mobileNumber}</div>
                                                <a onClick={() => this.props.updateStudent(item._id, item.fio, item.login, item.email, item.mobileNumber, this.props.classId)} href="#s"><i className='material-icons'>add_circle_outline</i></a>
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
        students: state.users.students
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { getClassroom, getTeacher, getStudent, updateTeacher, updateStudent })
)(ClassroomItem);