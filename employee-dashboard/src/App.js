// import logo from './logo.svg';
import {Routes, Route, Link} from "react-router-dom";
import './App.css';

function App(props) {
  return (
      <div className="App">
        <div>
          <h1>Hello, world!</h1>
          <Routes>
            {/*<Route index element={<Home/>}/>;*/}
            {/*<Route path="about" element={<About/>}/>;*/}
          </Routes>
        </div>
      </div>
  );
}

export default App;
