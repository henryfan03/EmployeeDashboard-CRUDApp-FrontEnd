import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
    HomePageContainer,
    EmployeeContainer,
    TaskContainer,
    AllEmployeesContainer,
    AllTasksContainer,
    NewTaskContainer,
    EditTaskContainer,
    // NewEmployeeContainer,
    // EditEmployeeContainer
} from './components/containers';


const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePageContainer} />
                <Route exact path="/employees" component={AllEmployeesContainer} />
                <Route exact path="/employees/:id" component={EmployeeContainer} />
                <Route exact path="/tasks" component={AllTasksContainer} />
                <Route exact path="/newtask" component={NewTaskContainer} />
                <Route exact path="/tasks/:id" component={TaskContainer} />
                <Route exact path="/edittask/:id" component={EditTaskContainer} />
                {/*<Route exact path="/newemployee" component={NewEmployeeContainer} />*/}
                {/*<Route exact path="/editemployee/:id" component={EditEmployeeContainer} />*/}
            </Switch>
        </div>
    );
}

export default App;