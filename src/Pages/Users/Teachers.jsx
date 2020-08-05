import React, { useState, useEffect } from 'react';
import M from "materialize-css";
import { connect } from "react-redux";
import { deleteUser, getTeacher, updateTeacher } from "../../Redux/userReducer";
import { NavLink, Redirect } from "react-router-dom";

const Teachers = props => {

    const [updateId, setUpdateId] = useState([])
    const [newFio, setNewFio] = useState(props.teachers.fio)
    const [newLogin, setNewLogin] = useState(props.teachers.login)
    const [newEmail, setNewEmail] = useState(props.teachers.email)
    const [newMobileNumber, setNewMobileNumber] = useState(props.teachers.mobileNumber)
    const [newSubject, setNewSubject] = useState(props.teachers.subject)

    useEffect(() => {
        props.getTeacher();
        M.AutoInit();
    }, [])

    let handleUpdateId = (id) => setUpdateId([updateId, id])
    let removeUpdateId = (id) => setUpdateId([...updateId.filter(o => o !== id)])
    let updateFio = (e) => setNewFio(e.currentTarget.value)
    let updateLogin = (e) => setNewLogin(e.currentTarget.value)
    let updateEmail = (e) => setNewEmail(e.currentTarget.value)
    let updateMobileNumber = (e) => setNewMobileNumber(e.currentTarget.value)
    let updateSubject = (e) => setNewSubject(e.currentTarget.value)
    let setFio = (fio) => setNewFio(fio)
    let setLogin = (login) => setNewLogin(login)
    let setEmail = (email) => setNewEmail(email)
    let setMobileNumber = (mobileNumber) => setNewMobileNumber(mobileNumber)
    let setSubject = (subject) => setNewSubject(subject)

    if (!props.isAuth) return <Redirect to='/'></Redirect>
    return (
        <div className='users'>
            <nav className='blue-grey lighten-4'>
                <div className="nav-wrapper">
                    <NavLink to="/personal" className="breadcrumb">Личный кабинет</NavLink>
                    <a href="#!" className="breadcrumb">Учителя</a>
                </div>
            </nav>
            <ul className="collapsible popout">
                <li className='active'>
                    <div className="collapsible-header blue-grey lighten-4">Учителя</div>
                    <div className="collapsible-body">
                        {
                            props.teachers.map((item, index) =>
                                <div className='items white z-depth-1-half'>
                                    {
                                        updateId.some(id => id === item._id)
                                            ? <div className='info'>
                                                <span>{index + 1}.</span>
                                                <input className='fio' type="text" onChange={updateFio} value={newFio} />
                                                <input className='login' type="text" onChange={updateLogin}
                                                    value={newLogin} />
                                                <input className='email' type="text" onChange={updateEmail}
                                                    value={newEmail} />
                                                <input className='mobileNumber' type="text" onChange={updateMobileNumber}
                                                    value={newMobileNumber} />
                                                <input className='subject' type="text" onChange={updateSubject}
                                                    value={newSubject} />
                                            </div>
                                            : <div className='info'>
                                                <span>{index + 1}.</span>
                                                <div className='fio'>{item.fio}</div>
                                                <div className='login'>{item.login}</div>
                                                <div className='email'>{item.email}</div>
                                                <div className='mobileNumber'>{item.mobileNumber}</div>
                                                <div className='subject'>{item.subject}</div>
                                            </div>
                                    }
                                    <div className='buttons'>
                                        {
                                            updateId.some(id => id === item._id)
                                                ? <a className='edit' onClick={() => {
                                                    removeUpdateId(item._id)
                                                    props.updateTeacher(item._id, newFio, newLogin, newEmail, newMobileNumber, newSubject)
                                                }} href="#s">
                                                    <i className="material-icons">check</i>
                                                </a>
                                                : <a className='edit' onClick={() => {
                                                    handleUpdateId(item._id)
                                                    setFio(item.fio)
                                                    setLogin(item.login)
                                                    setEmail(item.email)
                                                    setMobileNumber(item.mobileNumber)
                                                    setSubject(item.subject)
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
        teachers: state.users.teachers
    }
}

export default connect(mapStateToProps, { getTeacher, deleteUser, updateTeacher })(Teachers);
