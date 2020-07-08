import React from 'react';
import {Field, Form, withFormik} from "formik";
import '../Form.scss'

class LoginForm extends React.Component {
    render() {
        return (
            <Form className='login'>
                <div className="card blue-grey lighten-4">
                    <div className="card-content date-text">
                        <span className="card-title center">Авторизация</span>
                        <div>
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
                                    required='required'
                                />
                                <label htmlFor="password">Пароль</label>
                            </div>
                         </div>
                    </div>
                    <div className="card-action">
                        <button className='btn cyan darken-2'>Войти</button>
                    </div>
                </div>
            </Form>
        );
    }
}

export const LoginFormiks = withFormik({
    mapPropsToValues({fio, login, email, mobileNumber, role, password}) {
        return {
            login: login || '',
            password: password || ''
        }
    },
    handleSubmit(formData, {props}) {
        props.login(formData.login, formData.password);

    }
})(LoginForm)
