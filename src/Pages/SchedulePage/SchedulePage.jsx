import React from 'react';
import './SchedulePage.scss'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getClassroom} from "../../Redux/classReducer";
import {Preloader} from "react-materialize";

class SchedulePage extends React.Component {
    componentDidMount() {
        this.props.getClassroom(this.props.auth.classroom)
    }

    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        if (!this.props.class) return <Preloader/>
        return (
            <div className='wrapper'>
                <div className="row">
                    <div className='schedule-title'>Класс:
                        <span>{this.props.class.classNumber}</span>
                        <a
                            className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                            className="material-icons">arrow_drop_down</i></a>
                    </div>
                    <div className="col s12 m4">
                        <div className="card blue-grey lighten-4">
                            <div className="card-content">
                                <span className="card-title">Понедельник</span>
                                <div className='schedule'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        class: state.classroom.class
    }
}

export default connect(mapStateToProps, {getClassroom})(SchedulePage);