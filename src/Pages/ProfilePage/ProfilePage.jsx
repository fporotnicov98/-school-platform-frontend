import React from 'react';
import './ProfilePage.scss'
import {connect} from "react-redux";

const ProfilePage = (props) => {
    return (
        <div className='wrapper'>
            {
                props.isToggleStudent && <div className='data'>
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
                props.isToggleModerator && <div className='data'>
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
                props.isToggleTeacher && <div className='data'>
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
        ;
};

const mapStateToProps = state => {
    return {
        isToggleStudent: state.auth.isToggleStudent,
        isToggleTeacher: state.auth.isToggleTeacher,
        isToggleModerator: state.auth.isToggleModerator
    }
}

export default connect(mapStateToProps, {})(ProfilePage);

