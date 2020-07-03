import React from 'react';
import './App.scss';
import 'materialize-css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AuthPage} from "./Pages/AuthPage/AuthPage";
import PersonalPageContainer from "./Pages/PersonalPage/PersonalPage";
import HeaderContainer from "./Components/Header/Header";
import ProfilePageContainer from "./Pages/ProfilePage/ProfilePage";

function App() {
    return (
        <BrowserRouter>
            <HeaderContainer/>
            <div className="container">
                <Switch>
                    <Route path='/' exact render={() => <AuthPage/>}/>
                    <Route path='/profile' render={() => <ProfilePageContainer/>}/>
                    <Route path='/personal' exact render={() => <PersonalPageContainer/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
