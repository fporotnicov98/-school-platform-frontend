import React, {Component} from 'react';
import M from "materialize-css";
import {connect} from "react-redux";
import {addClassroom} from "../../../Redux/classReducer";
import Select from "react-select";

const number = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7'},
    {value: '8', label: '8'},
    {value: '9', label: '9'},
    {value: '10', label: '10'},
    {value: '11', label: '11'},
];
const letter = [
    {value: 'А', label: 'А'},
    {value: 'Б', label: 'Б'},
    {value: 'В', label: 'В'},
    {value: 'Г', label: 'Г'},
    {value: 'Д', label: 'Д'},
    {value: 'Е', label: 'Е'},
    {value: 'Ж', label: 'Ж'},
    {value: 'З', label: 'З'},
];

class AddClass extends Component {

    state = {
        selectedOption1: '',
        selectedOption2: ''
    };

    handleChange1 = (selectedOption1) => {
        this.setState({selectedOption1});
        console.log(`Option selected:`, selectedOption1);
    };
    handleChange2 = (selectedOption2) => {
        this.setState({selectedOption2});
        console.log(`Option selected:`, selectedOption2);
    };

    render() {
        const {selectedOption1, selectedOption2} = this.state;

        return (
            <div className="login">
                <div className="card blue-grey lighten-4">
                    <div className="card-content date-text">
                        <span className="card-title center">Добавить класс</span>
                        <Select
                            value={selectedOption1}
                            onChange={this.handleChange1}
                            options={number}
                        />
                        <Select
                            value={selectedOption2}
                            onChange={this.handleChange2}
                            options={letter}
                        />
                        {
                            (this.state.selectedOption1.value && this.state.selectedOption2.value)
                                ? <a href="#!"
                                     onClick={() => this.props.addClassroom(this.state.selectedOption1.value + this.state.selectedOption2.value)}
                                     className="btn-flat cyan darken-2 white-text">Добавить</a>
                                : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {addClassroom})(AddClass);