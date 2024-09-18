

// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NewHomePage from './NewHomePage';
import Aboutus from './Components/Aboutus';
import NewHomepage from './Components/NewHomepage';

function App() {
  return (
    // <BrowserRouter> {/* Nested Router */}
    //   <Routes>
    //     <Route path="/" element={<NewHomepage />} />
    //     <Route path="/Aboutus" element={<Aboutus />} />
    //   </Routes>
    // </BrowserRouter>

    <Aboutus />
    // <NewHomepage />
  );
}

export default App;
