import React, {useEffect} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getTaskItem, updateTask, setTaskItem } from "../../../Redux/taskReducer";
import TaskItem from "./TaskItem";
import Preloader from "../../../Assets/Commons/Preloader";
import { addHomework } from "../../../Redux/homeworkReducer";

const TaskItemContainer = (props) => {

    useEffect(() => {
        props.getTaskItem(props.match.params.tasksId)
        return () => {
            props.setTaskItem(null)
        }
    }, [props.match.params.tasksId])
    
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
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getTaskItem, updateTask, setTaskItem, addHomework})
)(TaskItemContainer);
