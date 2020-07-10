import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import classReducer from "./classReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    auth: authReducer,
    users: userReducer,
    classroom: classReducer,
    dialogs: dialogsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;