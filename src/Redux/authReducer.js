import {authAPI} from "../Api/Api";
import {authError, regError} from "../Components/ConfirmForm/ErrorConfirm";
import {authSuccess, regSuccess} from "../Components/ConfirmForm/SuccessConfirm";

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

    isToggleStudent: false,
    isToggleTeacher: false,
    isToggleModerator: true,
}

const authReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_ON_REG:
            return {
                ...state,
                onReg: action.payload
            }
        case CHOOSE_STUDENT:
            return {
                ...state,
                isToggleStudent: true,
                isToggleTeacher: false,
                isToggleModerator: false,
            }
        case CHOOSE_TEACHER:
            return {
                ...state,
                isToggleTeacher: true,
                isToggleModerator: false,
                isToggleStudent: false,
            }
        case CHOOSE_MODERATOR:
            return {
                ...state,
                isToggleModerator: true,
                isToggleTeacher: false,
                isToggleStudent: false,
            }
        default:
            return state;
    }
}

export default authReducer;

export const chooseStudent = () => ({type: CHOOSE_STUDENT})
export const chooseTeacher = () => ({type: CHOOSE_TEACHER})
export const chooseModerator = () => ({type: CHOOSE_MODERATOR})
export const setOnReg = (flag) => ({type: SET_ON_REG, payload: flag})
// export const setAuthData = (email, fio, userId, roleUser, isAuth) => ({
//     type: "SET_AUTH_DATA",
//     payload: {email, fio, userId, roleUser, isAuth}
// })


export const registration = (fio, login, email, mobileNumber, role, password) => dispatch => {
    authAPI.registration(fio, login, email, mobileNumber, role, password)
        .then(response => {
            dispatch(setOnReg(true))
            regSuccess()
        })
        .catch(err => {
            regError()
        })
}
// export const login = (login, password) => dispatch => {
//     authAPI.login(login, password)
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(getAuth(response.data.token))
//                 authSuccess()
//             }
//         })
//         .catch(err => {
//             authError()
//         })
// }
// export const getAuth = (token) => (dispatch) => {
//     authAPI.getAuth(token)
//         .then(response => {
//             dispatch(setAuthData(response.data.email, response.data.fio, response.data.id, response.data.roleUser, true))
//         })
// }