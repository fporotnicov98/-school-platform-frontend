import React, {useEffect} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getTaskItem, updateTask, setTaskItem } from "../../../Redux/taskReducer";
import TaskItem from "./TaskItem";
import Preloader from "../../../Assets/Commons/Preloader";
import {addHomework, getHomeworkItem, getHomeworks} from "../../../Redux/homeworkReducer";

const TaskItemContainer = (props) => {

    useEffect(() => {
        props.getTaskItem(props.match.params.taskId)
        return () => {
            props.setTaskItem(null)
        }
    }, [props.match.params.taskId])
    
    if (!props.taskItem) return <Preloader />
    return (
        <div>
            <TaskItem {...props}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        taskItem: state.task.taskItem,
        auth: state.auth,
        homeworkItem: state.homework.homeworkItem,
        homeworks: state.homework.homeworks
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getTaskItem, updateTask, setTaskItem, addHomework, getHomeworkItem})
)(TaskItemContainer);
