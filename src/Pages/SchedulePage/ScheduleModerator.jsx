import React, { useState } from 'react';
import './SchedulePage.scss'
import Preloader from "../../Assets/Commons/Preloader";
import Select from '@material-ui/core/Select'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const ScheduleModerator = props => {

    let [selectedDay, setDay] = useState(null)
    let [firstSubject, setFirstSubject] = useState(null)
    let [secondSubject, setSecondSubject] = useState(null)
    let [thirdSubject, setThirdSubject] = useState(null)
    let [fourthSubject, setFourthSubject] = useState(null)
    let [fifthSubject, setFifthSubject] = useState(null)
    let [sixthSubject, setSixthSubject] = useState(null)


    let handleSelectedDay = (e) => setDay(e.target.value);
    let handleFirstSubject = (e) => setFirstSubject(e.target.value)
    let handleSecondSubject = (e) => setSecondSubject(e.target.value)
    let handleThirdSubject = (e) => setThirdSubject(e.target.value)
    let handleFourthSubject = (e) => setFourthSubject(e.target.value)
    let handleFifthSubject = (e) => setFifthSubject(e.target.value)
    let handleSixthSubject = (e) => setSixthSubject(e.target.value)

    if (!props.scheduleItem) return <Preloader />
    return (
        <div className='wrapper-schedule'>
            <div className='chooseSubject'>
                <InputLabel id="demo-simple-select-label">Выбрать день недели</InputLabel>
                <Select
                    id="demo-simple-select"
                    value={selectedDay}
                    onChange={handleSelectedDay}
                >
                    <MenuItem value={"Понедельник"}>Понедельник</MenuItem>
                    <MenuItem value={"Вторник"}>Вторник</MenuItem>
                    <MenuItem value={"Среда"}>Среда</MenuItem>
                    <MenuItem value={"Четверг"}>Четверг</MenuItem>
                    <MenuItem value={"Пятница"}>Пятница</MenuItem>
                    <MenuItem value={"Суббота"}>Суббота</MenuItem>
                </Select>
            </div>
            {
                selectedDay === null
                    ? null
                    : <div className="schedule">
                        <div className="card blue-grey lighten-4">
                            <div className="card-content">
                                <span className="card-title">
                                    {selectedDay ? selectedDay.value : ""}
                                </span>
                                <div className='lessons white'>
                                    <div className='lesson'>
                                        <span className='time'>8:00 - 8:40</span>
                                        <div className='main-class'>
                                            {selectedDay && selectedDay === "Понедельник" ? props.scheduleItem[0].days.Mon.subjects[0] : null}
                                            {selectedDay && selectedDay === "Вторник" ? props.scheduleItem[0].days.Tue.subjects[0] : null}
                                            {selectedDay && selectedDay === "Среда" ? props.scheduleItem[0].days.Wed.subjects[0] : null}
                                            {selectedDay && selectedDay === "Четверг" ? props.scheduleItem[0].days.Thu.subjects[0] : null}
                                            {selectedDay && selectedDay === "Пятница" ? props.scheduleItem[0].days.Fri.subjects[0] : null}
                                            {selectedDay && selectedDay === "Суббота" ? props.scheduleItem[0].days.Sat.subjects[0] : null}
                                        </div>
                                        <div className="add-class input-field col s12">
                                            <Select
                                                native
                                                value={firstSubject}
                                                onChange={handleFirstSubject}
                                                inputProps={{
                                                    name: 'firstSubject',
                                                    id: 'firstSubject',
                                                }}
                                            >
                                                <option value="" disabled selected>Изменить предмет</option>
                                                {
                                                    props.teacherInfo.map(item =>
                                                        <option
                                                            value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                    )
                                                }
                                                <option value="-">-</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='lesson'>
                                        <span className='time'>9:00 - 9:40</span>
                                        <div className='main-class'>
                                            {selectedDay && selectedDay === "Понедельник" ? props.scheduleItem[0].days.Mon.subjects[1] : null}
                                            {selectedDay && selectedDay === "Вторник" ? props.scheduleItem[0].days.Tue.subjects[1] : null}
                                            {selectedDay && selectedDay === "Среда" ? props.scheduleItem[0].days.Wed.subjects[1] : null}
                                            {selectedDay && selectedDay === "Четверг" ? props.scheduleItem[0].days.Thu.subjects[1] : null}
                                            {selectedDay && selectedDay === "Пятница" ? props.scheduleItem[0].days.Fri.subjects[1] : null}
                                            {selectedDay && selectedDay === "Суббота" ? props.scheduleItem[0].days.Sat.subjects[1] : null}
                                        </div>
                                        <div className="add-class input-field col s12">
                                            <Select
                                                native
                                                value={secondSubject}
                                                onChange={handleSecondSubject}
                                                inputProps={{
                                                    name: 'secondSubject',
                                                    id: 'secondSubject',
                                                }}
                                            >
                                                <option value="" disabled selected>Изменить предмет</option>
                                                {
                                                    props.teacherInfo.map(item =>
                                                        <option
                                                            value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                    )
                                                }
                                                <option value="-">-</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='lesson'>
                                        <span className='time'>10:00 - 10:40</span>
                                        <div className='main-class'>
                                            {selectedDay && selectedDay === "Понедельник" ? props.scheduleItem[0].days.Mon.subjects[2] : null}
                                            {selectedDay && selectedDay === "Вторник" ? props.scheduleItem[0].days.Tue.subjects[2] : null}
                                            {selectedDay && selectedDay === "Среда" ? props.scheduleItem[0].days.Wed.subjects[2] : null}
                                            {selectedDay && selectedDay === "Четверг" ? props.scheduleItem[0].days.Thu.subjects[2] : null}
                                            {selectedDay && selectedDay === "Пятница" ? props.scheduleItem[0].days.Fri.subjects[2] : null}
                                            {selectedDay && selectedDay === "Суббота" ? props.scheduleItem[0].days.Sat.subjects[2] : null}
                                        </div>
                                        <div className="add-class input-field col s12">
                                            <Select
                                                native
                                                value={thirdSubject}
                                                onChange={handleThirdSubject}
                                                inputProps={{
                                                    name: 'thirdSubject',
                                                    id: 'thirdSubject',
                                                }}
                                            >
                                                <option value="" disabled selected>Изменить предмет</option>
                                                {
                                                    props.teacherInfo.map(item =>
                                                        <option
                                                            value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                    )
                                                }
                                                <option value="-">-</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='lesson'>
                                        <span className='time'>11:00 - 11:40</span>
                                        <div className='main-class'>
                                            {selectedDay && selectedDay === "Понедельник" ? props.scheduleItem[0].days.Mon.subjects[3] : null}
                                            {selectedDay && selectedDay === "Вторник" ? props.scheduleItem[0].days.Tue.subjects[3] : null}
                                            {selectedDay && selectedDay === "Среда" ? props.scheduleItem[0].days.Wed.subjects[3] : null}
                                            {selectedDay && selectedDay === "Четверг" ? props.scheduleItem[0].days.Thu.subjects[3] : null}
                                            {selectedDay && selectedDay === "Пятница" ? props.scheduleItem[0].days.Fri.subjects[3] : null}
                                            {selectedDay && selectedDay === "Суббота" ? props.scheduleItem[0].days.Sat.subjects[3] : null}
                                        </div>
                                        <div className="add-class input-field col s12">
                                            <Select
                                                native
                                                value={fourthSubject}
                                                onChange={handleFourthSubject}
                                                inputProps={{
                                                    name: 'fourthSubject',
                                                    id: 'fourthSubject',
                                                }}
                                            >
                                                <option value="" disabled selected>Изменить предмет</option>
                                                {
                                                    props.teacherInfo.map(item =>
                                                        <option
                                                            value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                    )
                                                }
                                                <option value="-">-</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='lesson'>
                                        <span className='time'>12:00 - 12:40</span>
                                        <div className='main-class'>
                                            {selectedDay && selectedDay === "Понедельник" ? props.scheduleItem[0].days.Mon.subjects[4] : null}
                                            {selectedDay && selectedDay === "Вторник" ? props.scheduleItem[0].days.Tue.subjects[4] : null}
                                            {selectedDay && selectedDay === "Среда" ? props.scheduleItem[0].days.Wed.subjects[4] : null}
                                            {selectedDay && selectedDay === "Четверг" ? props.scheduleItem[0].days.Thu.subjects[4] : null}
                                            {selectedDay && selectedDay === "Пятница" ? props.scheduleItem[0].days.Fri.subjects[4] : null}
                                            {selectedDay && selectedDay === "Суббота" ? props.scheduleItem[0].days.Sat.subjects[4] : null}
                                        </div>
                                        <div className="add-class input-field col s12">
                                            <Select
                                                native
                                                value={fifthSubject}
                                                onChange={handleFifthSubject}
                                                inputProps={{
                                                    name: 'fifthSubject',
                                                    id: 'fifthSubject',
                                                }}
                                            >
                                                <option value="" disabled selected>Изменить предмет</option>
                                                {
                                                    props.teacherInfo.map(item =>
                                                        <option
                                                            value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                    )
                                                }
                                                <option value="-">-</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='lesson'>
                                        <span className='time'>13:00 - 13:40</span>
                                        <div className='main-class'>
                                            {selectedDay && selectedDay === "Понедельник" ? props.scheduleItem[0].days.Mon.subjects[5] : null}
                                            {selectedDay && selectedDay === "Вторник" ? props.scheduleItem[0].days.Tue.subjects[5] : null}
                                            {selectedDay && selectedDay === "Среда" ? props.scheduleItem[0].days.Wed.subjects[5] : null}
                                            {selectedDay && selectedDay === "Четверг" ? props.scheduleItem[0].days.Thu.subjects[5] : null}
                                            {selectedDay && selectedDay === "Пятница" ? props.scheduleItem[0].days.Fri.subjects[5] : null}
                                            {selectedDay && selectedDay === "Суббота" ? props.scheduleItem[0].days.Sat.subjects[5] : null}
                                        </div>
                                        <div className="add-class input-field col s12">
                                            <Select
                                                native
                                                value={sixthSubject}
                                                onChange={handleSixthSubject}
                                                inputProps={{
                                                    name: 'sixthSubject',
                                                    id: 'sixthSubject',
                                                }}
                                            >
                                                <option value="" disabled selected>Изменить предмет</option>
                                                {
                                                    props.teacherInfo.map(item =>
                                                        <option
                                                            value={`${item.subject} (${item.fio})`}>{`${item.subject} (${item.fio})`}</option>
                                                    )
                                                }
                                                <option value="-">-</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className='submit-schedule'>
                                    <a onClick={() => {
                                        props.updateSchedule(props.scheduleItem[0]._id, selectedDay, [firstSubject, secondSubject, thirdSubject, fourthSubject, fifthSubject, sixthSubject])
                                        setTimeout(() => props.getScheduleItem(props.classId), 500)
                                    }}
                                        className="waves-effect waves-light btn white-text cyan darken-2">Сформировать
                                            расписание</a>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ScheduleModerator