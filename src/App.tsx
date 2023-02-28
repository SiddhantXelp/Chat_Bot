<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Widget from './pages/Widget/Widget';
import Responses from "./pages/Response/Responses";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> 16cdb631dccb871207f4597707a2253a64344a50

import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Responses from "./pages/Response/Responses";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./pages/Widget/Widget";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="flex max-w-[100%]  ">
        <Sidebar />
        {/* <Navbar/> */}
        <div className="min-w-[85%]  ">
          <Navbar />
          {/* home container */}

<<<<<<< HEAD
    <div className="flex max-w-[100%]  ">
    <Sidebar/>
    {/* <Navbar/> */}
    <div className="min-w-[85%]   ">
      <Navbar/>
      {/* home container */}
    
      <Routes >
            <Route path = "/widget" element = {<Widget/>}/> 
            <Route path = "/profile" element = {<Profile/>}/> 
            <Route path="/Responses" element={<Responses />} />

            </Routes>

    </div>
    </div>
    
=======
          <Routes>
            <Route path="/widget" element={<Widget />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Responses" element={<Responses />} />
          </Routes>
        </div>
      </div>
>>>>>>> 16cdb631dccb871207f4597707a2253a64344a50
    </BrowserRouter>
  );
}

export default App;
