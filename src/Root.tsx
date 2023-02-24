import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Widget from "./pages/Widget/Widget";
import Responses from "./pages/Response/Responses";
import Profile from "./pages/Profile/Profile";
// import Dashboard from "./pages/Dashboard/Dashboard";

function Root() {
  return (
    <>
    <div className="flex max-w-[100%]  ">
        <Sidebar />
        <div className="min-w-[85%] ">
          <Navbar />
          <Routes>
            <Route path="/widget" element={<Widget />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/responses" element={<Responses />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
      </div>
      </div>
      </>
  );
}

export default Root;
