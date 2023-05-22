import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { fetchEmployeeThunk, editEmployeeThunk, fetchAllEmployeesThunk  } from '../../store/thunks';


/*
IMPORTANT: comments regarding implementation details!!
=====================================================
You'll see that we have two ways of interacting with the UI
in order to change the employee's employee

The dropdown menu is straighforward, it's pretty much the same 
as having the input field for the employeeId but allows us
to actually see the available insutrctors as well as their names, 
not just their IDs. We did have to connect to the allEmployees state
from the Redux store, as well as fetchAllEmployees in componentDidMount().
This was done so we could get the other employees in the database.
We filter out the current employee from the array at the beginning of
the render function, and use this array to populate the dropdown menu
options. Because it's part of the form, we don't need to modify the 
handleSubmit function. On redirect to the EmployeeView we will see the 
updates.

You will see below the form there is another part of the UI that is
also changing the current employee's employee. This structure is similar
to how changing assigned employees is done in the InstrutcorView. There is
a slight drawback to using this approach in this context. When we perform
an EDIT_COURSE action (initiated by calling the editEmployeeThunk), this action
is sent to the allEmployees reducer, not the employee reducer. For that reason,
we will not see the updates in the single employee view unless there is another 
call to the fetchEmployeeThunk. This is done once when we redirect after form
submission, which is why the data is shown without needing to refresh. 
If we want that same functionality within the container, we need to make
a call to fetchEmployee after each editEmployee. We see that in the onClick
functionality of the buttons controlling that portion of the UI. 

*/

class EditEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            department: "None",
            redirect: false,
            redirectId: null,
            error: ""
        };
    }

    componentDidMount() {
        //getting employee ID from url
        this.props.fetchEmployee(this.props.match.params.id);
        this.props.fetchEmployees();
        this.setState({
            firstname: this.props.employee.firstname,
            lastname: this.props.employee.lastname,
            department: this.props.employee.department
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // handleSelectChange = event => {
    //     //handle change for the dropdown menu
    //     //want to set the employeeId based on the selected choice
    //     //when the form gets submitted, this is how we can change
    //     //assigned employee without having to manually enter in the
    //     //employeeId like before
    //     if (event.target.value === "staff") {
    //         this.setState({employeeId:null});
    //     } else {
    //         this.setState({employeeId: event.target.value})
    //     }
    // }

    handleSubmit = event => {
        event.preventDefault();
        //implementing form validation
        if (this.state.firstname === "") {
            this.setState({error: "Error: first name cannot be empty"});
            return;
        }

        if (this.state.lastname === "") {
            this.setState({error: "Error: last name cannot be empty"});
            return;
        }

        //get new info for employee from form input
        let employee = {
            id: this.props.employee.id,
            // description: this.state.description,
            // priority: this.state.priority,
            // employeeId: this.state.employeeId
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department
        };

        this.props.editEmployee(employee);

        this.setState({
            redirect: true,
            redirectId: this.props.employee.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});

    }

    render() {
        let { employee, allEmployees, editEmployee, fetchEmployee} = this.props;
        let assignedEmployee = employee.employeeId;

        let otherEmployees = allEmployees.filter(employee => employee.id!==assignedEmployee);

        // go to single employee view of the edited employee
        if(this.state.redirect) {
            return (<Redirect to={`/employees/${this.state.redirectId}`}/>)
        }

        return (
            <div>
                <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
                    <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
                    <input type="text" name="firstname" value={this.state.firstname || ''} placeholder={employee.firstname} onChange ={(e) => this.handleChange(e)}/>
                    <br/>

                    <label style= {{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
                    <input type="text" name="lastname" value={this.state.lastname || ''} placeholder={employee.lastname} onChange ={(e) => this.handleChange(e)}/>
                    <br/>

                    <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
                    <input type="text" name="department" value={this.state.department || 'None'} placeholder={employee.department} onChange={(e) => this.handleChange(e)}/>
                    <br/>

                    {/*<select onChange={(e) => this.handleSelectChange(e)}>*/}
                    {/*    {employee.employee!==null ?*/}
                    {/*        <option value={employee.employeeId}>{employee.employee.firstname+" (current)"}</option>*/}
                    {/*        : <option value="staff">Staff</option>*/}
                    {/*    }*/}
                    {/*    /!*{otherEmployees.map(employee => {*!/*/}
                    {/*    /!*    return (*!/*/}
                    {/*    /!*        <option value={employee.id} key={employee.id}>{employee.firstname}</option>*!/*/}
                    {/*    /!*    )*!/*/}
                    {/*    /!*})}*!/*/}
                    {/*    {employee.employee!==null && <option value="staff">Staff</option>}*/}
                    {/*</select>*/}

                    <button type="submit">
                        Submit
                    </button>

                </form>
                { this.state.error !=="" && <p>{this.state.error}</p> }

                {/*{employee.employeeId !== null ?*/}
                {/*    <div> Current employee:*/}
                {/*        <Link to={`/employee/${employee.employeeId}`}>{employee.employee.firstname}</Link>*/}
                {/*        <button onClick={async () => {await editEmployee({id:employee.id, employeeId: null});  fetchEmployee(employee.id)}}>Unassign</button>*/}
                {/*    </div>*/}
                {/*    // : <div> No employee currently assigned </div>*/}
                {/*}*/}

                {/*<div> Other employees*/}
                {/*    {otherEmployees.map(employee => {*/}
                {/*        return (*/}
                {/*            <div key={employee.id}>*/}
                {/*                <Link to={`/employee/${employee.id}`}>*/}
                {/*                    <h4>{employee.firstname}</h4>*/}
                {/*                </Link>*/}
                {/*                <button onClick={async() => {await editEmployee({id:employee.id, employeeId: employee.id}); fetchEmployee(employee.id)}}>Assign this employee</button>*/}
                {/*            </div>*/}
                {/*        )})*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
        employee: state.employee,
        allEmployees: state.allEmployees
    };
};

const mapDispatch = (dispatch) => {
    return({
        editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
        fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
        fetchEmployees: () => dispatch(fetchAllEmployeesThunk()),

    })
}

export default connect(mapState, mapDispatch)(EditEmployeeContainer);