import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";


function Root() {
  return (
    <>
    <div className="flex max-w-[100%]  ">
        <Sidebar />
        <div className="min-w-[85%] ">
          <Navbar />
      </div>
      </div>
      <Outlet/>
      </>
  );
}

export default Root;
