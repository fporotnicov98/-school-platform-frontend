import React, {Component} from 'react';
import M from "materialize-css";

class AddClass extends Component {
    componentDidMount() {
        M.FormSelect.init(this.FormSelect, {})
        M.FormSelect.init(this.FormSelect1, {})
    }

    render() {
        return (
            <div className="modal-content">
                <h4>Добавить класс</h4>
                <div className="input-field number-class">
                    <select ref={FormSelect => {
                        this.FormSelect = FormSelect;
                    }}>
                        <option value="" disabled selected>Выберите номер</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                </div>
                <div className="input-field letter-class">
                    <select ref={FormSelect => {
                        this.FormSelect1 = FormSelect;
                    }}>
                        <option value="" disabled selected>Выберите букву</option>
                        <option value="А">А</option>
                        <option value="Б">Б</option>
                        <option value="В">В</option>
                        <option value="Г">Г</option>
                        <option value="Д">Д</option>
                        <option value="Е">Е</option>
                        <option value="Ж">Ж</option>
                        <option value="З">З</option>
                        <option value="И">И</option>
                        <option value="К">К</option>
                    </select>
                </div>
                <a href="#!"
                   className="center modal-close waves-effect waves-light btn-flat cyan darken-2 white-text">Добавить</a>
            </div>
        );
    }
}

export default AddClass;