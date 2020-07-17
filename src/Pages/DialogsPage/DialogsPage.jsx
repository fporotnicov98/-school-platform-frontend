import React, { Component } from 'react';
import { Redirect, withRouter } from "react-router-dom";
import './DialogsPage.scss'
import { Field, Form, withFormik } from "formik";
import { compose } from "redux";
import { connect } from "react-redux";
import { addMessage, getClasses, getClassroom } from "../../Redux/classReducer";
import Preloader from "../../Assets/Commons/Preloader";

class DialogsPage extends Component {

    componentDidMount() {
        this.props.getClassroom(this.props.auth.classroom)
    }

    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        if (!this.props.class) return <Preloader />
        return (
            <div className='dialogs'>
                <div className='users-dialogs'>
                    <div className='teacher cyan darken-3 white-text'>
                        {
                            this.props.class.classTeacher.fio
                        }
                    </div>
                    {
                        this.props.class.students.map(item =>
                            <div className='students'>{item.fio}</div>
                        )
                    }
                </div>
                <div className='messages'>
                    <div className='message-area'>
                        <div className='message-header cyan darken-2 white-text'>{this.props.auth.fio}</div>
                        <ul className="chat">
                            {
                                this.props.class.classForumMessages.map(item =>
                                    this.props.auth.id === item.authorId
                                        ? <li className="me">
                                            <div className="entete">
                                                <span>{this.props.auth.fio}</span>
                                            </div>
                                            <div className="message white">
                                                {item.message}
                                            </div>
                                        </li>
                                        : <li className="you">
                                            <div className="entete">
                                                <span>{this.props.auth.fio}</span>
                                            </div>
                                            <div className="message cyan darken-2 white-text">
                                                {item.message}
                                            </div>
                                        </li>
                                )
                            }
                        </ul>
                        <Form className='message-submit'>
                            <div className='input-field s10'>
                                <Field
                                    as='textarea'
                                    id="message"
                                    name='message'
                                    className="materialize-textarea"
                                    placeholder='Введите сообщение'>
                                </Field>
                            </div>
                            <button className="btn waves-effect waves-light cyan darken-2" type="submit"
                                name="action">Отправить
                            </button>
                        </Form>
                    </div>

                </div>
            </div>
        );
    }
}


export const DialogsFormik = withFormik({
    mapPropsToValues({ message }) {
        return {
            message: message || ''
        }
    },
    handleSubmit(formData, { props, resetForm }) {
        props.addMessage(props.auth.classroom, props.auth.id, null, formData.message)
        setTimeout(() => props.getClassroom(props.auth.classroom), 300)
        setTimeout(() => resetForm({ formData: "" }), 500)
    }
})(DialogsPage)

const mapStateToProps = state => {
    return {
        classId: state.classroom.classId,
        auth: state.auth,
        class: state.classroom.class
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { addMessage, getClassroom })
)(DialogsFormik);