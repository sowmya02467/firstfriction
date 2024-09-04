import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "./Components/Community";
import Homepage from "./Components/Homepage";
import Incubation from "./Components/Incubation";
import Navbar from "./Components/Navbar";
import Courses from "./Components/Courses";
import Signup from "./Components/Signup";
import Projects from "./Components/Projects";
import Header from "./Components/Header";
import NewHomepage from "./Components/NewHomepage";

function App() {
  return (
    <div>
   
        <div>
          {/* <Header /> */}
          <Routes>
            {/* <Route path="/" element={<Homepage />} /> */}
                    <Route path="/" element={<NewHomepage />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Incubation" element={<Incubation />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
 
    </div>
  )
}

export default App;
