import React from 'react';
import './App.scss';
import 'materialize-css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AuthPage} from "./Pages/AuthPage/AuthPage";
import {PersonalPage} from "./Pages/PersonalPage/PersonalPage";
import Header from "./Components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Switch>
                    <Route path='/' exact>
                        <AuthPage/>
                    </Route>
                    <Route path='/personal' exact>
                        <PersonalPage/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
