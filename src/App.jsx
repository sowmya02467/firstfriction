import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "./Components/Community";
import Homepage from "./Components/Homepage";
import Incubation from "./Components/Incubation";
import Navbar from "./Components/Navbar";
import Courses from "./Components/Courses";

function App() {
  return (
    <div>
      <BrowserRouter basename="/frictions">
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Incubation" element={<Incubation />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
