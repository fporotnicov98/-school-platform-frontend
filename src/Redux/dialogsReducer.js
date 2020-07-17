import {messageAPI} from "../Api/Api";

let initial = {
}

const dialogsReducer = (state = initial, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default dialogsReducer;

export const  addMessage = (classId, authorFio, authorId, date, message) => dispatch => {
    messageAPI.addMessage(classId, authorFio, authorId, date, message)
}

export const deleteMessage = (classId, messageId) => dispatch => {
    messageAPI.deleteMessage(classId, messageId)
}

export const updateMessage = (classId, messageId, message) => dispatch => {
    messageAPI.updateMessage(classId, messageId, message)
}

