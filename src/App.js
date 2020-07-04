import React from 'react';
import './App.scss';
import 'materialize-css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AuthPageContainer from "./Pages/AuthPage/AuthPage";
import PersonalPageContainer from "./Pages/PersonalPage/PersonalPage";
import HeaderContainer from "./Components/Header/Header";
import ProfilePageContainer from "./Pages/ProfilePage/ProfilePage";
import JournalPage from "./Pages/JournalPage/JournalPage";
import SchedulePage from "./Pages/SchedulePage/SchedulePage";

function App() {
    return (
        <BrowserRouter>
            <HeaderContainer/>
            <div className="container">
                <Switch>
                    <Route path='/' exact render={() => <AuthPageContainer/>}/>
                    <Route path='/journal' render={() => <JournalPage/>}/>
                    <Route path='/schedule' render={() => <SchedulePage/>}/>
                    <Route path='/profile' render={() => <ProfilePageContainer/>}/>
                    <Route path='/personal' exact render={() => <PersonalPageContainer/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
