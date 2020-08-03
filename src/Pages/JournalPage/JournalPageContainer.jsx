import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getClassroom} from "../../Redux/classReducer";
import {getHomeworks} from "../../Redux/homeworkReducer";
import {getTasks} from "../../Redux/taskReducer";
import JournalPage from "./JournalPage";
import Preloader from "../../Assets/Commons/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const JournalPageContainer = (props) => {

    useEffect(() => {
        props.getClassroom(props.match.params.classId)
        props.getTasks()
        props.getHomeworks()
    }, [props.match.params.classId])

    if (!props.classroom) return <Preloader />
    return (
        <div>
            <JournalPage {...props}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        classroom: state.classroom.classroom,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getClassroom, getTasks, getHomeworks})
)(JournalPageContainer)

