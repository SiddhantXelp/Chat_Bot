<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Profile/SignIn";
import Signup from "./pages/Profile/Signup";
import Root from "./Root";
import Widget from "./pages/Widget/Widget";
import Responses from "./pages/Response/Responses";
import Profile from "./pages/Profile/Profile";
import TableView from "./pages/Response/TableView"
=======
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Widget from './pages/Widget/Widget';
import Responses from "./pages/Response/Responses";


import Profile from "./pages/Profile/Profile";

// import logo from './logo.svg';
// import './App.css';
>>>>>>> development

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/root" element={<Root />}>
          <Route path="/root/widget" element={<Widget />} />
          <Route path="/root/profile" element={<Profile />} />
          <Route path="/root/responses" element={<Responses />} />
          <Route path="/root/tableview" element={<TableView />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
