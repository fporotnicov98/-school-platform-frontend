import React from 'react';
import './PersonalPage.scss'

export const PersonalPage = () => {
    return (
        <div className='wrapper'>
            <div className='login'>
                <div className="card blue-grey lighten-4">
                    <div className="card-content date-text">
                        <span className="card-title center">Регистрация пользвателя</span>
                        <div>
                            <div class="input-field">
                                <input
                                    id="status"
                                    name='status'
                                    type="text"
                                    classname="validate"
                                />
                                <label htmlfor="fio">Должность</label>
                            </div>
                            <div class="input-field">
                                <input
                                    id="fio"
                                    name='fio'
                                    type="text"
                                    classname="validate"
                                />
                                <label htmlfor="fio">ФИО</label>
                            </div>
                            <div class="input-field">
                                <input
                                    id="email"
                                    name='email'
                                    type="email"
                                    className="validate"
                                />
                                <label htmlfor="email">Электронная почта</label>
                            </div>
                            <div class="input-field">
                                <input
                                    id="tel"
                                    name='tel'
                                    type="tel"
                                    className="validate"
                                />
                                <label htmlfor="email">Телефон</label>
                            </div>
                            <div class="input-field">
                                <input
                                    id="class"
                                    name='class'
                                    type="text"
                                    className="validate"
                                />
                                <label htmlfor="class">Класс</label>
                            </div>
                            <div class="input-field">
                                <input
                                    id="login"
                                    name='login'
                                    type="text"
                                    className="validate"
                                />
                                <label htmlfor="login">Логин</label>
                            </div>
                            <div class="input-field">
                                <input
                                    id="password"
                                    name='password'
                                    type="password"
                                    className="validate" />
                                <label htmlfor="password">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className='btn cyan darken-2'>Добавить пользвателя</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
