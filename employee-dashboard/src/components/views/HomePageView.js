

import { Link } from 'react-router-dom';
import {CButton, CBadge} from "@coreui/react";



const HomePageView = () => {
  return (
    <div>
      <h1>Employee Management System</h1>
      {/*<Link to={'/homepage'} > Homepage </Link>*/}
      <Link to={'/employees'} >
          <CButton variant="outline">
          View Employees
          </CButton>
      </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={'/tasks'} >
          <CButton variant="outline">
              View Tasks
          </CButton>
      </Link>

    </div>
  );    
}




export default HomePageView;
