import React from 'react';
import {Field, Form, withFormik} from "formik";
import '../Form.scss'

const RegisterFormStudent = () => {
        return (
            <Form className='login'>
                <div className="card blue-grey lighten-4">
                    <div className="card-content date-text">
                        <span className="card-title center">Регистрация ученика</span>
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
                        <button className='btn cyan darken-2'>Добавить ученика</button>
                    </div>
                </div>
            </Form>
        );
}

export const RegisterStudentFormiks = withFormik({
    mapPropsToValues({fio, login, email, mobileNumber, password}) {
        return {
            fio: fio || '',
            login: login || '',
            email: email || '',
            mobileNumber: mobileNumber || '',
            password: password || ''
        }
    },
    handleSubmit(formData, {props, resetForm}) {
        props.studentReg(formData.fio, formData.login, formData.email, formData.mobileNumber, formData.password);
        setTimeout(() => resetForm({formData: ""}),2000)
    }
})(RegisterFormStudent)
