import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchEmployeeThunk,
  fetchAllTasksThunk,
  editTaskThunk
} from "../../store/thunks";

import { InstructorView } from "../views";

class InstructorContainer extends Component {
  componentDidMount() {
    //getting employee ID from url
    this.props.fetchInstructor(this.props.match.params.id);
    this.props.fetchCourses();
  }

  render() {
    return (
      <InstructorView 
        instructor={this.props.instructor}
        editCourse={this.props.editCourse}
        allCourses={this.props.allCourses}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    instructor: state.instructor,
    allCourses: state.allCourses,

  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchEmployeeThunk(id)),
    editCourse: (course) => dispatch(editTaskThunk(course)),
    fetchCourses: () => dispatch(fetchAllTasksThunk()),

  };
};

export default connect(mapState, mapDispatch)(InstructorContainer);