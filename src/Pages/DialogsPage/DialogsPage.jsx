import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import './DialogsPage.scss'
import {addMessage} from "../../Redux/classReducer";
import {Field, Form, withFormik} from "formik";

class DialogsPage extends Component {
    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        return (
            <div className='dialogs'>
                <div className='users-dialogs'>
                    <div className='teacher cyan darken-3 white-text'>
                        {/*{*/}
                        {/*    this.props.classroom.map(item => {*/}
                        {/*        item._id === this.props.classId*/}
                        {/*    })*/}
                        {/*}*/}
                    </div>
                    <div className='students'></div>
                </div>
                <div className='messages'>
                    <div className='message-area'>
                        <div className='message-header cyan darken-2 white-text'>{this.props.auth.fio}</div>
                        <ul className="chat">
                            <li className="you">
                                <div className="entete">
                                    <span className="status"></span>
                                    <span>Lolek</span>
                                </div>
                                <div className="message cyan darken-2 white-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor.
                                </div>
                            </li>
                            {
                                this.props.classroom.map(item => {
                                    item.classForumMessages.map(message =>
                                        <li className="me">
                                            <div className="entete">
                                                {/*<span>{this.props.auth.fio}</span>*/}
                                            </div>
                                            <div className="message white">
                                                {message.message}
                                            </div>
                                        </li>
                                    )
                                })
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
                               name="action">Отправить</button>
                        </Form>
                    </div>

                </div>
            </div>
        );
    }
}


export const DialogsFormik = withFormik({
    mapPropsToValues({message}) {
        return {
            message: message || ''
        }
    },
    handleSubmit(formData, {props}) {
        props.addMessage(props.auth.classroom, props.auth.id, null, formData.message);
    }
})(DialogsPage)

const mapStateToProps = state => {
    return {
        classId: state.classroom.classId,
        auth: state.auth,
        classroom: state.classroom.classroom
    }
}

export default connect(mapStateToProps, {addMessage})(DialogsFormik);