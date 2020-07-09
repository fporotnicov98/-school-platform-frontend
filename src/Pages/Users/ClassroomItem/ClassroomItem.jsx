import React, {Component} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { getClassroom } from "../../../Redux/classReducer";

class ClassroomItem extends Component {
    componentDidMount(){
        let classId = this.props.match.params.classId
        if(!classId){
            alert('404')
        }
        this.props.getClassroom(classId)
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}


export default compose(
    withRouter,
    connect(null, {getClassroom})
)(ClassroomItem);