import './Sass/App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import EventList from './components/Events-List';
import CreateExercise from './components/Create-Exercise';


function App() {
  return (
    <Router>
      <div>
          <Nav />

        <br />
        <div className='wrapper'>
          <Routes>
            <Route path="/" exact element={<EventList />} />
            {/* <Route path="/edit/:id" element={<EditExercise />} /> */}
            <Route path="/create" element={<CreateExercise />} />
          {/* <Route path="/user" element={<CreateUser />} /> */}
          </Routes>
        </div>
      </div>
    </Router>    
  );
}

export default App;
