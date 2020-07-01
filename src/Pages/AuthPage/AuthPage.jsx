import React from 'react';
import './AuthPage.scss'

export const AuthPage = () => {
    return (
        <div className='wrapper'>
                <div className='login'>
                    <div className="card blue-grey lighten-4">
                        <div className="card-content date-text">
                            <span className="card-title center">Авторизация</span>
                            <div>
                                <div class="input-field">
                                    <input
                                        id="login"
                                        name='login'
                                        type="text"
                                        class="validate"
                                    />
                                    <label htmlfor="login">Логин</label>
                                </div>
                                <div class="input-field">
                                    <input
                                        id="password"
                                        name='password'
                                        type="password"
                                        class="validate" />
                                    <label htmlfor="password">Пароль</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button className='btn cyan darken-2'>Войти</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
