import "./App.css";

//Router
import { Switch, Route, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

//Components
import {
    HomePageContainer,
    EmployeeContainer,
    TaskContainer,
    AllEmployeesContainer,
    AllTasksContainer,
    NewTaskContainer,
    EditTaskContainer,
    NewEmployeeContainer,
    EditEmployeeContainer
} from './components/containers';

import { CNav, CNavItem, CNavLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
// import "../node_modules/@coreui/coreui/scss/coreui";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
    <div className="App">
        <CNav>
            <CNavItem>
                <CNavLink href="/">
                    Homepage
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="/employees">
                    Employees
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="/tasks">
                    Tasks
                </CNavLink>
            </CNavItem>
        </CNav>
        <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route exact path="/employees" component={AllEmployeesContainer} />
            <Route exact path="/employees/:id" component={EmployeeContainer} />
            <Route exact path="/tasks" component={AllTasksContainer} />
            <Route exact path="/newtask" component={NewTaskContainer} />
            <Route exact path="/task/:id" component={TaskContainer} />
            <Route exact path="/edittask/:id" component={EditTaskContainer} />
            <Route exact path="/newemployee" component={NewEmployeeContainer} />
            <Route exact path="/editemployee/:id" component={EditEmployeeContainer} />
        </Switch>
    </div>
    );
}

export default App;