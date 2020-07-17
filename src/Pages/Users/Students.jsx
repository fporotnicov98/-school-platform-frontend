import React, {Component} from 'react';
import M from "materialize-css";
import {connect} from "react-redux";
import {deleteUser, getStudent, updateStudent} from "../../Redux/userReducer";
import {Redirect} from "react-router-dom";

class Students extends Component {
    componentDidMount() {
        this.props.getStudent();
        M.Collapsible.init(this.Collapsible, {accordion: false});
    }
    state = {
        updateId: [],
        newFio: this.props.students.fio,
        newLogin: this.props.students.login,
        newEmail: this.props.students.email,
        newMobileNumber: this.props.students.mobileNumber
    }
    setUpdateId = (id) => {
        this.setState({updateId: [this.state.updateId, id]})
    }
    removeUpdateId = (id) => {
        this.setState({updateId: [...this.state.updateId.filter(o => o !== id)]})
    }
    updateFio = (e) => {
        this.setState({newFio: e.currentTarget.value})
    }
    updateLogin = (e) => {
        this.setState({newLogin: e.currentTarget.value})
    }
    updateEmail = (e) => {
        this.setState({newEmail: e.currentTarget.value})
    }
    updateMobileNumber = (e) => {
        this.setState({newMobileNumber: e.currentTarget.value})
    }
    setFio = (fio) => {
        this.setState({newFio: fio})
    }
    setLogin = (login) => {
        this.setState({newLogin: login})
    }
    setEmail = (email) => {
        this.setState({newEmail: email})
    }
    setMobileNumber = (mobileNumber) => {
        this.setState({newMobileNumber: mobileNumber})
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/'></Redirect>
        return (
            <div className='users'>
                <ul ref={Collapsible => {
                    this.Collapsible = Collapsible;
                }} className="collapsible popout">
                    <li className='active'>
                        <div className="collapsible-header blue-grey lighten-4">Ученики</div>
                        <div className="collapsible-body">
                            {
                                this.props.students.map((item, index) =>
                                    <div className='items white z-depth-1-half'>
                                        {
                                            this.state.updateId.some(id => id === item._id)
                                                ? <div className='info'>
                                                    <span>{index + 1}.</span>
                                                    <input className='fio' type="text" onChange={this.updateFio} value={this.state.newFio}/>
                                                    <input className='login' type="text" onChange={this.updateLogin}
                                                           value={this.state.newLogin}/>
                                                    <input className='email' type="text" onChange={this.updateEmail}
                                                           value={this.state.newEmail}/>
                                                    <input className='mobileNumber' type="text" onChange={this.updateMobileNumber}
                                                           value={this.state.newMobileNumber}/>
                                                </div>
                                                : <div className='info'>
                                                    <span>{index + 1}.</span>
                                                    <div className='fio'>{item.fio}</div>
                                                    <div className='login'>{item.login}</div>
                                                    <div className='email'>{item.email}</div>
                                                    <div className='mobileNumber'>{item.mobileNumber}</div>
                                                </div>
                                        }
                                        <div className='buttons'>
                                            {
                                                this.state.updateId.some(id => id === item._id)
                                                    ? <a className='edit' onClick={() => {
                                                        this.removeUpdateId(item._id)
                                                        this.props.updateStudent(item._id, this.state.newFio, this.state.newLogin, this.state.newEmail, this.state.newMobileNumber)
                                                    }} href="#s">
                                                        <i className="material-icons">check</i>
                                                    </a>
                                                    : <a className='edit' onClick={() => {
                                                        this.setUpdateId(item._id)
                                                        this.setFio(item.fio)
                                                        this.setLogin(item.login)
                                                        this.setEmail(item.email)
                                                        this.setMobileNumber(item.mobileNumber)
                                                    }} href="#s">
                                                        <i className="material-icons">edit</i>
                                                    </a>
                                            }
                                            <a className='delete' onClick={() => this.props.deleteUser(item._id)}
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
}


const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        students: state.users.students,
    }
}

export default connect(mapStateToProps, {getStudent, deleteUser, updateStudent})(Students);