import React from 'react';
import './SchedulePage.scss'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const SchedulePage = (props) => {
    if (!props.isAuth) return <Redirect to={'/'}></Redirect>
    return (
        <div className='wrapper'>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card cyan darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">Понедельник</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card cyan darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">Вторник</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card cyan darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">Среда</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card cyan darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">Четверг</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card cyan darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">Пятница</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card cyan darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">Суббота</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {})(SchedulePage);