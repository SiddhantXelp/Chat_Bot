import React, { useEffect, useRef, useState } from "react";

// import Popup from "reactjs-popup";
// import { PostAddSharp } from "@mui/icons-material";
import axios from "axios";

export default function ResponsePreview() {
  const [addData, setAddData] = useState(false);
  const [responses, setResponses] = useState<any[]>([]);
  const [flag, setFlag] = useState("9593f6dc-7731-493b-b761-bb3eeebc1867");
  // const prevData: any = useRef();
  const [prevstate, setPrevstate]: any = useState([]);
  //const [game, setGame] = useState(false);
  const [answer, setAnswer] = useState<any[]>([]);
  useEffect(() => {
    // console.count("hi");
    let flag1 = 1;
    // prevData.current?.scrollIntoView({
    //   behaviour: "smooth",
    //   block: "nearest",
    //   inline: "start",
    // });
    // setPrevstate([...prevstate, ...responses]);
    // console.log("prevstate=>", prevstate);

    const url: string = "http://localhost:4011/userRequest/" + flag;
    // console.log(url);
    axios
      .get(url)
      .then(function (response) {
        // handle success
        // console.log("response is =>", response.data);
        // setResponses([response.data.data]);

        setPrevstate([...prevstate, response.data[0]]);
        // console.log("prevstate=>", prevstate);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [flag]);

  const IdGenerator: any = (id: any, title: string) => {
    answer.push(title);
    setAnswer(answer);
    // setPrevstate([...prevstate]);
    // console.log("answer=>", answer);
    //setGame(true);
    //console.log("game=>", game);
    // console.log("idd", id);
    setFlag(id);
    // console.log("flag=>", flag);
  };
  //console.log("prevData=>", prevstate);
  return (
    <>
      <div onClick={() => setAddData(!addData)}>
        <button className="absolute bg-red-500 hover:bg-red-700 top-20 right-5 text-white font-bold py-1 px-4 rounded-full">
          Test Your Bot
        </button>
      </div>

      {addData ? (
        <div className="absolute right-8 mt-[8%]   w-[350px] h-[100px]  rounded-[15px] bg-indigo-700 ">
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
              <p className=" text-lg  font-normal text-white">Botname</p>
              <p className="text-black-500  font-normal text-md text-white">
                online
              </p>
            </div>
          </div>
          {/* border nav */}

          <div className="absolute overflow-y-scroll bg-white dark:bg-slate-600  w-[100%] h-[350px]">
            {prevstate &&
              prevstate.map((response: any, i: number) => (
                <>
                  <div className="mt-[7%] ml-[5%]">
                    {/* <p className="text-xl text-base">
                        <strong>{response.title}</strong>
                      </p> */}
                    <p className="text-xl text-base dark:text-white">
                      <strong>{response ? response.description : "no child"}</strong>
                    </p>
                  </div>
                  {/* <div className=" bg-white-500 max-w-[50%] rounded-[15px] p-2  my-2 mx-2 border-slate-500 border-[1.5px]">
                    <span className="text-base  font-normal">
                      {response.title}
                    </span>
                  </div> */}

                  {response?.children.map((child: any) => (
                    <div
                      onClick={() => IdGenerator(child.uuid, child.title)}
                      className="flow-root bg-indigo-700 max-w-[50%] hover:bg-gray-200  rounded-[8px] p-2  my-3 mx-3 border-slate-500 border-[1.9px] cursor-pointer"
                    >
                      <span
                        // onClick={IdGenerator(child._id)}
                        className="text-white pointer-events-auto  cursor-pointer font-normal"
                      >
                        {child ? child.title : null}
                      </span>
                    </div>
                  ))}
                  <div className="mt-[20px]"></div>
                  {answer[i] ? (
                    <div className="flow-root float-right ml-[5%] bg-white-700 max-w-[50%] rounded-[8px] p-2  border-slate-500  border-[1.9px]">
                      <div
                        // onClick={IdGenerator(child._id)}
                        className="text-indigo-700 pointer-events-auto  cursor-pointer font-extrabold"
                      >
                        {answer[i]}
                      </div>
                    </div>
                  ) : null}
                  <div className="mb-[100px]"></div>
                  {/* <div className="float-right ml-[5%] bg-red-500">
                    <span
                      // onClick={IdGenerator(child._id)}
                      className="text-base pointer-events-auto hover:bg-gray-200 cursor-pointer font-normal"
                    >
                      {answer}
                    </span>
                  </div> */}
                </>
              ))}
          </div>

          {/* <div className=" text-left text-center bg-white-500 max-w-[50%] rounded-[15px] p-2  my-2 mx-2 border-slate-500 border-[1.5px]">
              <span className="text-base  font-normal">incoming message</span>
            </div> */}
          {/* <div className="text-center bg-white-500 max-w-[50%] rounded-[15px] p-2 my-2 mx-2 border-slate-500 border-[1.5px] float-right ">
              <span className="text-base  font-normal">sent msg</span>
            </div> */}
          <div className="bg-white mt-[100%] h-[50px]  ">
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
            <p className="bg-white text-center text-slate-500 text-xs pt-[20px] rounded-[15px]">
              Powered by <b className="text-indigo-700 text-xs">Chatbot</b>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
