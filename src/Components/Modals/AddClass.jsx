import React, {Component} from 'react';
import M from "materialize-css";
import {connect} from "react-redux";
import {addClassroom} from "../../Redux/classReducer";
import Select from "react-select";

const number = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
];
const letter = [
    { value: 'А', label: 'А' },
    { value: 'Б', label: 'Б' },
    { value: 'В', label: 'В' },
];

class AddClass extends Component {
    componentDidMount() {
        M.FormSelect.init(this.FormSelect, {})
        M.FormSelect.init(this.FormSelect1, {})
    }

    state = {
        selectedOption1: null,
        selectedOption2: null,
    };

    handleChange1 = (selectedOption1) => {
        this.setState({ selectedOption1 });
        console.log(`Option selected:`, selectedOption1);
    };
    handleChange2 = (selectedOption2) => {
        this.setState({ selectedOption2 });
        console.log(`Option selected:`, selectedOption2);
    };

    render() {
        const { selectedOption1, selectedOption2 } = this.state;

        return (
            <div className="modal-content">
                <h4>Добавить класс</h4>
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
                <a href="#!" onClick={() => this.props.addClassroom(this.state.selectedOption1.label + this.state.selectedOption2.label)}
                   className="center modal-close waves-effect waves-light btn-flat cyan darken-2 white-text">Добавить</a>

            </div>
        );
    }
}

export default connect(null, {addClassroom})(AddClass);