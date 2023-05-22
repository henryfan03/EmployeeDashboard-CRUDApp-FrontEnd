import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  // let {employees, deleteEmployee} = props;
  // if (!employees.length) {
  if (!props.employees.length) {
    return (
        <div>
            <p>There are no employees.</p>
            <Link to={`/newemployee`}>
                <button>Add New Employee</button>
            </Link>
        </div>

    );
  }

  return (
    <div>
      {props.employees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
          <Link to={`/employees/${employee.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{employee.department}</p>
          <button onClick={() => props.deleteEmployee(employee.id)}>Delete</button>
        </div>
        );
      })}
      <Link to={`/newemployee`}>
        <button>Add New Employee</button>
      </Link>
    </div>
  );
};

// AllEmployeesView.propTypes = {
//   allEmployees: PropTypes.array.isRequired,
// };

export default AllEmployeesView;