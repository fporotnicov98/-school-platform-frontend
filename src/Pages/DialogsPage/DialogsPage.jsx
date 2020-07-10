import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class DialogsPage extends Component {
    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        return (
            <div className='dialogs'>
                <div className='users'>
                    <div className='teacher'></div>
                    <div className='students'></div>
                </div>
                <div className='messages'>
                    <div className='message-container'>
                        <div className='message-header'>{this.props.auth.fio}</div>
                        <div className='message-body'></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        students: state.users.students,
        teachers: state.users.teachers,
        auth: state.auth
    }

}


export default connect(mapStateToProps, {})(DialogsPage);