import {taskAPI} from "../Api/Api";
import {regSuccess} from "../Components/ConfirmForm/SuccessConfirm";


let initial = {
    tasks: [],
    taskItem: null
}

const taskReducer = (state = initial, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload
            }
        case "SET_TASK_ITEM":
            return {
                ...state,
                taskItem: action.payload
            }
        default:
            return state;
    }
};

export default taskReducer;

export const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: tasks
})
export const setTaskItem = (task) => ({
    type: "SET_TASK_ITEM",
    payload: task
})

export const getTasks = () => dispatch => {
    taskAPI.getTasks()
        .then(response => {
            dispatch(setTasks(response.data))
        })
}
export const getTaskItem = (id) => dispatch => {
    taskAPI.getTaskItem(id)
        .then(response => {
            dispatch(setTaskItem(response.data))
        })
}
export const deleteTask = (id) => dispatch => {
    taskAPI.deleteTask(id)
        .then(response => {
            dispatch(getTasks())
        })
}

export const addTask = (classNumber, publicDate, deadlineDate, subject, teacher, taskTitle, taskText) => dispatch => {
    taskAPI.addTask(classNumber, publicDate, deadlineDate, subject, teacher, taskTitle, taskText)
        .then(response => {
            regSuccess(response.data.message)
            dispatch(getTasks())
        })
}
export const updateTask = (taskId, taskTitle, taskText, editedDate) => dispatch => {
    taskAPI.updateTask(taskId, taskTitle, taskText, editedDate)
        .then(response => {
            if (response.data.resultCode === 0) {
                regSuccess(response.data.message)
            }
        })
}