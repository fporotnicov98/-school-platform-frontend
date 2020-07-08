import {userAPI} from "../Api/Api";

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