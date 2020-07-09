import React from 'react';
import {Field, Form, withFormik} from "formik";
import '../Form.scss'

class RegisterFormTeacher extends React.Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('select');
            let instances = window.M.FormSelect.init(elems, {});
        });
    }
    render() {
        return (
            <Form className='login'>
                <div className="card blue-grey lighten-4">
                    <div className="card-content date-text">
                        <span className="card-title center">Регистрация учителя</span>
                        <div>
                            <div className="input-field">
                                <Field
                                    id="fio"
                                    name='fio'
                                    type="text"
                                    className="validate"
                                    required='required'
                                />
                                <label htmlFor="fio">ФИО</label>
                            </div>
                            <div className="input-field">
                                <Field
                                    id="email"
                                    name='email'
                                    type="email"
                                    className="validate"
                                    required='required'
                                />
                                <label htmlFor="email">Электронная почта</label>
                            </div>
                            <div className="input-field">
                                <Field
                                    id="mobileNumber"
                                    name='mobileNumber'
                                    type="text"
                                    className="validate"
                                    required='required'
                                />
                                <label htmlFor="mobileNumber">Телефон</label>
                            </div>
                            <div className="input-field">
                                <Field
                                    id="subject"
                                    name='subject'
                                    type="text"
                                    className="validate"
                                    required='required'
                                />
                                <label htmlFor="subject">Предмет</label>
                            </div>
                            <div className="input-field">
                                <Field
                                    id="login"
                                    name='login'
                                    type="text"
                                    className="validate"
                                    required='required'
                                />
                                <label htmlFor="login">Логин</label>
                            </div>
                            <div className="input-field">
                                <Field
                                    id="password"
                                    name='password'
                                    type="password"
                                    className="validate"
                                    pattern='(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'
                                    title='Строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов'
                                />
                                <label htmlFor="password">Пароль</label>
                            </div>
                         </div>
                    </div>
                    <div className="card-action">
                        <button className='btn cyan darken-2'>Добавить учителя</button>
                    </div>
                </div>
            </Form>
        );
    }
}

export const RegisterTeacherFormiks = withFormik({
    mapPropsToValues({fio, login, email, mobileNumber, subject, password}) {
        return {
            fio: fio || '',
            login: login || '',
            email: email || '',
            mobileNumber: mobileNumber || '',
            subject: subject || '',
            password: password || ''
        }
    },
    handleSubmit(formData, {props, resetForm}) {
        props.teacherReg(formData.fio, formData.login, formData.email, formData.mobileNumber, formData.subject, formData.password);
        setTimeout(() => resetForm({formData: ""}),2000)
    }
})(RegisterFormTeacher)
