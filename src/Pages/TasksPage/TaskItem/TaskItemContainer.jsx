import React, {useEffect} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getTaskItem, updateTask} from "../../../Redux/taskReducer";
import TaskItem from "./TaskItem";
import Preloader from "../../../Assets/Commons/Preloader";

const TaskItemContainer = (props) => {

    useEffect(() => {
        props.getTaskItem(props.match.params.tasksId)
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
    connect(mapStateToProps, {getTaskItem, updateTask})
)(TaskItemContainer);
