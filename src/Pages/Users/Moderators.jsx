import React, { useState, useEffect } from 'react';
import M from "materialize-css";
import { connect } from "react-redux";
import { getModerator, deleteUser, updateModerator } from "../../Redux/userReducer";
import { NavLink, Redirect } from "react-router-dom";
import './Classes.scss'

const Moderators = props => {

    const [updateId, setUpdateId] = useState([])
    const [newFio, setNewFio] = useState(props.moderators.fio)
    const [newLogin, setNewLogin] = useState(props.moderators.login)

    useEffect(() => {
        props.getModerator();
        M.AutoInit();
    }, [])

    let handleUpdateId = (id) => setUpdateId([updateId, id])
    let removeUpdateId = (id) => setUpdateId([...updateId.filter(o => o !== id)])
    let updateFio = (e) => setNewFio(e.currentTarget.value)
    let updateLogin = (e) => setNewLogin(e.currentTarget.value)
    let setFio = (fio) => setNewFio(fio)
    let setLogin = (login) => setNewLogin(login)

    if (!props.isAuth) return <Redirect to='/'></Redirect>
    return (
        <div className='users'>
            <nav className='blue-grey lighten-4'>
                <div className="nav-wrapper">
                    <NavLink to="/personal" className="breadcrumb">Личный кабинет</NavLink>
                    <a href="#!" className="breadcrumb">Модераторы</a>
                </div>
            </nav>
            <ul className="collapsible popout">
                <li className='active'>
                    <div className="collapsible-header card-title blue-grey lighten-4">Модераторы</div>
                    <div className="collapsible-body">
                        {
                            props.moderators.map((item, index) =>
                                <div className='items white z-depth-1-half'>
                                    {
                                        updateId.some(id => id === item._id)
                                            ? <div className='info'>
                                                <span>{index + 1}.</span>
                                                <input type="text" onChange={updateFio} value={newFio} />
                                                <input type="text" onChange={updateLogin}
                                                    value={newLogin} />
                                            </div>
                                            : <div className='info'>
                                                <span>{index + 1}.</span>
                                                <div className='fio'>{item.fio}</div>
                                                <div className='login'>{item.login}</div>
                                            </div>
                                    }
                                    <div className='buttons'>
                                        {
                                            updateId.some(id => id === item._id)
                                                ? <a className='edit' onClick={() => {
                                                    removeUpdateId(item._id)
                                                    props.updateModerator(item._id, newFio, newLogin)
                                                }} href="#s">
                                                    <i className="material-icons">check</i>
                                                </a>
                                                : <a className='edit' onClick={() => {
                                                    handleUpdateId(item._id)
                                                    setFio(item.fio)
                                                    setLogin(item.login)
                                                }} href="#s">
                                                    <i className="material-icons">edit</i>
                                                </a>
                                        }
                                        <a className='delete' onClick={() => props.deleteUser(item._id)}
                                            href="#s">
                                            <i className="material-icons">delete</i>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </li>
            </ul>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        moderators: state.users.moderators,
    }
}

export default connect(mapStateToProps, { getModerator, deleteUser, updateModerator })(Moderators);
