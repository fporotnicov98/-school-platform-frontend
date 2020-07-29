import {userAPI} from "../Api/Api";
import {regSuccess} from "../Components/ConfirmForm/SuccessConfirm";

const SET_STUDENTS = 'SET_STUDENTS'
const SET_TEACHERS = 'SET_TEACHERS'
const SET_MODERATORS = 'SET_MODERATORS'
const SET_TEACHERS_INFO = 'SET_TEACHERS_INFO'

let initial = {
    students: [],
    teachers: [],
    moderators: [],
    teacherInfo: []
}

const userReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case SET_TEACHERS:
            return {
                ...state,
                teachers: action.payload
            }
        case SET_MODERATORS:
            return {
                ...state,
                moderators: action.payload
            }
        case SET_TEACHERS_INFO:
            return {
                ...state,
                teacherInfo: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;

export const setStudents = (student) => ({
    type: SET_STUDENTS,
    payload: student
})
export const setTeachers = (teacher) => ({
    type: SET_TEACHERS,
    payload: teacher
})
export const setModerators = (moderator) => ({
    type: SET_MODERATORS,
    payload: moderator
})
export const setTeacherInfo = (teacherInfo) => ({
    type: SET_TEACHERS_INFO,
    payload: teacherInfo
})

export const getStudent = () => dispatch => {
    userAPI.getStudents()
        .then(response => {
            dispatch(setStudents(response.data))
        })
}
export const getTeacher = () => dispatch => {
    userAPI.getTeachers()
        .then(response => {
            dispatch(setTeachers(response.data))
        })
}
export const getModerator = () => dispatch => {
    userAPI.getModerators()
        .then(response => {
            dispatch(setModerators(response.data))
        })
}
export const deleteUser = (id) => dispatch => {
    userAPI.deleteUser(id)
        .then(response => {
            dispatch(getStudent())
            dispatch(getModerator())
            dispatch(getTeacher())
            regSuccess(response.data.message)
        })
}
export const updateStudent = (id, fio, login, role, email, mobileNumber, classroom) => dispatch => {
    userAPI.updateStudent(id, fio, login, role, email, mobileNumber, classroom)
        .then(response => {
            dispatch(getStudent())
        })
}
export const updateTeacher = (id, fio, login, role, email, mobileNumber, subject, classId,classNumber) => dispatch => {
    userAPI.updateTeacher(id, fio, login, role, email, mobileNumber, subject, classId,classNumber)
        .then(response => {
            dispatch(getTeacher())
        })
}
export const updateModerator = (id, fio, login, role) => dispatch => {
    userAPI.updateModerator(id, fio, login, role)
        .then(response => {
            dispatch(getModerator())
        })
}

export const getTeachersInfo = () => dispatch => {
    userAPI.getTeacherInfo()
        .then(response => {
            dispatch(setTeacherInfo(response.data))
        })
}