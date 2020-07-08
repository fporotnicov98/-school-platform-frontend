import React from 'react';
import './ProfilePage.scss'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const ProfilePage = (props) => {
    if (!props.isAuth) return <Redirect to={'/'}></Redirect>
    return (
        <div className='wrapper'>
            {
                (props.role === 'student') && <div className='data'>
                    <h5>Мои данные:</h5>
                    <div className='user-data'>
                        <div className="input-field">
                            <span>Фамилия Имя Отчество:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Должность</span>
                            <input type="text" value='Ученик' className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Электронная почта:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Логин:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Номер телефона:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Класс:</span>
                            <input type="text" className="validate"/>
                        </div>
                    </div>
                </div>
            }
            {
                (props.role === 'moderator') && <div className='data'>
                    <h5>Мои данные:</h5>
                    <div className='user-data'>
                        <div className="input-field">
                            <span>Фамилия Имя Отчество:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Должность</span>
                            <input type="text" value='Модератор' className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Логин:</span>
                            <input type="text" className="validate"/>
                        </div>
                    </div>
                </div>
            }
            {
                (props.role === 'teacher') && <div className='data'>
                    <h5>Мои данные:</h5>
                    <div className='user-data'>
                        <div className="input-field">
                            <span>Фамилия Имя Отчество:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Должность</span>
                            <input type="text" value='Учитель' className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Электронная почта:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Логин:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Номер телефона:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Классное руководство:</span>
                            <input type="text" className="validate"/>
                        </div>
                        <div className="input-field">
                            <span>Предметы:</span>
                            <input type="text" className="validate"/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role
    }
}

export default connect(mapStateToProps, null)(ProfilePage);

