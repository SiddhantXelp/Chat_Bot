import React, { useEffect, useState } from "react";

import Popup from "reactjs-popup";
import { PostAddSharp } from "@mui/icons-material";
import axios from "axios";

export default function ResponsePreview() {
  const [addData, setAddData] = useState(false);
  const [responses, setResponses] = useState<any[]>([]);
  const [flag, setFlag] = useState("0.13824774065670975");
  useEffect(() => {
    console.count("hi");
    const url: string = "http://localhost:4011/userRequest/" + flag;
    console.log(url);
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log("response is =>", response.data);
        setResponses([response.data.data]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [flag]);

  const IdGenerator: any = (id: any) => {
    console.log("idd", id);
    setFlag(id);
    console.log("flag=>", flag);
  };

  return (
    <>
      <div onClick={() => setAddData(!addData)}>
        <button className="absolute bg-red-500 hover:bg-red-700 top-20 right-5 text-white font-bold py-2 px-4 rounded-full">
          Test Your Bot
        </button>
      </div>
      {addData ? (
        <div className="bg-red-500 ">
          <div className="absolute bg-red-500 right-8 mt-[10%] mr-[1%] dark:bg-black w-[350px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-[15px] lg:rounded-[15px] ">
            {/* </div><div className="absolute top-155 right-8 mt-[10%] mr-[1%] dark:bg-black w-[350px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-[15px] lg:rounded-[15px] leading-normal overflow-hidden"> */}
            <div className="flex ">
              <div className="flex items-center m-[15px]">
                <img
                  className="w-[50px] h-[50px] rounded-[50%]"
                  src="https://uselooper.com/assets/images/avatars/profile.jpg"
                  alt="img"
                />
              </div>
              <div className="m-[15px]">
                <p className=" text-lg  font-normal ">botname</p>
                <p className="text-black-500  font-normal text-md">online</p>
              </div>
            </div>
            {responses &&
              responses.map((response) => (
                <>
                  <div className="ml-[5%]">
                    <p className="text-xl text-base">
                      <strong>{response.description}</strong>
                    </p>
                  </div>
                  {/* <div className=" bg-white-500 max-w-[50%] rounded-[15px] p-2  my-2 mx-2 border-slate-500 border-[1.5px]">
                    <span className="text-base  font-normal">
                      {response.title}
                    </span>
                  </div> */}
                  {response.children.map((child: any) => (
                    <div
                      onClick={() => IdGenerator(child.uuid)}
                      className="bg-orange-500 max-w-[50%] rounded-[8px] p-2  my-3 mx-3 border-slate-500 border-[1.9px]"
                    >
                      <span
                        // onClick={IdGenerator(child._id)}
                        className="text-base pointer-events-auto hover:bg-gray-200 cursor-pointer font-normal"
                      >
                        {child.title}
                      </span>
                    </div>
                  ))}
                </>
              ))}
            {/* <div className=" text-left text-center bg-white-500 max-w-[50%] rounded-[15px] p-2  my-2 mx-2 border-slate-500 border-[1.5px]">
              <span className="text-base  font-normal">incoming message</span>
            </div> */}
            {/* <div className="text-center bg-white-500 max-w-[50%] rounded-[15px] p-2 my-2 mx-2 border-slate-500 border-[1.5px] float-right ">
              <span className="text-base  font-normal">sent msg</span>
            </div> */}

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
              Powered by <b className="text-indigo-700 text-xs">Chatbot</b>
            </p>
            {/* <Popup
              trigger={<button> Test Your Bot</button>}
              position="right center"
              className="absolute bg-red-500 hover:bg-red-700 top-20 right-5 text-white font-bold py-2 px-4 rounded-full"
            >
              <div className="text-red-500">
                <div className="absolute top-155 right-8 mt-[10%] mr-[1%] dark:bg-black w-[350px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-[15px] lg:rounded-[15px] leading-normal overflow-hidden">
                  <div className="flex ">
                    <div className="flex items-center m-[15px]">
                      <img
                        className="w-[50px] h-[50px] rounded-[50%]"
                        src="https://uselooper.com/assets/images/avatars/profile.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="m-[15px]">
                      <p className=" text-lg  font-normal ">botname</p>
                      <p className="text-black-500  font-normal text-md">
                        online
                      </p>
                    </div>
                  </div>
                  <div className=" text-left text-center bg-white-500 max-w-[50%] rounded-[15px] p-2  my-2 mx-2 border-slate-500 border-[1.5px]">
                    <span className="text-base  font-normal">
                      incomming msg
                    </span>
                  </div>
                  {responses.map((response) => (
                    <div key={response.uuid}>
                      <div className="text-center bg-white-500 max-w-[50%] rounded-[15px] p-2 my-2 mx-2 border-slate-500 border-[1.5px] float-right ">
                        <span className="text-base  font-normal">sent msg</span>
                      </div>
                    </div>
                  ))}

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
            </Popup> */}
          </div>
        </div>
      ) : null}
    </>
  );
}
