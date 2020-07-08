import React, {Component} from 'react';
import M from "materialize-css";
import {connect} from "react-redux";
import {getModerator, getStudent, getTeacher} from "../../Redux/userReducer";
import {Redirect} from "react-router-dom";

class Teachers extends Component {
    componentDidMount() {
        this.props.getTeacher();
        M.Collapsible.init(this.Collapsible, {accordion: false});
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/'></Redirect>
        return (
            <div className='users'>
                <ul ref={Collapsible => {
                    this.Collapsible = Collapsible;
                }} className="collapsible popout">
                    <li>
                        <div className="collapsible-header blue-grey lighten-4">Учителя</div>
                        <div className="collapsible-body">
                            {
                                this.props.teachers.map((item, index) =>
                                    <div className='items'>
                                        <div className='text-darken-1'><span>{index + 1}.</span>{item.fio}</div>
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
        teachers: state.users.teachers
    }
}

export default connect(mapStateToProps, {getTeacher})(Teachers);
