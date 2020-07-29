import React, {Component} from 'react';
import {Redirect, withRouter} from "react-router-dom";
import './DialogsPage.scss'
import {Field, Form, withFormik} from "formik";
import {compose} from "redux";
import {connect} from "react-redux";
import {getClassroom} from "../../Redux/classReducer";
import Preloader from "../../Assets/Commons/Preloader";
import {addMessage, deleteMessage, updateMessage} from "../../Redux/dialogsReducer";

class DialogsPage extends Component {

    state = {
        newsText: null,
        updateId: null,
        modifyText: false
    }

    componentDidMount() {
        this.props.getClassroom(this.props.auth.classId)
    }

    setUpdateId = (id) => {
        this.setState({updateId: id})
    }
    removeUpdateId = (id) => {
        this.setState({updateId: null})
    }

    setText = (text) => {
        this.setState({newsText: text})
    }

    updateText = (e) => {
        this.setState({newsText: e.currentTarget.value})
    }
    modifyText = () => {
        this.setState({modifyText: true})
    }

    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        if (!this.props.auth.classId) return <Preloader/>
        if (!this.props.class) return <Preloader/>
        return (
            <div className='dialogs'>
                <div className='users-dialogs'>
                    <div className='teacher cyan darken-3 white-text'>
                        <div>Классный руководитель:</div>
                        {this.props.class.classTeacher.fio}
                    </div>
                    <div>Ученики:</div>
                    {
                        this.props.class.students.map(item =>
                            <div className='students'>{item.fio}</div>
                        )
                    }
                </div>
                <div className='messages'>
                    <div className='message-area'>
                        <div className='message-header cyan darken-2 white-text'>
                            {this.props.auth.fio}
                        </div>
                        <ul className="chat">
                            {
                                this.props.class.classForumMessages.map(item =>
                                    this.props.auth.id === item.authorId
                                        ? <li className="me">
                                            <div className="entete">
                                                <span>
                                                    {item.authorFio}
                                                    {
                                                        <div className='icons'>
                                                            {
                                                                <i onClick={() => {
                                                                    {
                                                                        this.setText(item.message)
                                                                        this.setUpdateId(item._id)
                                                                    }
                                                                }} className='material-icons'>mode_edit</i>
                                                            }
                                                            <i onClick={() => {
                                                                this.props.deleteMessage(this.props.auth.classId, item._id)
                                                                setTimeout(() => this.props.getClassroom(this.props.auth.classId), 300)
                                                            }} className='material-icons'>delete</i>
                                                        </div>
                                                    }
                                                </span>
                                            </div>
                                            <div className="message white">
                                                {
                                                    item.edited === '1'
                                                        ? <span>{`${item.message} (изменено)`}</span>
                                                        : <span>{item.message}</span>
                                                }
                                            </div>
                                        </li>
                                        : <li className="you">
                                            <div className="entete">
                                                <span>{item.authorFio}</span>
                                            </div>
                                            <div className="message cyan darken-2 white-text">
                                                :<span>{item.message}</span>
                                            </div>
                                        </li>
                                )
                            }
                        </ul>
                        <Form className='message-submit'>
                            <div className='input-field s10'>
                                {
                                    this.props.class.classForumMessages.some(item => item._id === this.state.updateId)
                                        ? <Field
                                            as='textarea'
                                            id="message"
                                            name='message'
                                            className="materialize-textarea"
                                            placeholder='Введите сообщение'
                                            onChange={this.updateText}
                                            value={this.state.newsText}>
                                        </Field>
                                        : <Field
                                            as='textarea'
                                            id="message"
                                            name='message'
                                            className="materialize-textarea"
                                            placeholder='Введите сообщение'>
                                        </Field>
                                }
                            </div>
                            {
                                this.props.class.classForumMessages.some(item => item._id === this.state.updateId)
                                    ? <button onClick={() => {
                                        {
                                            this.removeUpdateId(this.state.updateId)
                                            this.modifyText()
                                            this.props.updateMessage(this.props.auth.classId, this.state.updateId, this.state.newsText)
                                            setTimeout(() => this.props.getClassroom(this.props.auth.classId), 500)

                                        }
                                    }} className="btn waves-effect waves-light cyan darken-2" type="submit"
                                              name="action">Изменить
                                    </button>
                                    : <button className="btn waves-effect waves-light cyan darken-2" type="submit"
                                              name="action">Отправить
                                    </button>
                            }
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
    handleSubmit(formData, {props, resetForm}) {
        props.addMessage(props.auth.classId, props.auth.fio, props.auth.id, null, formData.message)
        setTimeout(() => props.getClassroom(props.auth.classId), 500)
        setTimeout(() => resetForm({formData: ""}), 500)
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
    connect(mapStateToProps, {addMessage, deleteMessage, updateMessage, getClassroom})
)(DialogsFormik);