import React, {useEffect} from 'react';
import './ProfilePage.scss'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getClasses} from "../../Redux/classReducer";

const ProfilePage = props => {

    useEffect(() => {
        props.getClasses()
    }, [])

        if (!props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        return (
            <div className='wrapper'>
                {
                    (props.auth.role === 'student') && <div className='data'>
                        <h5>Мои данные:</h5>
                        <div className='user-data'>
                            <div className="input-field">
                                <span>Фамилия Имя Отчество:</span>
                                <input type="text" className="validate" value={props.auth.fio}/>
                            </div>
                            <div className="input-field">
                                <span>Должность</span>
                                <input type="text" value='Ученик' className="validate" value={props.auth.role}/>
                            </div>
                            <div className="input-field">
                                <span>Электронная почта:</span>
                                <input type="text" className="validate" value={props.auth.email}/>
                            </div>
                            <div className="input-field">
                                <span>Логин:</span>
                                <input type="text" className="validate" value={props.auth.login}/>
                            </div>
                            <div className="input-field">
                                <span>Номер телефона:</span>
                                <input type="text" className="validate" value={props.auth.mobileNumber}/>
                            </div>
                            {
                                props.classroom.map(item =>
                                    item._id === props.auth.classId
                                        ? <div className="input-field">
                                            <span>Класс: </span>
                                            <input type="text" className="validate" value={item.classNumber}/>
                                        </div>
                                        : null
                                )
                            }
                        </div>
                    </div>
                }
                {
                    (props.auth.role === 'moderator') && <div className='data'>
                        <h5>Мои данные:</h5>
                        <div className='user-data'>
                            <div className="input-field">
                                <span>Фамилия Имя Отчество:</span>
                                <input type="text" className="validate" value={props.auth.fio}/>
                            </div>
                            <div className="input-field">
                                <span>Должность</span>
                                <input type="text" value='Модератор' className="validate" value={props.auth.role}/>
                            </div>
                            <div className="input-field">
                                <span>Логин:</span>
                                <input type="text" className="validate" value={props.auth.login}/>
                            </div>
                        </div>
                    </div>
                }
                {
                    (props.auth.role === 'teacher') && <div className='data'>
                        <h5>Мои данные:</h5>
                        <div className='user-data'>
                            <div className="input-field">
                                <span>Фамилия Имя Отчество:</span>
                                <input type="text" className="validate" value={props.auth.fio}/>
                            </div>
                            <div className="input-field">
                                <span>Должность</span>
                                <input type="text" value='Учитель' className="validate" value={props.auth.role}/>
                            </div>
                            <div className="input-field">
                                <span>Электронная почта:</span>
                                <input type="text" className="validate" value={props.auth.email}/>
                            </div>
                            <div className="input-field">
                                <span>Логин:</span>
                                <input type="text" className="validate" value={props.auth.login}/>
                            </div>
                            <div className="input-field">
                                <span>Номер телефона:</span>
                                <input type="text" className="validate" value={props.auth.mobileNumber}/>
                            </div>
                            {
                                props.classroom.map(item =>
                                    item._id === props.auth.classId
                                        ? <div className="input-field">
                                            <span>Классное руководство:</span>
                                            <input type="text" className="validate" value={item.classNumber}/>
                                        </div>
                                        : null
                                )
                            }
                            <div className="input-field">
                                <span>Предметы:</span>
                                <input type="text" className="validate" value={props.auth.subject}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )

};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        classroom: state.classroom.classroom
    }
}

export default connect(mapStateToProps, {getClasses})(ProfilePage);

