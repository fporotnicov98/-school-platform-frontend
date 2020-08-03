import React from 'react';
import './ScheduleTS.scss'
import {Redirect, withRouter} from "react-router-dom";
import Select from '@material-ui/core/Select'
import {compose} from "redux";
import {connect} from "react-redux";
import {getSchedule} from "../../Redux/scheduleReducer";
import {getClasses, getClassroom} from "../../Redux/classReducer";
import InputLabel from "@material-ui/core/InputLabel";

class ScheduleTS extends React.Component {

    state = {
        selectedClass: null
    }

    componentDidMount() {
        this.props.getSchedule()
        this.props.getClasses()
    }

    setClass = (e) => {
        this.setState({selectedClass: e.target.value})
    }


    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        return (
            <>
                <div className='schedule-title'>
                    <InputLabel id="demo-simple-select-label">Выбрать класс</InputLabel>
                    <Select
                        className='class'
                        id="demo-simple-select"
                        value={this.state.selectedClass}
                        onChange={this.setClass}
                        inputProps={{
                            name: 'class-number',
                            id: 'class-number',
                        }}
                    >
                        {/*<option value="" disabled selected>Выбрать класс</option>*/}
                        {
                            this.props.classroom.map(item =>
                                <option
                                    value={item.classNumber}>{item.classNumber}</option>
                            )
                        }
                    </Select>
                </div>
                {
                    this.props.schedule.map(schedule =>
                        this.state.selectedClass === schedule.classNumber
                            ? <div className='wrapper-schedule-ts'>
                                <div className="schedule">
                                    <div className="pn card blue-grey lighten-4">
                                        <div className="card-content">
                                        <span className="card-title">
                                            {schedule.days.Mon.day}
                                        </span>
                                            <div className='lessons white'>
                                                <div className='lesson'>
                                                    <span className='time'>8:00 - 8:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Mon.subjects[0]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>9:00 - 9:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Mon.subjects[1]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>10:00 - 10:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Mon.subjects[2]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>11:00 - 11:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Mon.subjects[3]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>12:00 - 12:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Mon.subjects[4]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>13:00 - 13:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Mon.subjects[5]}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vt card blue-grey lighten-4">
                                        <div className="card-content">
                                        <span className="card-title">
                                            {schedule.days.Tue.day}
                                        </span>
                                            <div className='lessons white'>
                                                <div className='lesson'>
                                                    <span className='time'>8:00 - 8:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Tue.subjects[0]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>9:00 - 9:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Tue.subjects[1]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>10:00 - 10:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Tue.subjects[2]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>11:00 - 11:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Tue.subjects[3]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>12:00 - 12:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Tue.subjects[4]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>13:00 - 13:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Tue.subjects[5]}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sr card blue-grey lighten-4">
                                        <div className="card-content">
                                        <span className="card-title">
                                            {schedule.days.Wed.day}
                                        </span>
                                            <div className='lessons white'>
                                                <div className='lesson'>
                                                    <span className='time'>8:00 - 8:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Wed.subjects[0]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>9:00 - 9:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Wed.subjects[1]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>10:00 - 10:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Wed.subjects[2]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>11:00 - 11:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Wed.subjects[3]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>12:00 - 12:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Wed.subjects[4]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>13:00 - 13:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Wed.subjects[5]}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ch card blue-grey lighten-4">
                                        <div className="card-content">
                                        <span className="card-title">
                                            {schedule.days.Thu.day}
                                        </span>
                                            <div className='lessons white'>
                                                <div className='lesson'>
                                                    <span className='time'>8:00 - 8:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Thu.subjects[0]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>9:00 - 9:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Thu.subjects[1]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>10:00 - 10:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Thu.subjects[2]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>11:00 - 11:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Thu.subjects[3]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>12:00 - 12:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Thu.subjects[4]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>13:00 - 13:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Thu.subjects[5]}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt card blue-grey lighten-4">
                                        <div className="card-content">
                                        <span className="card-title">
                                            {schedule.days.Fri.day}
                                        </span>
                                            <div className='lessons white'>
                                                <div className='lesson'>
                                                    <span className='time'>8:00 - 8:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Fri.subjects[0]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>9:00 - 9:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Fri.subjects[1]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>10:00 - 10:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Fri.subjects[2]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>11:00 - 11:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Fri.subjects[3]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>12:00 - 12:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Fri.subjects[4]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>13:00 - 13:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Fri.subjects[5]}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sb card blue-grey lighten-4">
                                        <div className="card-content">
                                        <span className="card-title">
                                            {schedule.days.Sat.day}
                                        </span>
                                            <div className='lessons white'>
                                                <div className='lesson'>
                                                    <span className='time'>8:00 - 8:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Sat.subjects[0]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>9:00 - 9:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Sat.subjects[1]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>10:00 - 10:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Sat.subjects[2]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>11:00 - 11:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Sat.subjects[3]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>12:00 - 12:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Sat.subjects[4]}
                                                    </div>
                                                </div>
                                                <div className='lesson'>
                                                    <span className='time'>13:00 - 13:40</span>
                                                    <div className='main-class'>
                                                        {schedule.days.Sat.subjects[5]}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null
                    )
                }
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        schedule: state.schedule.schedule,
        classroom: state.classroom.classroom
    }
}

export default compose(
    connect(mapStateToProps, {getClasses, getSchedule})
)(ScheduleTS);