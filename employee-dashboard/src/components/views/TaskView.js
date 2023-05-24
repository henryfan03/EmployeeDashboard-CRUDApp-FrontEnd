import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <h1>Description: {task.description}</h1>
      <h2>Priority: {task.priority}</h2>
      {task.employee ? <h3>Assignee: {task.employee.firstname + " " + task.employee.lastname}</h3>: <h3>Not currently assigned</h3>}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;