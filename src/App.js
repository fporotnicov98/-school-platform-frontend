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
import Users from "./Pages/Users/Users";
import Students from "./Pages/Users/Students";
import Teachers from "./Pages/Users/Teachers";
import Moderators from "./Pages/Users/Moderators";

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
                    <Route path='/users' exact render={() => <Users/>}/>
                    <Route path='/students' exact render={() => <Students/>}/>
                    <Route path='/teachers' exact render={() => <Teachers/>}/>
                    <Route path='/moderators' exact render={() => <Moderators/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
