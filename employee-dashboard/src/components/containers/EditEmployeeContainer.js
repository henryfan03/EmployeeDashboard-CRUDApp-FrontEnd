import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { CButton, CFormFloating, CFormLabel, CFormInput, CFormText, CForm } from '@coreui/react';

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
                <CForm style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
                    <CFormLabel htmlFor="exampleFormControlInput1">First Name</CFormLabel>
                    <CFormInput type="text" name="firstname" value={this.state.firstname || ''} placeholder={employee.firstname} onChange ={(e) => this.handleChange(e)} />
                    <CFormText component="span" id="exampleFormControlInputHelpInline">
                        Cannot be empty.
                    </CFormText>
                    <br/>
                    <br/>
                    <CFormLabel htmlFor="exampleFormControlInput1">Last Name</CFormLabel>
                    <CFormInput type="text" name="lastname" value={this.state.lastname || ''} placeholder={employee.lastname} onChange ={(e) => this.handleChange(e)} />
                    <CFormText component="span" id="exampleFormControlInputHelpInline">
                        Cannot be empty.
                    </CFormText>
                    <br/>
                    <br/>
                    <CFormLabel htmlFor="exampleFormControlInput1">Department</CFormLabel>
                    <CFormInput type="text" name="department" value={this.state.department || 'None'} placeholder={employee.department} onChange={(e) => this.handleChange(e)} />
                    <br/>
                    <br/>

                    <CButton variant="outline" type="submit">
                        Submit
                    </CButton>
                </CForm>
                {/*<form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>*/}
                {/*    /!*<CFormInput type="email" id="floatingInput" floatingClassName="mb-3" floatingLabel="Email address" placeholder="name@example.com" />*!/*/}
                {/*    /!*<CFormInput type="password" id="floatingPassword" floatingLabel="Password" placeholder="Password" />*!/*/}

                {/*    <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>*/}
                {/*    <input type="text" name="firstname" value={this.state.firstname || ''} placeholder={employee.firstname} onChange ={(e) => this.handleChange(e)}/>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <label style= {{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>*/}
                {/*    <input type="text" name="lastname" value={this.state.lastname || ''} placeholder={employee.lastname} onChange ={(e) => this.handleChange(e)}/>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>*/}
                {/*    <input type="text" name="department" value={this.state.department || 'None'} placeholder={employee.department} onChange={(e) => this.handleChange(e)}/>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <CButton variant="outline" type="submit">*/}
                {/*        Submit*/}
                {/*    </CButton>*/}

                {/*</form>*/}
                { this.state.error !=="" && <p>{this.state.error}</p> }

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