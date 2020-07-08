import React, {Component} from 'react';
import {connect} from "react-redux";
import {getModerator, getStudent, getTeacher} from "../../Redux/userReducer";
import {Redirect} from "react-router-dom";
import M from "materialize-css";
import './Users.scss'

class Users extends Component {
    componentDidMount() {
        this.props.getStudent();
        this.props.getModerator();
        this.props.getTeacher();
        M.Collapsible.init(this.Collapsible1, {accordion: false});
        M.Collapsible.init(this.Collapsible, {accordion: false});
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/'></Redirect>
        return (
            <div className='row'>
                <div className='classes col l6'>
                    <ul ref={Collapsible => {
                        this.Collapsible = Collapsible;
                    }} className="collapsible popout">
                        <li>
                            <div className="collapsible-header blue-grey lighten-4">Классы</div>
                            <div className="collapsible-body">
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='users col l6'>
                    <ul ref={Collapsible => {
                        this.Collapsible1 = Collapsible;
                    }} className="collapsible popout">
                        <li>
                            <div className="collapsible-header blue-grey lighten-4">Ученики</div>
                            <div className="collapsible-body">
                                {
                                    this.props.students.map(item =>
                                        <div>{item.fio}</div>
                                    )
                                }
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header blue-grey lighten-4">Учителя</div>
                            <div className="collapsible-body">
                                {
                                    this.props.teachers.map(item =>
                                        <div>{item.fio}</div>
                                    )
                                }
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header blue-grey lighten-4">Модераторы</div>
                            <div className="collapsible-body">
                                {
                                    this.props.moderators.map(item =>
                                        <div>{item.fio}</div>
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
        students: state.users.students,
        teachers: state.users.teachers,
        moderators: state.users.moderators,
    }
}

export default connect(mapStateToProps, {getStudent, getTeacher, getModerator})(Users);
