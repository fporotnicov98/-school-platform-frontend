import React, {Component} from 'react';
import M from "materialize-css";
import {connect} from "react-redux";
import {getModerator, deleteUser, updateUser, updateModerator} from "../../Redux/userReducer";
import {Redirect} from "react-router-dom";
import './Users.scss'

class Moderators extends Component {
    componentDidMount() {
        this.props.getModerator();
        M.Collapsible.init(this.Collapsible, {accordion: false});
    }

    state = {
        updateId: [],
        newFio: this.props.moderators.fio,
        newLogin: this.props.moderators.login,
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
    setFio = (fio) => {
        this.setState({newFio: fio})
    }
    setLogin = (login) => {
        this.setState({newLogin: login})
    }


    render() {
        if (!this.props.isAuth) return <Redirect to='/'></Redirect>
        return (
            <div className='row'>
                <div className='users'>
                    <ul ref={Collapsible => {
                        this.Collapsible = Collapsible;
                    }} className="collapsible popout">
                        <li>
                            <div className="collapsible-header card-title blue-grey lighten-4">Модераторы</div>
                            <div className="collapsible-body">
                                {
                                    this.props.moderators.map((item, index) =>
                                        <div className='items white z-depth-1-half'>
                                            {
                                                this.state.updateId.some(id => id === item._id)
                                                    ? <div className='info'>
                                                        <span>{index + 1}.</span>
                                                        <input type="text" onChange={this.updateFio} value={this.state.newFio}/>
                                                        <input type="text" onChange={this.updateLogin} value={this.state.newLogin}/>
                                                    </div>
                                                    : <div className='info'>
                                                        <span>{index + 1}.</span>
                                                        <div className='fio'>{item.fio}</div>
                                                        <div className='login'>{item.login}</div>
                                                    </div>
                                            }
                                            <div className='buttons'>
                                                {
                                                    this.state.updateId.some(id => id === item._id)
                                                        ? <a className='edit' onClick={() => {
                                                            this.removeUpdateId(item._id)
                                                            this.props.updateModerator(item._id, this.state.newFio, this.state.newLogin)
                                                        }} href="#s">
                                                            <i className="material-icons">check</i>
                                                        </a>
                                                        : <a className='edit' onClick={() => {
                                                            this.setUpdateId(item._id)
                                                            this.setFio(item.fio)
                                                            this.setLogin(item.login)
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
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        moderators: state.users.moderators,
    }
}

export default connect(mapStateToProps, {getModerator, deleteUser, updateModerator})(Moderators);
