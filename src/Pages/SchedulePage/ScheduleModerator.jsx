import React from 'react';
import './SchedulePage.scss'
import { Redirect } from "react-router-dom";
import Preloader from "../../Assets/Commons/Preloader";
import Select from '@material-ui/core/Select'

class ScheduleModerator extends React.Component {
    state = {
        selectedDay: null,
        firstSubject: null,
        secondSubject: null,
        thirdSubject: null,
        fourthSubject: null,
        fifthSubject: null,
        sixthSubject:null
    }

    setDay = (e) => this.setState({ selectedDay: e.target.value });
    setFirstSubject = (e) => this.setState({ firstSubject: e.target.value })
    setSecondSubject = (e) => this.setState({ secondSubject: e.target.value })
    setThirdSubject = (e) => this.setState({ thirdSubject: e.target.value })
    setFourthSubject = (e) => this.setState({ fourthSubject: e.target.value })
    setFifthSubject = (e) => this.setState({ fifthSubject: e.target.value })
    setSixthSubject = (e) => this.setState({ sixthSubject: e.target.value })

    render() {
        // if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        if (!this.props.scheduleItem) return <Preloader />
        return (
            <div className='wrapper-schedule'>
                <div className='schedule-title'>
                    <span>Класс: {this.props.scheduleItem[0]
                        ? this.props.scheduleItem[0].classNumber
                        : null
                    }</span>
                </div>
                <div className='chooseSubject'>
                    <span>Выбрать день недели: </span>
                    <Select
                        native
                        value={this.state.selectedDay}
                        onChange={this.setDay}
                        inputProps={{
                            name: 'selectedDay',
                            id: 'selectedDay',
                        }}
                    >
                        <option value="" disabled selected>Выбрать день</option>
                        <option value={"Понедельник"}>Понедельник</option>
                        <option value={"Вторник"}>Вторник</option>
                        <option value={"Среда"}>Среда</option>
                        <option value={"Четверг"}>Четверг</option>
                        <option value={"Пятница"}>Пятница</option>
                        <option value={"Суббота"}>Суббота</option>
                    </Select>
                </div>
                <div className="schedule">
                    <div className="card blue-grey lighten-4">
                        <div className="card-content">
                            <span className="card-title">
                                {this.state.selectedDay ? this.state.selectedDay.value : ""}
                            </span>
                            <div className='lessons white'>
                                <div className='lesson'>
                                    <span className='time'>8:00 - 8:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[0] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <Select
                                            native
                                            value={this.state.firstSubject}
                                            onChange={this.setFirstSubject}
                                            inputProps={{
                                                name: 'firstSubject',
                                                id: 'firstSubject',
                                            }}
                                        >
                                            <option value="" disabled selected>Изменить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                )
                                            }
                                            <option value="-">-</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>9:00 - 9:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[1] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <Select
                                            native
                                            value={this.state.secondSubject}
                                            onChange={this.setSecondSubject}
                                            inputProps={{
                                                name: 'secondSubject',
                                                id: 'secondSubject',
                                            }}
                                        >
                                            <option value="" disabled selected>Изменить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                )
                                            }
                                            <option value="-">-</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>10:00 - 10:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[2] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <Select
                                            native
                                            value={this.state.thirdSubject}
                                            onChange={this.setThirdSubject}
                                            inputProps={{
                                                name: 'thirdSubject',
                                                id: 'thirdSubject',
                                            }}
                                        >
                                            <option value="" disabled selected>Изменить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                )
                                            }
                                            <option value="-">-</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>11:00 - 11:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[3] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <Select
                                            native
                                            value={this.state.fourthSubject}
                                            onChange={this.setFourthSubject}
                                            inputProps={{
                                                name: 'fourthSubject',
                                                id: 'fourthSubject',
                                            }}
                                        >
                                            <option value="" disabled selected>Изменить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                )
                                            }
                                            <option value="-">-</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>12:00 - 12:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[4] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <Select
                                            native
                                            value={this.state.fifthSubject}
                                            onChange={this.setFifthSubject}
                                            inputProps={{
                                                name: 'fifthSubject',
                                                id: 'fifthSubject',
                                            }}
                                        >
                                            <option value="" disabled selected>Изменить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                )
                                            }
                                            <option value="-">-</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>13:00 - 13:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[5] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <Select
                                            native
                                            value={this.state.sixthSubject}
                                            onChange={this.setSixthSubject}
                                            inputProps={{
                                                name: 'sixthSubject',
                                                id: 'sixthSubject',
                                            }}
                                        >
                                            <option value="" disabled selected>Изменить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                )
                                            }
                                            <option value="-">-</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className='submit-schedule'>
                                <a onClick={() => {
                                this.props.updateSchedule(this.props.scheduleItem[0]._id,this.state.selectedDay,[this.state.firstSubject,this.state.secondSubject,this.state.thirdSubject,this.state.fourthSubject,this.state.fifthSubject,this.state.sixthSubject])
                                setTimeout(() => this.props.getScheduleItem(this.props.classId), 500)
                            }}
                                className="waves-effect waves-light btn white-text cyan darken-2">Сформировать
                                    расписание</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ScheduleModerator