import React from 'react';
import actions from "redux-form/lib/actions";
import {classAPI, userAPI} from "../Api/Api";
import {getModerator, getStudent, getTeacher, setStudents} from "./userReducer";
import {regSuccess} from "../Components/ConfirmForm/SuccessConfirm";
import {regError} from "../Components/ConfirmForm/ErrorConfirm";
import {setOnReg} from "./authReducer";

const SET_CLASS = 'SET_CLASS'
const SET_CLASS_INFO = 'SET_CLASS_INFO'

let initial = {
    classroom: [],
    classNumber: null,
    classId: null
}

const classReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_CLASS:
            return {
                ...state,
                classroom: action.payload
            }
        default:
            return state;
    }
};

export default classReducer;

export const setClasses = (classes) => ({
    type: SET_CLASS,
    payload: classes
})
export const setClassData = (classes) => ({
    type: SET_CLASS,
    payload: classes
})
export const setClassInfo = (classNumber,classId) => ({
    type: SET_CLASS_INFO,
    payload: {classNumber,classId}
})

export const getClasses = () => dispatch => {
    classAPI.getClasses()
        .then(response => {
            dispatch(setClasses(response.data))
        })
}
export const getClassroom = (id) => dispatch => {
    classAPI.getClassroom(id)
        .then(response => {
            dispatch(setClassInfo(response.data.classNumber,response.data._id))
        })
}
export const addClassroom = (classNumber) => dispatch => {
    classAPI.addClassroom(classNumber)
        .then(response => {
            if (response.data.resultCode === 0) {
                regSuccess(response.data.message)
            } else regError(response.data.message)
        })
}
export const deleteClassroom = (id) => dispatch => {
    classAPI.deleteClassroom(id)
        .then(response => {
            dispatch(getClasses())
            regSuccess(response.data.message)
        })
}