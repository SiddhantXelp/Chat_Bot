import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const Preview = ({poweredBy, bubbleIcon, iconColor, logo, userResponseColor, userResponseBgColor, welMsgTextColor, welMsgBgColor, chatTitleColor, chatBackground, screenBackground, startButtonColor, headerText, botName, description, chatHeaderBackground, headerBackground, bubbleBackground }) => {
    return (
        <>
            <div className=" w-[480px] ">
                <div className="  h-48 lg:h-auto lg:w-48  flex-none bg-cover rounded-t lg:rounded-[15px]  text-center overflow-hidden"></div>

                <Tabs defaultIndex={1} onSelect={index=> console.log(index)} className="dark:bg-black">
                    <TabList>
                        <Tab>Minimized Screen</Tab>
                        <Tab>Welcome Screen</Tab>
                        <Tab>Chat Screen</Tab>
                    </TabList>
                    <TabPanel  className="dark:bg-black">
                        <div className=" min-h-[480px] p-4  flex justify-end items-end" >

                            <div style={{backgroundColor:bubbleBackground}} className="h-[65px] w-[65px] bg-slate-300 flex items-center justify-center rounded-full">


                                <img 
                                 className="w-[22px]"
                                    style={{color: iconColor }}
                                    src={bubbleIcon}
                                  
                                />
                               
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="max-w-sm w-full flex items-center justify-center    lg:max-w-full lg:flex    h-[500px]">
                            :
                            <div style={{ backgroundColor: screenBackground }} className=" w-[350px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400  rounded-[15px] lg:rounded-[15px] leading-normal overflow-hidden">
                                <div style={{ backgroundColor: headerBackground }} className=" text-gray-900 font-bold text-xl   w-auto  h-[190px] bottom-0 ">
                                    <div className="pt-[160px] pl-10">
                                        <img
                                            className="inline-block h-[60px] w-[60px] rounded-full ring-2 ring-black "
                                            src={logo}
                                            alt="bot icon"
                                        />
                                    </div>
                                </div>

                                <p style={{ color: headerText }} className=" pl-[40px] pt-10 font-normal ">{botName}</p>
                                <p className="text-slate-500 pl-[40px] font-normal text-md">
                                    online
                                </p>

                                <p className="text-black-900 text-center p-[40px]  font-normal text-md w-[350px]">
                                    {description}
                                </p>
                                <div className="text-center">
                                    <button style={{ backgroundColor: startButtonColor }} className="w-[200px]  text-white font-bold py-2 px-4 rounded-full">
                                        Start Chat
                                    </button>
                                    <p className=" mt-[50px] mb-1 text-center text-slate-500 text-xs ">
                                        Powered by <b className="text-indigo-700 text-xs">{poweredBy}</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="max-w-sm w-full flex items-center justify-center lg:max-w-full lg:flex h-[500px]">

                            <div style={{ backgroundColor: chatBackground }} className=" w-[350px] max-h-[480px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400  rounded-[15px] lg:rounded-[15px] leading-normal overflow-hidden">
                                <div style={{ backgroundColor: chatHeaderBackground }} className="flex ">
                                    <div className="flex items-center m-[15px] ">
                                        <img
                                            className="w-[50px] h-[50px] rounded-[50%]"
                                            src={logo}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="m-[15px]">
                                        <p style={{ color: chatTitleColor }} className=" text-lg  font-normal ">
                                            {botName}
                                        </p>
                                        <p className="text-black-500  font-normal text-md">online</p>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: welMsgBgColor }} className=" text-left text-center bg-white-500 max-w-[50%] rounded-[15px] p-2  my-2 mx-2 border-slate-500 border-[1.5px] ">
                                    <span style={{ color: welMsgTextColor }} className="text-base  font-normal">
                                        incomming msg
                                    </span>
                                </div>
                                <div style={{ backgroundColor: userResponseBgColor }} className="text-center bg-white-500 max-w-[50%] rounded-[15px] p-2 my-2 mx-2 border-slate-500 border-[1.5px]  float-right ">
                                    <span style={{ color: userResponseColor }} className=" text-base  font-normal">
                                        sent msg
                                    </span>
                                </div>

                                <div className="flex pt-[300px] ">
                                    <div className=" ">
                                        <input
                                            type="text"
                                            className="
              px-3
              py-1.5
              text-base
              bg-white bg-clip-padding
              border-none
              rounded
              transition
              m-0
               focus:border-none focus:outline-none
              "
                                            id="exampleText0"
                                            placeholder="Type your message"
                                        />
                                    </div>
                                    {/* <SendIcon color="primary" className="mt-2 ml-10" /> */}
                                </div>
                                <p className=" mt-[22px]  text-center text-slate-500 text-xs ">
                                    Powered by <b className="text-indigo-700 text-xs">Chatbot</b>
                                </p>
                            </div>
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </>
    )
}

export default Preview
