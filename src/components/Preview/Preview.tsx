import React, { useState } from "react";

interface Props {
  bubbleIcon: string;
  logo: string;
  iconColor: string;
  userResponseColor: string;
  userResponseBgColor: string;
  welMsgTextColor: string;
  welMsgBgColor: string;
  chatTitleColor: string;
  chatBackground: string;
  screenBackground: string;
  startButtonColor: string;
  titleColor: string;
  headerText: string;
  bubbleBackground: string;
  botName: string;
  description: string;
  headerBackground: string;
  chatHeaderBackground: string;

}
interface Tabs {
  index:number
}
const Preview: React.FC<Props> = (props) => {
  const [openTab, setOpenTab] = useState<Tabs>({index:1});
  console.log("tabindex",openTab)
  return (
    <div className="dark:bg-black min-h-screen">
      {/* <div className="container mx-auto mt-12"> */}
        <div className="flex flex-col items-center justify-center max-w-xl dark:bg-black">
          <ul className="flex space-x-2">
            <li>
              <a
                href="#"
                onClick={() => setOpenTab({index:1})}
                className={`inline-block px-4 py-2 text-black-600 dark:bg-[#888] bg-white rounded-full shadow 
                  ${openTab.index === 1 ? "text-slate-600 bg-blue-500" : ""}
                  `}
              >
                Minimized
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab({index:2})}
                className={` ${
                  openTab.index === 2 ? "bg-blue-500 text-slate-600" : ""
                } inline-block px-4 py-2 text-black-600 dark:bg-[#888] bg-white rounded-full shadow`}
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab({index:3})}
                className={` ${
                  openTab.index === 3 ? "bg-blue-500 text-slate-600" : ""
                } inline-block px-4 py-2 text-black-600 dark:bg-[#888] bg-white rounded-full shadow`}
              >
                Chat
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white dark:bg-black">
            <div className={openTab.index === 1 ? "block" : "hidden"}>
                <div className="dark:bg-black w-[350px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-[15px] lg:rounded-[15px] leading-normal overflow-hidden">
                  <div className="flex flex-col justify-end items-end text-gray-900 font-bold text-xl   w-auto  h-[440px] ">
                      <div className="h-[65px] w-[65px] flex justify-center items-center rounded-full"
                        style={{
                          backgroundColor: props.bubbleBackground,
                        }}
                      >
                        <img
                         src={props.bubbleIcon} style={{ color: props.iconColor }}
                          width="35px"
                          height="35px"
                        />
                      </div>
                  </div>
                </div>
            </div>
            <div className={openTab.index === 2 ? "block" : "hidden"}>
                <div  style={{ backgroundColor: props.screenBackground }} className=" w-[350px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 rounded-[15px] lg:rounded-[15px] leading-normal overflow-hidden">
                  <div
                    style={{ backgroundColor: props.headerBackground }}
                    className=" text-gray-900 font-bold text-xl   w-auto  h-[190px] bottom-0 "
                  >
                    <div className="pt-[160px] pl-10">
                      <img
                        className="inline-block h-[60px] w-[60px] rounded-full ring-2 ring-black "
                        src={props.logo}
                        alt="bot icon"
                      />
                    </div>
                  </div>

                  <p style={{ color: props.headerText }} className=" pl-[40px] pt-10 font-normal ">
                    {props.botName}
                  </p>
                  <p className="text-slate-500 pl-[40px] font-normal text-md">
                    online
                  </p>

                  <p style={{color:props.titleColor}} className=" text-center p-[40px]  font-normal text-md w-[350px]">
                    {props.description}
                  </p>
                  <div className="text-center">
                    <button  style={{ backgroundColor: props.startButtonColor }} className="w-[200px]  text-white font-bold py-2 px-4 rounded-full">
                      Start Chat
                    </button>
                    <p className=" mt-[52px] text-center text-slate-500 text-xs ">
                      Powered by{" "}
                      <b className="text-indigo-700 text-xs">Chatbot</b>
                    </p>
                  </div>
                </div>
            </div>
            <div className={openTab.index === 3 ? "block" : "hidden"}>
                <div className="dark:bg-black w-[350px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-[15px] lg:rounded-[15px] leading-normal overflow-hidden" style={{ backgroundColor: props.chatBackground }} >
                  <div
                    style={{ backgroundColor: props.chatHeaderBackground }}
                    className="flex "
                  >
                    <div className="flex items-center m-[15px]">
                      <img
                        className="w-[50px] h-[50px] rounded-[50%]"
                        src={props.logo}
                        alt="img"
                      />
                    </div>
                    <div className="m-[15px]">
                      <p  style={{ color: props.chatTitleColor }} className=" text-lg  font-normal ">
                        {props.botName}
                      </p>
                      <p className="text-black-500  font-normal text-md">
                        online
                      </p>
                    </div>
                  </div>
                  <div  style={{ backgroundColor: props.welMsgBgColor }} className=" text-left text-center bg-white-500 max-w-[50%] rounded-[15px] p-2  my-2 mx-2 border-slate-500 border-[1.5px]">
                    <span  style={{ color: props.welMsgTextColor }} className="text-base  font-normal">
                      incomming msg
                    </span>
                  </div>
                  <div style={{ backgroundColor: props.userResponseBgColor }} className="text-center bg-white-500 max-w-[50%] rounded-[15px] p-2 my-2 mx-2 border-slate-500 border-[1.5px] float-right ">
                    <span style={{ color: props.userResponseColor }}  className="text-base  font-normal">
                      sent msg
                    </span>
                  </div>

                  <div className="flex pt-[260px]">
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
                  </div>
                  <p className=" mt-[22px] text-center text-slate-500 text-xs ">
                    Powered by{" "}
                    <b className="text-indigo-700 text-xs">Chatbot</b>
                  </p>
                </div>
              </div>
            </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Preview;