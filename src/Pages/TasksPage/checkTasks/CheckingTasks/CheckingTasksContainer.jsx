import React, {useEffect} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import CheckingTasks from "./CheckingTasks";

const CheckingTasksContainer = (props) => {

    useEffect(() => {
        props.getTaskItem(props.match.params.tasksId)
        return () => {
            props.setTaskItem(null)
        }
    }, [props.match.params.tasksId])

    return (
        <div>
            <CheckingTasks {...props} />
        </div>
    );
};

const mapStateToProps = {

}

export default compose(
    withRouter,
    connect(mapStateToProps, {})
)(CheckingTasksContainer);
