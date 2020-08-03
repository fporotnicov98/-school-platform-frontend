import React from 'react';
import './App.scss';
import 'materialize-css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AuthPageContainer from "./Pages/AuthPage/AuthPage";
import PersonalPageContainer from "./Pages/PersonalPage/PersonalPage";
import HeaderContainer from "./Components/Header/Header";
import ProfilePageContainer from "./Pages/ProfilePage/ProfilePage";
import SchedulePageContainer from "./Pages/SchedulePage/ScheduleTS";
import Classes from "./Pages/Users/Classes";
import Students from "./Pages/Users/Students";
import Teachers from "./Pages/Users/Teachers";
import Moderators from "./Pages/Users/Moderators";
import ClassroomItem from "./Pages/Users/ClassroomItem/ClassroomItem";
import DialogsPageContainer from "./Pages/DialogsPage/DialogsPage";
import TasksPageContainer from "./Pages/TasksPage/TasksPage";
import AddTasks from "./Pages/TasksPage/addTasks/AddTasks";
import ShowTasks from "./Pages/TasksPage/showTasks/ShowTasks";
import CheckTasks from "./Pages/TasksPage/checkTasks/CheckTasks";
import TaskItemContainer from "./Pages/TasksPage/TaskItem/TaskItemContainer";
import CheckingTasksContainer from "./Pages/TasksPage/checkTasks/CheckingTasks/CheckingTasksContainer";
import TaskCheckingInfoContainer from "./Pages/TasksPage/TaskItem/TaskCheckingInfoContainer";
import JournalPageContainer from "./Pages/JournalPage/JournalPageContainer";

function App() {
    return (
        <BrowserRouter>
            <HeaderContainer/>
            <div className="container">
                <Switch>
                    <Route path='/' exact render={() => <AuthPageContainer/>}/>
                    <Route path='/schedule' render={() => <SchedulePageContainer/>}/>
                    <Route path='/profile' render={() => <ProfilePageContainer/>}/>
                    <Route path='/personal' exact render={() => <PersonalPageContainer/>}/>
                    <Route path='/classroom' exact render={() => <Classes/>}/>
                    <Route path='/classroom/:classId?'  render={() => <ClassroomItem/>}/>
                    <Route path='/students' exact render={() => <Students/>}/>
                    <Route path='/teachers' exact render={() => <Teachers/>}/>
                    <Route path='/moderators' exact render={() => <Moderators/>}/>
                    <Route path='/dialogs/:classId?' render={() => <DialogsPageContainer/>}/>
                    <Route path='/tasks' exact render={() => <TasksPageContainer/>}/>
                    <Route path='/tasks/addTasks' render={() => <AddTasks/>}/>
                    <Route path='/tasks/showTasks' exact render={() => <ShowTasks/>}/>
                    <Route path='/tasks/showTasks/:taskId?' render={() => <TaskItemContainer/>}/>
                    <Route path='/tasks/showTasksAfterCheck/:homeworkId?' render={() => <TaskCheckingInfoContainer/>}/>
                    <Route path='/tasks/checkTasks' exact render={() => <CheckTasks/>}/>
                    <Route path='/tasks/checkTasks/:tasksId?' render={() => <CheckingTasksContainer/>}/>
                    <Route path='/journal/:classId?' render={() => <JournalPageContainer/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
