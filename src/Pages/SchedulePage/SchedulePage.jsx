import React from 'react';
import './SchedulePage.scss'
import {Redirect} from "react-router-dom";
import M from "materialize-css";
import Preloader from "../../Assets/Commons/Preloader";
// import Select from "react-select";
import Select from '@material-ui/core/Select'


// const day = [
//     {value: 'Понедельник', label: 'Понедельник'},
//     {value: 'Вторник', label: 'Вторник'},
//     {value: 'Среда', label: 'Среда'},
//     {value: 'Четверг', label: 'Четверг'},
//     {value: 'Пятница', label: 'Пятница'},
//     {value: 'Суббота', label: 'Суббота'}
// ]

class SchedulePage extends React.Component {
    state = {
        selectedDay: null,
        subjects: null,
        teacherInfo: null
    }
    // handleChange = (selectedDay) => {
    //     this.setState({selectedDay});
    // };
    handleChange = (e) => {
        this.setState({teacherInfo: e.target.value})
    }

    componentDidMount() {
        M.Dropdown.init(this.Dropdown, {})
        M.FormSelect.init(this.FormSelect, {})
        M.FormSelect.init(this.FormSelect1, {})
        M.FormSelect.init(this.FormSelect2, {})
        M.FormSelect.init(this.FormSelect3, {})
        M.FormSelect.init(this.FormSelect4, {})
        M.FormSelect.init(this.FormSelect5, {})
        M.FormSelect.init(this.FormSelect6, {})
    }

    render() {
        if (!this.props.auth.isAuth) return <Redirect to={'/'}></Redirect>
        if (!this.props.scheduleItem) return <Preloader/>
        const {selectedDay} = this.state;
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
                    {/* <Select
                        value={selectedDay}
                        onChange={this.handleChange}
                        options={day}
                    /> */}
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
                                        {this.state.selectedDay && this.state.selectedDay.value === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[0] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[0] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <select ref={FormSelect => {
                                            this.FormSelect1 = FormSelect
                                        }}>
                                            <option value="" disabled selected>Добавить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option>{item.subject}{item.fio}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>9:00 - 9:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay.value === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[1] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[1] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <Select
                                            native
                                            value={this.state.teacherInfo}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'teacherInfo',
                                                id: 'teacherInfo',
                                            }}
                                        >
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option
                                                        value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                )
                                            }
                                        </Select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>10:00 - 10:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay.value === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[2] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[2] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <select ref={FormSelect => {
                                            this.FormSelect3 = FormSelect
                                        }}>
                                            <option value="" disabled selected>Добавить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option>{item.subject}{item.fio}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>11:00 - 11:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay.value === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[3] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[3] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <select ref={FormSelect => {
                                            this.FormSelect4 = FormSelect
                                        }}>
                                            <option value="" disabled selected>Добавить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option>{item.subject}{item.fio}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>12:00 - 12:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay.value === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[4] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[4] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <select ref={FormSelect => {
                                            this.FormSelect5 = FormSelect
                                        }}>
                                            <option value="" disabled selected>Добавить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option>{item.subject}{item.fio}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='lesson'>
                                    <span className='time'>13:00 - 13:40</span>
                                    <div className='main-class'>
                                        {this.state.selectedDay && this.state.selectedDay.value === "Понедельник" ? this.props.scheduleItem[0].days.Mon.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Вторник" ? this.props.scheduleItem[0].days.Tue.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Среда" ? this.props.scheduleItem[0].days.Wed.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Четверг" ? this.props.scheduleItem[0].days.Thu.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Пятница" ? this.props.scheduleItem[0].days.Fri.subjects[5] : null}
                                        {this.state.selectedDay && this.state.selectedDay.value === "Суббота" ? this.props.scheduleItem[0].days.Sat.subjects[5] : null}
                                    </div>
                                    <div className="add-class input-field col s12">
                                        <select ref={FormSelect => {
                                            this.FormSelect6 = FormSelect
                                        }}>
                                            <option value="" disabled selected>Добавить предмет</option>
                                            {
                                                this.props.teacherInfo.map(item =>
                                                    <option>{item.subject}{item.fio}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='submit-schedule'>
                                <a className="waves-effect waves-light btn white-text cyan darken-2">Сформировать
                                    расписание</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SchedulePage