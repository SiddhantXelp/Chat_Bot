import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
    return (
        <div className="h-[61px]  flex items-center text-[15px] text-[#555] border border-b-zinc-200">
            <div className="flex items-center p-[20px] justify-between min-w-[100%]">
                <div className="flex items-center border border-zinc-300 p-[4px] rounded-[10px]  ">
                    <input type="text" className="outline-none bg-transparent min-w-[800px] h-7 my-[2px]  " placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mr-[20px]">
                        <LanguageOutlinedIcon className="text-2"/>
                        English
                    </div>
                    <div className="flex items-center mr-[20px]">
                        <DarkModeOutlinedIcon />
                       
                    </div>
                    <div className="flex items-center mr-[20px]">
                        < FullscreenExitOutlinedIcon/>
                       
                    </div>
                    <div className="flex items-center mr-[20px]">
                        < ChatBubbleOutlineOutlinedIcon/>
                       
                    </div>
                    <div className="flex items-center mr-[20px]">
                        <ListOutlinedIcon/>
                       
                    </div>
                    <div className="flex items-center mr-[20px]">
                    <img className="w-[50px] h-[50px] rounded-[50%]" src="https://uselooper.com/assets/images/avatars/profile.jpg" alt="img" />
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
