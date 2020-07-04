import React from 'react';
import './App.scss';
import 'materialize-css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import AuthPageContainer from "./Pages/AuthPage/AuthPage";
import PersonalPageContainer from "./Pages/PersonalPage/PersonalPage";
import HeaderContainer from "./Components/Header/Header";
import ProfilePageContainer from "./Pages/ProfilePage/ProfilePage";
import JournalPageContainer from "./Pages/JournalPage/JournalPage";
import SchedulePageContainer from "./Pages/SchedulePage/SchedulePage";

const App = (props) => {
    return (
        <BrowserRouter>
            <HeaderContainer/>
            <div className="container">
                <Switch>
                    <Route path='/' render={() => <AuthPageContainer/>}/>
                    <Route path='/journal' render={() => <JournalPageContainer/>}/>
                    <Route path='/schedule' render={() => <SchedulePageContainer/>}/>
                    <Route path='/profile' render={() => <ProfilePageContainer/>}/>
                    <Route path='/personal' exact render={() => <PersonalPageContainer/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
