import React, {useEffect} from 'react';
import Preloader from "../../../Assets/Commons/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getHomeworkItem, setHomeworkItem} from "../../../Redux/homeworkReducer";
import TaskCheckingInfo from "./TaskCheckingInfo";

const TaskCheckngInfoContainer = (props) => {

    useEffect(() => {
        props.getHomeworkItem(props.match.params.homeworkId)
        return () => {
            props.setHomeworkItem(null)
        }
    }, [props.match.params.homeworkId])

    if (!props.homeworkItem) return <Preloader />
    return (
        <div>
            <TaskCheckingInfo {...props}/>
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
    connect(mapStateToProps, {getHomeworkItem, setHomeworkItem})
)(TaskCheckngInfoContainer);
