import React, {Component} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class ClassroomItem extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default compose(
    withRouter,
    connect(null, {})
)(ClassroomItem);