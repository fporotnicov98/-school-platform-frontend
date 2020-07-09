import {userAPI} from "../Api/Api";
import {regSuccess} from "../Components/ConfirmForm/SuccessConfirm";

const SET_STUDENTS = 'SET_STUDENTS'
const SET_TEACHERS = 'SET_TEACHERS'
const SET_MODERATORS = 'SET_MODERATORS'

let initial = {
    students: [],
    teachers: [],
    moderators: []
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
export const updateStudent = (id, fio, login, role, email, mobileNumber) => dispatch => {
    userAPI.updateStudent(id, fio, login, role, email, mobileNumber)
        .then(response => {
            dispatch(getStudent())
        })
}
export const updateTeacher = (id, fio, login, role, email, mobileNumber, subject) => dispatch => {
    userAPI.updateTeacher(id, fio, login, role, email, mobileNumber, subject)
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