import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Widget from './pages/Widget/Widget';
import Responses from "./pages/Response/Responses";


import Profile from "./pages/Profile/Profile";

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
