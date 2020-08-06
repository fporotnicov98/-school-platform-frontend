import React, {useEffect} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import CheckingTasks from "./CheckingTasks";
import Preloader from '../../../../Assets/Commons/Preloader'
import { getHomeworkItem,setHomeworkItem,setMark } from "../../../../Redux/homeworkReducer";
import { downloadFile } from "../../../../Redux/taskReducer";

const CheckingTasksContainer = (props) => {

    useEffect(() => {
        props.getHomeworkItem(props.match.params.tasksId)
        return () => {
            props.setHomeworkItem(null)
        }
    }, [props.match.params.tasksId])

    if (!props.homeworkItem) return <Preloader />
    return (
        <div>
            <CheckingTasks {...props} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        homeworkItem: state.homework.homeworkItem
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getHomeworkItem,setHomeworkItem,setMark,downloadFile})
)(CheckingTasksContainer);
