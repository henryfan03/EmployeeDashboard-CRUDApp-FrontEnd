import { Link } from "react-router-dom";
import {CButton, CAlert} from "@coreui/react";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  //tasks = [{id: 300, description: "hello"}]
  if (!tasks.length) {
    return (
    <div>
      {/*<p>There are no tasks.</p>*/}
        <CAlert color="warning">
            There are currently no tasks! You can add some with the button below.
        </CAlert>
      <Link to={`/newtask`}>
          <CButton variant="outline">
              Add New Task
          </CButton>
        {/*<button>Add New Task</button>*/}
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h1>{description}</h1>
          </Link>
            <CButton variant="outline" color="danger" onClick={() => deleteTask(task.id)}>
              Delete Task
            </CButton>
          </div>
        );
      }
      )}
      <br/>
      <br/>
      <Link to={`/newtask`}>
        <CButton variant="outline">
          Add New Task
        </CButton>
      </Link>
    </div>
  );
};


export default AllTasksView;