import React, {useState, useEffect} from 'react';
import {Redirect, withRouter} from "react-router-dom";
import './DialogsPage.scss'
import {Field, Form, withFormik} from "formik";
import {compose} from "redux";
import {connect} from "react-redux";
import {getClassroom} from "../../Redux/classReducer";
import Preloader from "../../Assets/Commons/Preloader";
import {addMessage, deleteMessage, updateMessage} from "../../Redux/dialogsReducer";

const DialogsPage = (props) => {

    const [updateId, setUpdateId] = useState(null)
    const [formText, setFormText] = useState(null)

    useEffect(() => {
        props.getClassroom(props.auth.classId)
    }, [props.auth.classId])

    const handleUpdateId = (id) => {
        setUpdateId(id)
    }
    const handleUpdateText = (text) => {
        setFormText(text)
    }
    const handleFormText = (e) => {
        setFormText(e.target.value)
    }
    const handleRemoveUpdateId = () => {
        setUpdateId(null)
    }

    if (!props.auth.isAuth) return <Redirect to={'/'}/>
    if (!props.auth.classId) return <Preloader/>
    if (!props.class) return <Preloader/>

    return (
        <div className='dialogs'>
            <div className='users-dialogs blue-grey lighten-4'>
                <div className='teacher'>
                    <i className="fas fa-crown"/>{props.class.classTeacher.fio}
                </div>
                {
                    props.class.students.map(item =>
                        item.fio === props.auth.fio
                        ? <div className='students students-main'><i className="fas fa-star"/>{item.fio}</div>
                        : <div className='students'>{item.fio}</div>
                    )
                }
            </div>
            <div className='messages'>
                <div className='message-area'>
                    <div className='message-header'>{props.auth.fio}</div>
                    <ul className="chat">
                        {
                            props.class.classForumMessages.map(item =>
                                props.auth.id === item.authorId
                                    ? <li className="me">
                                        <div className="entete">
                                            <span>{props.class.classTeacher.fio === item.authorFio ? `${item.authorFio} (Классный руководитель)` : item.authorFio}</span>
                                            {
                                                <div className='icons'>
                                                    {
                                                        <i onClick={() => {
                                                            {
                                                                handleUpdateText(item.message)
                                                                handleUpdateId(item._id)
                                                            }
                                                        }} className='material-icons'>mode_edit</i>
                                                    }
                                                    <i onClick={() => {
                                                        props.deleteMessage(this.props.auth.classId, item._id)
                                                        setTimeout(() => this.props.getClassroom(this.props.auth.classId), 300)
                                                    }} className='material-icons'>delete</i>
                                                </div>
                                            }
                                        </div>
                                        <div className="message blue-grey lighten-4">
                                            {
                                                item.edited === '1'
                                                    ? <span>{`${item.message} (изменено)`}</span>
                                                    : <span>{item.message}</span>
                                            }
                                        </div>
                                    </li>
                                    : <li className="you">
                                        <div className="entete">
                                            {props.class.classTeacher.fio === item.authorFio ?
                                                <span>{item.authorFio} (Классный руководитель)</span> :
                                                <span>{item.authorFio}</span>}
                                        </div>
                                        <div className="message white">
                                            <span>{item.message}</span>
                                        </div>
                                    </li>
                            )
                        }
                    </ul>
                    <Form className='message-submit'>
                        <div className='input-field s10'>
                            {
                                props.class.classForumMessages.some(item => item._id === updateId)
                                    ? <Field
                                        as='textarea'
                                        id="message"
                                        name='message'
                                        className="materialize-textarea"
                                        placeholder='Введите сообщение'
                                        onChange={handleFormText}
                                        value={formText}>
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
                            props.class.classForumMessages.some(item => item._id === updateId)
                                ? <button onClick={() => {
                                    {
                                        handleRemoveUpdateId(updateId)
                                        props.updateMessage(props.auth.classId, updateId, formText)
                                        setTimeout(() => props.getClassroom(props.auth.classId), 500)

                                    }
                                }} className="btn waves-effect waves-light blue-grey lighten-4" type="submit"
                                          name="action">Изменить
                                </button>
                                : <button className="btn waves-effect waves-light blue-grey lighten-4" type="submit"
                                          name="action">Отправить
                                </button>
                        }
                    </Form>
                </div>

            </div>
        </div>
    );
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