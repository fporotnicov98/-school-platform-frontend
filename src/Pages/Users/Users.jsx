import React, {Component} from 'react';
import {connect} from "react-redux";
import {getModerator, getStudent, getTeacher} from "../../Redux/userReducer";
import {Redirect} from "react-router-dom";
import M from "materialize-css";
import './Users.scss'
import {deleteClassroom, getClasses} from "../../Redux/classReducer";

class Users extends Component {
    componentDidMount() {
        this.props.getClasses()
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
                                {
                                    this.props.classroom.map((item) =>
                                        <div>
                                            <span>ID класса: {item._id}</span>
                                            <span>Номер класса: {item.classNumber}</span>
                                            <a className='delete' onClick={() => this.props.deleteClassroom(item._id)}
                                               href="#s">
                                                <i className="material-icons">delete</i>
                                            </a>
                                        </div>
                                    )
                                }
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
                                    this.props.students.map((item, index) =>
                                        <div>
                                            <span>{index + 1}.</span>
                                            {item.fio}
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header blue-grey lighten-4">Учителя</div>
                            <div className="collapsible-body">
                                {
                                    this.props.teachers.map((item, index) =>
                                        <div>
                                            <span>{index + 1}.</span>
                                            {item.fio}
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
        students: state.users.students,
        teachers: state.users.teachers,
        moderators: state.users.moderators,
        classroom: state.classroom.classroom
    }
}

export default connect(mapStateToProps, {getStudent, getTeacher, getModerator, getClasses, deleteClassroom})(Users);
