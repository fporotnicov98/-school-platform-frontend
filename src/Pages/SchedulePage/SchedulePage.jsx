import React from 'react';
import './SchedulePage.scss'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getClasses, getClassroom} from "../../Redux/classReducer";
import {Preloader} from "react-materialize";
import M from "materialize-css";

class SchedulePage extends React.Component {
    componentDidMount() {
        this.props.getClasses()
        M.Dropdown.init(this.Dropdown, {})
        M.Dropdown.init(this.Dropdown1, {})
    }

    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        // if (!this.props.class) return <Preloader/>
        return (
            <div className='wrapper'>
                <div className='schedule-title'>Класс:
                    <ul id="dropdown1" className="dropdown-content">
                        {
                            this.props.classroom.map(item =>
                                item.classNumber
                            )
                        }
                    </ul>
                    <a ref={Dropdown => {
                        this.Dropdown = Dropdown;
                    }} data-target='dropdown1'
                       className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                        className="material-icons">arrow_drop_down</i></a>
                </div>
                <div className="schedule">
                    <div className="card blue-grey lighten-4">
                        <div className="card-content">
                            <span className="card-title">Понедельник</span>
                            <ul id="dropdown2" className="dropdown-content">
                                {/*Для списка предметов*/}
                                <p>Русскиц</p>
                                <p>Физика</p>
                                <p>Матан</p>
                                <p>Англ</p>


                            </ul>
                            <div className='lessons white'>
                                <div className='lesson'>
                                    <span>8:00 - 8:40</span>
                                    <div className='add-class'>
                                        Добавить предмет
                                        <a  ref={Dropdown => {
                                            this.Dropdown1 = Dropdown;
                                        }} data-target='dropdown2' className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                            className="material-icons">add</i></a>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span>9:00 - 9:40</span>
                                    <div className='add-class'>
                                        Добавить предмет
                                        <a className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                            className="material-icons">add</i></a>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span>10:00 - 10:40</span>
                                    <div className='add-class'>
                                        Добавить предмет
                                        <a className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                            className="material-icons">add</i></a>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span>11:00 - 11:40</span>
                                    <div className='add-class'>
                                        Добавить предмет
                                        <a className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                            className="material-icons">add</i></a>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span>12:00 - 12:40</span>
                                    <div className='add-class'>
                                        Добавить предмет
                                        <a className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                            className="material-icons">add</i></a>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span>13:00 - 13:40</span>
                                    <div className='add-class'>
                                        Добавить предмет
                                        <a className="btn-floating btn-small waves-effect waves-light cyan darken-2"><i
                                            className="material-icons">add</i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='submit-schedule'>
                                <a className="waves-effect waves-light btn white-text">Сформировать расписание</a>
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
        class: state.classroom.class,
        classroom: state.classroom.classroom,
    }
}

export default connect(mapStateToProps, {getClasses})(SchedulePage);