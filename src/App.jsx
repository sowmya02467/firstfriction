// App.js (without Router)
import { Route, Routes } from 'react-router-dom';
import NewCommunity from './Components/NewCommunity';
import NewIncubation from './Components/NewIncubation';
import NewHomepage from './Components/NewHomepage';
import Aboutus from './Components/Aboutus';
import NewCourses from './Components/NewCourses';
import Signup from './Components/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewHomepage />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/NewCommunity" element={<NewCommunity />} />
      <Route path="/NewIncubation" element={<NewIncubation />} />
      <Route path="/Newcourses" element={<NewCourses />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
