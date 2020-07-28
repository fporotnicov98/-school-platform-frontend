import { scheduleAPI } from "../Api/Api";
import { regSuccess } from "../Components/ConfirmForm/SuccessConfirm";

const SET_SCHEDULE = 'SET_SCHEDULE'
const SET_SCHEDULE_ITEM = 'SET_SCHEDULE_ITEM'

let initial = {
    schedule: [],
    scheduleItem: null
}

const scheduleReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_SCHEDULE:
            return {
                ...state,
                schedule: action.payload
            }
        case SET_SCHEDULE_ITEM:
            return {
                ...state,
                scheduleItem: action.payload
            }
        default:
            return state;
    }
};

export default scheduleReducer;

export const setSchedule = (schedule) => ({
    type: SET_SCHEDULE,
    payload: schedule
})
export const setScheduleItem = (schedule) => ({
    type: SET_SCHEDULE_ITEM,
    payload: schedule
})

export const getSchedule = () => dispatch => {
    scheduleAPI.getSchedule()
        .then(response => {
            dispatch(setSchedule(response.data))
        })
}

export const getScheduleItem = (id) => dispatch => {
    scheduleAPI.getScheduleItem(id)
        .then(response => {
            dispatch(setScheduleItem(response.data))
        })
}
export const deleteSchedule = (id) => dispatch => {
    scheduleAPI.deleteSchedule(id)
        .then(response => {
            dispatch(getSchedule())
        })
}

export const addSchedule = (classNumber,classId) => dispatch => {
    scheduleAPI.addSchedule(classNumber,classId)
        .then(response => {
            regSuccess(response.data.message)
            dispatch(getSchedule())
        })
}
export const updateSchedule = (id, day, subjects) => dispatch => {
    scheduleAPI.updateSchedule(id, day, subjects)
        .then(response => {
            if (response.data.resultCode === 0) {
                regSuccess(response.data.message)
            }
        })
}