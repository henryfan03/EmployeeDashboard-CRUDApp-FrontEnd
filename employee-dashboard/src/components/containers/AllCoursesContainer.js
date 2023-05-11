import { Component } from 'react';
import { connect } from 'react-redux';


import { 
  fetchAllTasksThunk,
  deleteTaskThunk
} from '../../store/thunks';

import AllCoursesView from '../views/AllCoursesView';

class AllCoursesContainer extends Component {
    componentDidMount() {
      this.props.fetchAllCourses();
    }
    render(){
        return(
            <div>
                <AllCoursesView 
                  courses={this.props.allCourses}
                  deleteCourse={this.props.deleteCourse}   
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCourses: state.allCourses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCourses: () => dispatch(fetchAllTasksThunk()),
    deleteCourse: (courseId) => dispatch(deleteTaskThunk(courseId)),
  };
};

export default connect(mapState, mapDispatch)(AllCoursesContainer);