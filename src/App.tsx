import { BrowserRouter, Route, Routes } from "react-router-dom";

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

          <Routes>
            <Route path="/widget" element={<Widget />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Responses" element={<Responses />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
