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
import Classes from "./Pages/Users/Classes";
import Students from "./Pages/Users/Students";
import Teachers from "./Pages/Users/Teachers";
import Moderators from "./Pages/Users/Moderators";
import ClassroomItem from "./Pages/Users/ClassroomItem/ClassroomItem";
import DialogsPageContainer from "./Pages/DialogsPage/DialogsPage";

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
                    <Route path='/classroom' exact render={() => <Classes/>}/>
                    <Route path='/classroom/:classId?'  render={() => <ClassroomItem/>}/>
                    <Route path='/students' exact render={() => <Students/>}/>
                    <Route path='/teachers' exact render={() => <Teachers/>}/>
                    <Route path='/moderators' exact render={() => <Moderators/>}/>
                    <Route path='/dialogs/:classId?' render={() => <DialogsPageContainer/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
