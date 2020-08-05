import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getModerator, getStudent, getTeacher, updateStudent, updateTeacher } from "../../Redux/userReducer";
import { NavLink, Redirect } from "react-router-dom";
import M from "materialize-css";
import './Classes.scss'
import { deleteClassroom, getClasses } from "../../Redux/classReducer";
import { deleteSchedule } from "../../Redux/scheduleReducer";


const Classes = props => {

    useEffect(() => {
        props.getClasses()
        props.getStudent();
        props.getModerator();
        props.getTeacher();
        M.AutoInit();
    }, [])

    if (!props.isAuth) return <Redirect to='/'></Redirect>
    return (
        <div className='row'>
            <div className='users'>
                <nav className='blue-grey lighten-4'>
                    <div className="nav-wrapper">
                        <NavLink to="/personal" className="breadcrumb">Личный кабинет</NavLink>
                        <a href="#!" className="breadcrumb">Классы</a>
                    </div>
                </nav>
                <ul className="collapsible popout">
                    <li className='active'>
                        <div className="collapsible-header blue-grey lighten-4">Классы</div>
                        <div className="collapsible-body">
                            {
                                props.classroom.map((item) =>
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
                                                    props.deleteSchedule(item._id)
                                                    props.deleteClassroom(item._id)
                                                    props.students.map(student => {
                                                        student.classroom === item._id
                                                            && props.updateStudent(student._id, student.fio, student.login, student.email, student.mobileNumber, null)
                                                    })
                                                    props.teachers.map(teacher => {
                                                        teacher.classroom === item._id
                                                            && props.updateTeacher(teacher._id, teacher.fio, teacher.login, teacher.email, teacher.mobileNumber, teacher.subject, null)
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
