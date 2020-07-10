import {authAPI} from "../Api/Api";
import {authError, regError} from "../Components/ConfirmForm/ErrorConfirm";
import {authSuccess, regSuccess} from "../Components/ConfirmForm/SuccessConfirm";

const SET_ON_AUTH = 'SET_ON_AUTH'
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_ON_REG = 'SET_ON_REG'
const CHOOSE_STUDENT = 'CHOOSE_STUDENT'
const CHOOSE_TEACHER = 'CHOOSE_TEACHER'
const CHOOSE_MODERATOR = 'CHOOSE_MODERATOR'

let initial = {
    fio: null,
    login: null,
    email: null,
    mobileNumber: null,
    role: null,
    password: null,
    onReg: false,
    isAuth: null,

    isToggleStudent: false,
    isToggleTeacher: false,
    isToggleModerator: true,
}

const authReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_ON_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case SET_ON_REG:
            return {
                ...state,
                onReg: action.payload
            }

        default:
            return state;
    }
}

export default authReducer;

export const setOnReg = (flag) => ({type: SET_ON_REG, payload: flag})
export const setAuthData = (fio, login, role, email, mobileNumber, classroom, subject, isAuth) => ({
    type: SET_AUTH_DATA,
    payload: {fio, login, role, email, mobileNumber, classroom, subject, isAuth}
})


export const getAuth = (token) => dispatch => {
    authAPI.getAuth(token)
        .then(response => {
            if (response.data.fio) {
                dispatch(setAuthData(response.data.fio, response.data.login, response.data.role, response.data.email, response.data.mobileNumber, response.data.classroom, response.data.subject, true))
            } else regError(response.data.message)
        })
}
export const moderatorReg = (fio, login, password) => dispatch => {
    authAPI.moderatorRegist(fio, login, password)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setOnReg(true))
                regSuccess(response.data.message)
            } else regError(response.data.message)
        })
}
export const studentReg = (fio, login, email, mobileNumber, password) => dispatch => {
    authAPI.studentRegist(fio, login, email, mobileNumber, password)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setOnReg(true))
                regSuccess(response.data.message)
            } else regError(response.data.message)
        })
}
export const teacherReg = (fio, login, email, mobileNumber, subject, password) => dispatch => {
    authAPI.teacherRegist(fio, login, email, mobileNumber, subject, password)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setOnReg(true))
                regSuccess(response.data.message)
            } else regError(response.data.message)
        })
}
export const login = (login, password) => dispatch => {
    authAPI.login(login, password)
        .then(response => {
            if (response.data.token) {
                dispatch(getAuth(response.data.token))
                authSuccess()
            } else authError(response.data.message)
        })
}

export const logout = () => dispatch => {
    dispatch(setAuthData(null, null))
}