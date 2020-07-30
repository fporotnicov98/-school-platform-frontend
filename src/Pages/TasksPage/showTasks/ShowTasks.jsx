import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class ShowTasks extends Component {
    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, {})(ShowTasks)