import React from 'react';
import './JournalPage.scss'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import M from "materialize-css";

class JournalPage extends React.Component {
    componentDidMount() {
        M.Dropdown.init(this.Dropdown, {})
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/'}></Redirect>
        return (
            <div className='wrapper'>
                <div className='z-depth-2 journal blue-grey lighten-4'>
                    <ul id="dropdown2" className="dropdown-content">
                        <li><a href="#!">Математика</a></li>
                        <li><a href="#!">Литература</a></li>
                        <li><a href="#!">Биология</a></li>
                    </ul>
                    <a ref={Dropdown => {
                        this.Dropdown = Dropdown;
                    }} className="white-text cyan darken-2 btn dropdown-trigger" href="#!" data-target="dropdown2">Выбрать предмет<i
                        className="material-icons right">arrow_drop_down</i></a>
                    <h5>Электронный журнал:</h5>
                    <table>
                        <tr>
                            <th></th>
                            <th>Q1</th>
                            <th>Q2</th>
                            <th>Q3</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                            <th>Q4</th>
                        </tr>
                        <tr>
                            <td>Иванов Петр Сидорович</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>4</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>5</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Петров Иван Сидорович</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>4</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>5</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Бла бла бла</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>4</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>5</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Зубенко Михайил Петрович</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>4</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>5</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Зубенко Михайил Петрович</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>4</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>5</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Зубенко Михайил Петрович</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>4</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>5</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Зубенко Михайил Петрович</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>4</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>5</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Зубенко Михайил Петрович</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>4</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2</td>
                            <td>5</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {})(JournalPage);
