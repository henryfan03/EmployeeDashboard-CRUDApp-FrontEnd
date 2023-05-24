import { Link } from "react-router-dom";
import {CButton} from "@coreui/react";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <h1>Description: {task.description}</h1>
      <h2>Priority: {task.priority}</h2>
      {task.employee ? <h3>Assignee: {task.employee.firstname + " " + task.employee.lastname}</h3>: <h3>Not currently assigned</h3>}
      <Link to={`/edittask/${task.id}`}>
          <CButton variant="outline">
              Edit task information
          </CButton>
      </Link>
      <br/>
        <br/>
      <Link to={`/tasks`}>
          <CButton variant="outline">
              View all tasks
          </CButton>
      </Link>
    </div>
  );

};

export default TaskView;