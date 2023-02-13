import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BuildIcon from '@mui/icons-material/Build';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Outlet, Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="min-w-[15%] min-h-screen border border-[2px] border-r-zinc-200 border-t-0 ">
        {/* top */}
      <div className="h-[60px]  flex items-center justify-center  ">
        <span className="text-[22px] font-bold text-[#7451f8]">ChatBot</span>
        </div>
     <hr className='h-0 border border-zinc-200 border-1'/>
      {/* Center */}
      <div className="pl-[40px]">

        <ul className="m-0 p-0" >
       <p className="text-[#999] font-bold text-[13px] mt-[15px] mb-[5px]">MAIN</p>

            <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
                <DashboardIcon className="text-[18px] text-[#7451f8]"/>
                <span className="text-[20px] text-[#888] font-normal ml-[20px]">Dashboard</span>
            </li>

            <p className="text-[#999] font-bold text-[13px] mt-[15px] mb-[5px]">SERVICES</p>
            <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
            <Link to="/Widget">
                <StyleIcon className="text-[18px] text-[#7451f8]"/>
                <span className="text-[20px] text-[#888] font-normal ml-[20px]">Widget</span>
                </Link>
            </li>

            <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
                <PersonIcon className="text-[18px] text-[#7451f8]"/>
                <span className="text-[20px] text-[#888] font-normal ml-[20px]">Users</span>
            </li>

            <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
                <ShoppingBagIcon className="text-[18px] text-[#7451f8]"/>
                <span className="text-[20px] text-[#888] font-normal ml-[20px]">Responses</span>
            </li>

            <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
                <NotificationsNoneOutlinedIcon className="text-[28px] text-[#7451f8]"/>
                <span className="text-[20px] text-[#888] font-normal ml-[20px]">Activity Monitor</span>
            </li>

            <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
                < BuildIcon className="text-[18px] text-[#7451f8]"/>
                <span className="text-[20px] text-[#888] font-normal ml-[20px]">Settings</span>
            </li>

            <p className="text-[#999] font-bold text-[13px] mt-[15px] mb-[5px]">ADMIN</p>
            <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
            <Link to="/profile">
                <AccountCircleOutlinedIcon className="text-[18px] text-[#7451f8]"/>
                <span className="text-[20px] text-[#888] font-normal ml-[20px]">Profile</span>
                </Link>
            </li>

            <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
                <LogoutOutlinedIcon className="text-[18px] text-[#7451f8]"/>
                <span className="text-[20px] text-[#888] font-normal ml-[20px]">Logout</span>
            </li>
        </ul>
      </div>

      {/* Bottom */}
      <div></div>
    </div>
  )
}

export default Sidebar
