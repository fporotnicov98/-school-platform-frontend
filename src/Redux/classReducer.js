import React from 'react';
import {classAPI} from "../Api/Api";
import {regSuccess} from "../Components/ConfirmForm/SuccessConfirm";
import {regError} from "../Components/ConfirmForm/ErrorConfirm";

const SET_CLASS = 'SET_CLASS'
const SET_CLASSROOM = 'SET_CLASSROOM'
const SET_CLASS_INFO = 'SET_CLASS_INFO'

let initial = {
    classroom: [],
    class: null,
    classNumber: null,
    classId: null,
}

const classReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_CLASS:
            return {
                ...state,
                classroom: action.payload
            }
        case SET_CLASS_INFO:
            return {
                ...state,
                ...action.payload
            }
        case SET_CLASSROOM:
            return {
                ...state,
                class: action.payload
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
export const setClass = (classroom) => ({
    type: SET_CLASSROOM,
    payload: classroom
})

export const setClassInfo = (classNumber, classId) => ({
    type: SET_CLASS_INFO,
    payload: {classNumber, classId}
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
            dispatch(setClassInfo(response.data.classNumber, response.data._id, response.data.classTeacher, response.data.students))
            dispatch(setClass(response.data))
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

export const addStudentToClass = (id, studentId, fio, login, email, mobileNumber) => dispatch => {
    classAPI.addStudentToClass(id, studentId, fio, login, email, mobileNumber)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getClassroom(id))
                regSuccess(response.data.message)
            }
        })
}

export const deleteStudentToClass = (classId, studentId) => dispatch => {
    classAPI.deleteStudentToClass(classId, studentId)
        .then(response => {
            dispatch(getClassroom(classId))
            regSuccess(response.data.message)
        })
}

export const addTeacherToClass = (classId, teacherId, fio, login, email, mobileNumber, subject) => dispatch => {
    classAPI.addTeacherToClass(classId, teacherId, fio, login, email, mobileNumber, subject)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getClassroom(classId))
                regSuccess(response.data.message)
            }
        })
}

export const  addMessage = (classId, authorId, date, message) => dispatch => {
    classAPI.addMessage(classId, authorId, date, message)
}