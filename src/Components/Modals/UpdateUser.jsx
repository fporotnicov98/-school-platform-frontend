import React, {Component} from 'react';

class UpdateUser extends Component {
    render() {
        return (
            <div>
                <div className="modal-content">
                    <h4>Редактирование пользователя</h4>
                    <div className='row'>
                        <div className='input-field s6'>
                            <input id="fio" type="text" className="validate"/>
                            <label htmlFor="fio">ФИО</label>
                        </div>
                        <div className='input-field s6'>
                            <input id="login" type="text" className="validate"/>
                            <label htmlFor="login">Логин</label>
                        </div>
                        <div className='input-field s6'>
                            <input id="role" type="text" className="validate"/>
                            <label htmlFor="role">Роль</label>
                        </div>
                    </div>
                    <a href="#!"
                       className="center modal-close waves-effect waves-light btn-flat cyan darken-2 white-text">Изменить</a>
                </div>
            </div>
        );
    }
}

export default UpdateUser;