import React from 'react';
import {Field, Form, withFormik} from "formik";
import '../Form.scss'
import {moderatorReg} from './../../../Redux/authReducer'

const RegisterFormModerator = () => {
        return (
            <Form className='login'>
                <div className="card blue-grey lighten-4">
                    <div className="card-content date-text">
                        <span className="card-title center">Регистрация модератора</span>
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
                        <button className='btn cyan darken-2'>Добавить модератора</button>
                    </div>
                </div>
            </Form>
        );
}

export const RegisterModeratorFormiks = withFormik({
    mapPropsToValues({fio, login, password}) {
        return {
            fio: fio || '',
            login: login || '',
            password: password || ''
        }
    },
    handleSubmit(formData, {props, resetForm}) {
        props.moderatorReg(formData.fio, formData.login, formData.password)
        setTimeout(() => resetForm({formData: ""}),2000)
    }
})(RegisterFormModerator)
