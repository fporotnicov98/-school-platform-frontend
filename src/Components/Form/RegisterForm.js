import React from 'react';
import {Field, Form, withFormik} from "formik";
import './Form.scss'

class RegisterForm extends React.Component {
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
                        <span className="card-title center">Регистрация пользвателя</span>
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
                            {/*<div className="input-field role">*/}
                            {/*    <Field component='select'>*/}
                            {/*        <option value="" disabled selected>Выберите роль пользователя</option>*/}
                            {/*        <option value="Ученик">Ученик</option>*/}
                            {/*        <option value="Учитель">Учитель</option>*/}
                            {/*        <option value="Модератор">Модератор</option>*/}
                            {/*    </Field>*/}
                            {/*    <label>Роль</label>*/}
                            {/*</div>*/}
                         </div>
                    </div>
                    <div className="card-action">
                        <button className='btn cyan darken-2'>Добавить пользвателя</button>
                    </div>
                </div>
            </Form>
        );
    }
}

export const RegisterFormiks = withFormik({
    mapPropsToValues({fio, login, email, mobileNumber, role, password}) {
        return {
            fio: fio || '',
            login: login || '',
            email: email || '',
            mobileNumber: mobileNumber || '',
            // role: role,
            password: password || ''
        }
    },
    handleSubmit(formData, {props}) {
        props.registration(formData.fio, formData.login, formData.email, formData.mobileNumber, formData.role, formData.password);

    }
})(RegisterForm)
