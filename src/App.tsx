import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Widget from "./pages/Widget/Widget";
import Responses from "./pages/Responses/Responses";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Profile/Signup";
import SignIn from "./pages/Profile/SignIn";

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
            <Route path="/responses" element={<Responses />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
