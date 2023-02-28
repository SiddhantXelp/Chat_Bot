import { Link, Outlet } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BuildIcon from "@mui/icons-material/Build";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StyleIcon from "@mui/icons-material/Style";

const Sidebar = () => {
  return (
    <div className="dark:bg-black fixed min-h-screen border border-[2px] border-r- border-t-0 ">
      {/* top */}
      <div className="h-[60px] dark:bg-[#242526]  flex items-center justify-center  ">
        <span className="text-[22px] font-bold text-[#7451f8] dark:text-[#888]">
          AirBot
        </span>
      </div>
      <hr className="h-0 border border-zinc-200 border-1" />
      {/* Center */}
      <div className="pl-[25px] ">
        <ul className="m-0 p-0">
          <p className="text-[#999] font-bold text-[13px] mt-[15px] mb-[5px]">
            MAIN
          </p>

          <li className="flex items-center p-[5px] hover:bg-[#ece8ff] cursor-pointer">
            <DashboardIcon className="text-[18px] dark:text-[#555] text-[#7451f8]" />
            <span className="text-[18px] text-[#888] font-normal ml-[20px]">
              Dashboard
            </span>
          </li>

          <p className="text-[#999] font-bold text-[13px] mt-[15px] mb-[5px]">
            SERVICES
          </p>
          <Link to="/Widget">
            <li className="flex items-center p-[5px] hover:bg-[#ece8ff] cursor-pointer">

              <StyleIcon className="text-[18px] dark:text-[#555] text-[#7451f8]" />
              <span className="text-[18px] text-[#888] font-normal ml-[20px]">
                Widget
              </span>
            </li>
          </Link>

          <li className="flex items-center p-[5px] hover:bg-[#ece8ff] cursor-pointer">
            <PersonIcon className="text-[18px] dark:text-[#555] text-[#7451f8]" />
            <span className="text-[18px] text-[#888] font-normal ml-[20px]">
              Users
            </span>
          </li>
          <Link to="/Responses">
          <li className="flex items-center p-[5px] hover:bg-[#ece8ff] cursor-pointer">
            <ShoppingBagIcon className="text-[18px] dark:text-[#555] text-[#7451f8]" />
            <span className="text-[18px] text-[#888] font-normal ml-[20px]">Responses</span>
          </li>
          </Link>
          <li className="flex items-center p-[5px] hover:bg-[#ece8ff] cursor-pointer">
            <NotificationsNoneOutlinedIcon className="text-[28px] dark:text-[#555] text-[#7451f8]" />
            <span className="text-[18px] text-[#888] font-normal ml-[20px]">
              Activity Monitor
            </span>
          </li>

          <li className="flex items-center p-[5px] hover:bg-[#ece8ff] cursor-pointer">
            < BuildIcon className="text-[18px] dark:text-[#555] text-[#7451f8]" />
            <span className="text-[18px] text-[#888] font-normal ml-[20px]">Settings</span>
          </li>

          <p className="text-[#999] font-bold text-[13px] mt-[15px] mb-[5px]">ADMIN</p>
          <li className="flex items-center p-[5px] hover:bg-[#ece8ff] cursor-pointer">
            <Link to="/profile">
              <AccountCircleOutlinedIcon className="text-[18px] dark:text-[#555] text-[#7451f8]" />
              <span className="text-[18px] text-[#888] font-normal ml-[20px]">
                Profile
              </span>
            </Link>
          </li>

          <li className="flex items-center p-[5px] hover:bg-[#ece8ff] cursor-pointer">
            <LogoutOutlinedIcon className="text-[18px] dark:text-[#555] text-[#7451f8]" />
            <span className="text-[18px] text-[#888] font-normal ml-[20px]">
              Logout
            </span>
          </li>
        </ul>
      </div>

      {/* Bottom */}
      <div></div>
    </div>
  );
};

export default Sidebar;
