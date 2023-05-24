import { Link } from "react-router-dom";
import {CButton} from "@coreui/react";


const EmployeeView = (props) => {
  const {employee, editTask, allTasks} = props;
  let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
  let availableTasks = allTasks.filter(task => task.employeeId!==employee.id);
  
  return (
    <div>      
      <h1>{employee.firstname}</h1>
      <h3>{employee.department}</h3>
      <Link to={`/editemployee/${employee.id}`}>
          <CButton variant="outline">
              Edit employee information
          </CButton>
      </Link>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned tasks:
        {assignedTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.description}</h4>
            </Link>
                <CButton color="danger" onClick={() => editTask({id:task.id, employeeId: null})}>
                    X
                </CButton>
            </div>
          );
        })}</div>
        <div>Available tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.description}</h4>
            </Link>
                <CButton onClick={() => editTask({id:task.id, employeeId: employee.id})}>
                    +
                </CButton>
            </div>
          );
        })}</div>

      </div>

  
    </div>
  );

};

export default EmployeeView;