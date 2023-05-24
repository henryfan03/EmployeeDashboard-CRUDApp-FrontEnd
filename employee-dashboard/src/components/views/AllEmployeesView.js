import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {CButton, CAlert} from "@coreui/react";

const AllEmployeesView = (props) => {
  // let {employees, deleteEmployee} = props;
  // if (!employees.length) {
  if (!props.employees.length) {
    return (
        <div>
            {/*<p>There are no employees.</p>*/}
            <CAlert color="warning">
                There are currently no employees! You can add some with the button below.
            </CAlert>
            <Link to={`/newemployee`}>
                <CButton variant="outline">
                    Add New Employee
                </CButton>
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
              <CButton variant="outline" color="danger" onClick={() => props.deleteEmployee(employee.id)}>
                  Remove Employee
              </CButton>
              <br/>
              <br/>
        </div>
        );
      })}
        <br/>
      <Link to={`/newemployee`}>
          <CButton variant="outline">
              Add New Employee
          </CButton>
      </Link>
    </div>
  );
};

// AllEmployeesView.propTypes = {
//   allEmployees: PropTypes.array.isRequired,
// };

export default AllEmployeesView;