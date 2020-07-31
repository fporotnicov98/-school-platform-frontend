import {homeworkAPI} from "../Api/Api";
import {regSuccess} from "../Components/ConfirmForm/SuccessConfirm";


let initial = {
    homeworks: [],
    homeworkItem: null
}

const homeworkReducer = (state = initial, action) => {
    switch (action.type) {
        case "SET_HOMEWORKS":
            return {
                ...state,
                homeworks: action.payload
            }
        case "SET_HOMEWORK_ITEM":
            return {
                ...state,
                homeworkItem: action.payload
            }
        default:
            return state;
    }
};

export default homeworkReducer;

export const setHomeworks = (homeworks) => ({
    type: "SET_HOMEWORKS",
    payload: homeworks
})
export const setHomeworkItem = (homework) => ({
    type: "SET_HOMEWORK_ITEM",
    payload: homework
})

export const getHomeworks = () => dispatch => {
    homeworkAPI.getHomeworks()
        .then(response => {
            dispatch(setHomeworks(response.data))
        })
}
export const getHomeworkItem = (id) => dispatch => {
    homeworkAPI.getHomeworkItem(id)
        .then(response => {
            dispatch(setHomeworkItem(response.data))
        })
}

export const addHomework = (classNumber,taskId, student, publicDate, subject, teacher,answerToTask) => dispatch => {
    homeworkAPI.addHomework(classNumber,taskId, student, publicDate, subject, teacher,answerToTask)
        .then(response => {
            regSuccess(response.data.message)
            dispatch(getHomeworks())
        })
}
export const setMark = (id, teacherDesc) => dispatch => {
    homeworkAPI.setMark(id, teacherDesc)
        .then(response => {
            if (response.data.resultCode === 0) {
                regSuccess(response.data.message)
            }
        })
}