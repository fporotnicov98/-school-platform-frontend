import React, {useEffect} from 'react';
import {compose} from "redux";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addStudentToClass, addTeacherToClass, deleteStudentToClass, getClassroom} from "../../../Redux/classReducer";
import {getStudent, getTeacher, getTeachersInfo, updateStudent, updateTeacher} from "../../../Redux/userReducer";
import './ClassroomItem.scss'
import Preloader from "../../../Assets/Commons/Preloader";
import ScheduleModerator from "../../SchedulePage/ScheduleModerator";
import {addSchedule, getScheduleItem, updateSchedule} from "../../../Redux/scheduleReducer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const ClassroomItem = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [click, setClick] = React.useState(false)

    const handleStudents = () => setClick(!click)
    const handleClick = (e) => setAnchorEl(e.currentTarget)
    const handleClose = () => setAnchorEl(null);
    
    useEffect(() => {
        props.getClassroom(props.match.params.classId)
        props.getStudent()
        props.getTeacher()
        props.getScheduleItem(props.match.params.classId)
        props.getTeachersInfo()
    }, [])

    if (!props.auth.isAuth) return <Redirect to={'/'}/>
    if (!props.class) return <Preloader/>
    if (!props.scheduleItem) return <Preloader/>
    return (
        <div className="classroom">
            <nav className='blue-grey lighten-4'>
                <div className="nav-wrapper">
                    <NavLink to="/personal" className="breadcrumb">Личный кабинет</NavLink>
                    <NavLink to="/classroom" className="breadcrumb">Классы</NavLink>
                    <a href="#!" className='breadcrumb'>{props.classNumber}</a>
                </div>
            </nav>
            <div className="card blue-grey lighten-4">
                <div className="card-content">
                    <div className='class-header'>
                        <span className="card-title">{props.classNumber}</span>
                        <span className='class-teacher'><span>Классный руководитель:</span>
                            {
                                props.class.classTeacher.fio
                                    ? <div className='teacher'>
                                        {props.class.classTeacher.fio}
                                        <a href="#s" onClick={() => {
                                            props.addTeacherToClass(props.classId, "", "")
                                            props.updateTeacher(props.class.classTeacher.teacherId, props.class.classTeacher.fio, props.class.classTeacher.login, props.class.classTeacher.email, props.class.classTeacher.mobileNumber, props.class.classTeacher.subject, "", "")
                                            props.getClassroom(props.classId)
                                        }}><i className='material-icons'>remove_circle_outline</i></a>
                                    </div>
                                    : <a aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                         className="btn-floating btn-small waves-effect waves-light cyan darken-2"
                                    ><i className="material-icons">add</i></a>
                            }
                        </span>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {
                                props.teachers.map((item, index) =>
                                    !item.classNumber
                                        ?
                                        <MenuItem key={index} onClick={() => {
                                            props.addTeacherToClass(props.classId, item._id, item.fio, item.login, item.email, item.mobileNumber, item.subject)
                                            props.updateTeacher(item._id, item.fio, item.login, item.email, item.mobileNumber, item.subject, props.classId, props.classNumber)
                                            props.getClassroom(props.classId)
                                            handleClose()
                                        }}><a href="#">{item.fio}</a></MenuItem>
                                        : null
                                )
                            }
                        </Menu>
                    </div>
                    {
                        props.class.students.length > 0 && <span className='student'>Учащиеся: </span>
                    }
                    {
                        props.class.students.map((student, index) =>
                            <div key={index} className='items white z-depth-1-half'>
                                <div className='info'>
                                    <span>{index + 1}.</span>
                                    <div className='fio'>{student.fio}</div>
                                    <a href="#" onClick={() => {
                                        props.deleteStudentToClass(props.classId, student.studentId)
                                        props.updateStudent(student.studentId, student.fio, student.login, student.email, student.mobileNumber, null, null)
                                        props.getClassroom(props.classId)
                                    }}><i className='material-icons'>remove_circle_outline</i></a>
                                </div>
                            </div>
                        )
                    }
                    <div className='add-student'>
                            <span>Добавить ученика:
                                <a onClick={() => handleStudents()}
                                   className="btn-floating btn-small waves-effect waves-light cyan darken-2">
                                    <i className="material-icons">add</i>
                                </a>
                            </span>
                        {
                            !props.scheduleItem.length > 0
                                ? <span>Добавить расписание
                                <a onClick={() => {
                                    props.addSchedule(props.classNumber, props.classId)
                                    setTimeout(() => props.getScheduleItem(props.classId), 500)
                                }}
                                   className="btn-floating btn-small waves-effect waves-light cyan darken-2">
                                        <i className="material-icons">event_note</i>
                                    </a>
                            </span>
                                : null
                        }
                    </div>
                    <div className='students'>
                        {click &&
                        props.students.map((item, index) =>
                            !item.classId
                                ?
                                <div key={index} className='items white z-depth-1-half'>
                                    <div className='info'>
                                        <span>{index + 1}.</span>
                                        <div className='fio'>{item.fio}</div>
                                        <div className='login'>{item.login}</div>
                                        <a onClick={() => {
                                            props.addStudentToClass(props.classId, item._id, item.fio, item.login, item.email, item.mobileNumber, props.classNumber)
                                            props.updateStudent(item._id, item.fio, item.login, item.email, item.mobileNumber, props.classId, props.classNumber)
                                            props.getClassroom(props.classId)
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
            {props.scheduleItem.length > 0
                ?
                <ScheduleModerator getScheduleItem={props.getScheduleItem} teacherInfo={props.teacherInfo}
                                   auth={props.auth} scheduleItem={props.scheduleItem}
                                   updateSchedule={props.updateSchedule} classId={props.classId}/>
                : null
            }
        </div>
    );
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