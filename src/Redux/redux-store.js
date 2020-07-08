import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
    auth: authReducer,
    users: userReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;