import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Widget from "./pages/Widget/Widget";

import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <div className="flex max-w-[100%]  ">
        <Sidebar />
        {/* <Navbar/> */}
        <div className="min-w-[85%] ">
          <Navbar />
          {/* home container */}

          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/widget" element={<Widget />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
