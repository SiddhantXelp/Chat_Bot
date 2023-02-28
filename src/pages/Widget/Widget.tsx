import React, { useEffect, useRef, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import Preview from "../../components/Preview/Preview";
import { SketchPicker } from "react-color";
import { postWidget } from "./widgetSlice";
import { useDispatch } from "react-redux";

const Widget = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState<boolean>(false);
  const [settingVisible, setSettingVisible] = useState(false);

  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [colorPickerVisible2, setColorPickerVisible2] = useState(false);
  const [colorPickerVisible3, setColorPickerVisible3] = useState(false);
  const [colorPickerVisible4, setColorPickerVisible4] = useState(false);
  const [colorPickerVisible5, setColorPickerVisible5] = useState(false);
  const [colorPickerVisible6, setColorPickerVisible6] = useState(false);
  const [colorPickerVisible7, setColorPickerVisible7] = useState(false);
  const [colorPickerVisible8, setColorPickerVisible8] = useState(false);
  const [colorPickerVisible9, setColorPickerVisible9] = useState(false);
  const [colorPickerVisible10, setColorPickerVisible10] = useState(false);
  const [colorPickerVisible11, setColorPickerVisible11] = useState(false);
  const [colorPickerVisible12, setColorPickerVisible12] = useState(false);
  const [colorPickerVisible13, setColorPickerVisible13] = useState(false);
  const [colorPickerVisible14, setColorPickerVisible14] = useState(false);
  const [colorPickerVisible15, setColorPickerVisible15] = useState(false);
  const [colorPickerVisible16, setColorPickerVisible16] = useState(false);

  // Color UseState

  const [bubbleBackground, setBubbleBackground] = useState("#7451f8");
  const [iconColor, setIconColor] = useState("#ffffff");
  const [headerBackground, setHeaderBackground] = useState("#7451f8");
  const [headerText, setHeaderText] = useState("#000000");
  const [screenBackground, setScreenBackground] = useState("#ffffff");
  const [titleColor, setTitleColor] = useState("#000000");
  const [startButtonColor, setStartButtonColor] = useState("#7451f8");
  const [chatHeaderBackground, setChatHeaderBackground] = useState("#7451f8");
  const [chatBackground, setChatBackground] = useState("#ffffff");
  const [chatTitleColor, setChatTitleColor] = useState("#000000");
  const [chatStartButtonColor, setChatStartButtonColor] = useState("#000000");
  const [welMsgBgColor, setWelMsgBgColor] = useState("#7451f8");
  const [welMsgTextColor, setWelMsgTextColor] = useState("#ffffff");
  const [userResponseBgColor, setUserResponseBgColor] = useState("#7451f8");
  const [userResponseColor, setUserResponseColor] = useState("#ffffff");

  // Input Value

  const [botName, setBotName] = useState("Airbot");
  const [description, setDescription] = useState(
    "Airbot is the powerfull chatbot"
  );
  const [poweredBy, setPoweredBy] = useState("Airbot");
  const [logo, setLogo] = useState(
    "https://uselooper.com/assets/images/avatars/profile.jpg"
  );
  const [bubbleIcon, setBubbleIcon] = useState("");

  const handleOnChange = (color) => {
    setBubbleBackground(color.hex);
  };

  const handleOnChange2 = (color) => {
    setIconColor(color.hex);
  };

  const headerBackgroundFunc = (color) => {
    setHeaderBackground(color.hex);
    console.log(bubbleBackground);
  };

  const headerTextFunc = (color) => {
    setHeaderText(color.hex);
    console.log(bubbleBackground);
  };

  const screenBackgroundFunc = (color) => {
    setScreenBackground(color.hex);
    console.log(bubbleBackground);
  };

  const titleColorFunc = (color) => {
    setTitleColor(color.hex);
    console.log(bubbleBackground);
  };

  const startButtonColorFunc = (color) => {
    setStartButtonColor(color.hex);
    console.log(bubbleBackground);
  };

  const chatHeaderBackgroundFunc = (color) => {
    setChatHeaderBackground(color.hex);
    console.log(bubbleBackground);
  };

  const chatBackgroundFunc = (color) => {
    setChatBackground(color.hex);
    console.log(bubbleBackground);
  };

  const chatTitleColorFunc = (color) => {
    setChatTitleColor(color.hex);
    console.log(bubbleBackground);
  };

  const chatStartButtonColorFunc = (color) => {
    setChatStartButtonColor(color.hex);
    console.log(bubbleBackground);
  };

  const welMsgBgColorFunc = (color) => {
    setWelMsgBgColor(color.hex);
    console.log(bubbleBackground);
  };

  const welMsgTextColorFunc = (color) => {
    setWelMsgTextColor(color.hex);
    console.log(bubbleBackground);
  };

  const userResponseBgColorFunc = (color) => {
    setUserResponseBgColor(color.hex);
    console.log(bubbleBackground);
  };

  const userResponseColorFunc = (color) => {
    setUserResponseColor(color.hex);
  };

  //  useEffect(() => {

  //           document.body.style.overflow = 'hidden';

  //       }, );

  let bubbleColorPicker = useRef();
  let iconColorPicker = useRef();
  let welHbColorPicker = useRef();
  let welHtColorPicker = useRef();
  let welSbColorPicker = useRef();
  let welTcColorPicker = useRef();
  let welSbcColorPicker = useRef();
  let chatHbColorPicker = useRef();
  let chatBcColorPicker = useRef();
  let chatTcColorPicker = useRef();
  let chatSbcColorPicker = useRef();
  let chatMbcColorPicker = useRef();
  let chatMcColorPicker = useRef();
  let chatRbColorPicker = useRef();
  let chatRcColorPicker = useRef();

  useEffect(() => {
    var handler = (e) => {
      if (!bubbleColorPicker.current.contains(e.target))
        setColorPickerVisible(false);
    };

    var handler2 = (e) => {
      if (!iconColorPicker.current.contains(e.target))
        setColorPickerVisible2(false);
    };

    var handler3 = (e) => {
      if (!welHbColorPicker.current.contains(e.target))
        setColorPickerVisible3(false);
    };
    var handler4 = (e) => {
      if (!welHtColorPicker.current.contains(e.target))
        setColorPickerVisible4(false);
    };

    var handler5 = (e) => {
      if (!welSbColorPicker.current.contains(e.target))
        setColorPickerVisible5(false);
    };
    var handler6 = (e) => {
      if (!welTcColorPicker.current.contains(e.target))
        setColorPickerVisible6(false);
    };

    var handler7 = (e) => {
      if (!welSbcColorPicker.current.contains(e.target))
        setColorPickerVisible7(false);
    };

    var handler8 = (e) => {
      if (!chatHbColorPicker.current.contains(e.target))
        setColorPickerVisible8(false);
    };
    var handler9 = (e) => {
      if (!chatBcColorPicker.current.contains(e.target))
        setColorPickerVisible9(false);
    };
    var handler10 = (e) => {
      if (!chatTcColorPicker.current.contains(e.target))
        setColorPickerVisible10(false);
    };
    var handler12 = (e) => {
      if (!chatSbcColorPicker.current.contains(e.target))
        setColorPickerVisible12(false);
    };

    var handler13 = (e) => {
      if (!chatMbcColorPicker.current.contains(e.target))
        setColorPickerVisible13(false);
    };

    var handler14 = (e) => {
      if (!chatMcColorPicker.current.contains(e.target))
        setColorPickerVisible14(false);
    };

    var handler15 = (e) => {
      if (!chatRbColorPicker.current.contains(e.target))
        setColorPickerVisible15(false);
    };

    var handler16 = (e) => {
      if (!chatRcColorPicker.current.contains(e.target))
        setColorPickerVisible16(false);
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("mousedown", handler2);
    document.addEventListener("mousedown", handler3);
    document.addEventListener("mousedown", handler4);
    document.addEventListener("mousedown", handler5);
    document.addEventListener("mousedown", handler6);
    document.addEventListener("mousedown", handler7);
    document.addEventListener("mousedown", handler8);
    document.addEventListener("mousedown", handler9);
    document.addEventListener("mousedown", handler10);
    document.addEventListener("mousedown", handler12);
    document.addEventListener("mousedown", handler13);
    document.addEventListener("mousedown", handler14);
    document.addEventListener("mousedown", handler15);
    document.addEventListener("mousedown", handler16);
  });

  const imgFilePreview = (e) => {
    if (e.target.files.length !== 0) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const bubblePreview = (e) => {
    if (e.target.files.length !== 0) {
      setBubbleIcon(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async () => {
    let data = {
      uuid: "234567hbfvlkfds",
      title: botName,
      description: description,
      powered_by: poweredBy,
      theme: {
        minimizedWidget: {
          bgColor: bubbleBackground,
          iconColor: iconColor,
        },
        welcomeScreen: {
          headerBackground: headerBackground,
          headerText: headerText,
          bgColor: screenBackground,
          title: botName,
          titleColor: titleColor,
          startButtonColor: startButtonColor,
        },
        chatScreen: {
          headerBackground: chatHeaderBackground,
          headerText: botName,
          bgColor: chatBackground,
          titleColor: chatTitleColor,
          startButtonColor: chatStartButtonColor,
          welcomeMsgBgColor: welMsgBgColor,
          welcomeMsgTextColor: welMsgTextColor,
          userResponseBgColor: userResponseBgColor,
          userResponseTextColor: userResponseColor,
        },
      },
    };

    await dispatch(postWidget(data));

    // fetch("http://localhost:4012/widget", {
    //     method: "POST",
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body:JSON.stringify(data)
    //   }).then((resp)=>{

    //     resp.json().then((result)=>{
    //       console.log("result",result)
    //     })
    //   })
  };

  return (
    <>
      <div className=" w-full dark:bg-black min-h-screen mt-[60px]   ml-[209px] ">
        <div className="pl-[30px] mt-4 border py-4 border-slate-200 border-l-0">
          <h1 className="text-[28px] dark:text-[#555] font-semi-bold">
            Chat Widget
          </h1>
        </div>

        <div className="flex relative gap-6 min-h-[300px]">
          <div className="flex flex-col overflow-y-auto min-w-[770px]">
            <div
              onClick={() => setSettingVisible(!settingVisible)}
              className=" flex items-center justify-between py-[22px] border max-w-[710px] ml-6 border-slate-200 px-4 mt-5 "
            >
              <div className="flex items-center">
                <i className="fa-solid fa-sliders dark:text-[#555]  text-[#7451f8] text-[30px]"></i>
                <h1 className="text-[19px] font-semibold ml-6  dark:text-[#888] ">
                  General Settings
                </h1>
              </div>
              <i
                onClick={() => setSettingVisible(!settingVisible)}
                className="fa-solid fa-angle-right dark:text-[#555]  text-[20px]"
              ></i>
            </div>
            {settingVisible ? (
              <div className="max-w-[710px] h-[460px] ml-6 border border-slate-200 mb-6">
                <div className="pl-4 pr-4  mt-3">
                  <h3 className="text-[20px] dark:text-[#888]">Bot Name</h3>
                  <input
                    type="text"
                    value={botName}
                    onChange={(e) => setBotName(e.target.value)}
                    className="min-w-[680px] mt-2 py-[8px] px-2 border rounded-[6px] border-zinc-300"
                  />
                </div>

                <div className="pl-4 mt-3">
                  <h3 className="text-[20px] dark:text-[#888]">Description</h3>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-w-[680px] mt-2 px-2 py-[8px] border rounded-[6px] border-zinc-300"
                  />
                </div>

                <div className="pl-4 mt-3">
                  <h3 className="text-[20px] dark:text-[#888]">Powered by</h3>
                  <input
                    type="text"
                    value={poweredBy}
                    onChange={(e) => setPoweredBy(e.target.value)}
                    className="min-w-[680px] mt-2 px-2 py-[8px] border rounded-[6px] border-zinc-300"
                  />
                </div>

                <div className="pl-4 mt-3">
                  <h3 className="text-[20px] mb-2 dark:text-[#888]">
                    Bot Logo
                  </h3>
                  <input onChange={imgFilePreview} type="file" />
                </div>

                <div className="pl-4 mt-3">
                  <h3 className="text-[20px] mb-2">Bubble Icon</h3>
                  <input onChange={bubblePreview} type="file" />
                </div>
              </div>
            ) : null}

            <div
              onClick={() => setVisible(!visible)}
              className=" flex items-center justify-between py-[22px] border max-w-[710px] ml-6 border-slate-200 px-4 mt-5 "
            >
              <div className="flex items-center">
                <i className="fa-sharp fa-solid fa-pencil dark:text-[#555]  text-[#7451f8] text-[30px]"></i>
                <h1 className="text-[19px] dark:text-[#888] font-semibold ml-6  ">
                  Appearance
                </h1>
              </div>
              <i className="fa-solid fa-angle-right text-[20px] dark:text-[#555]"></i>
            </div>
            {visible ? (
              <div className="max-w-[710px] h-[1040px] ml-6 border border-slate-200 mb-6">
                <h1 className="text-[21px] text-[#9ba6b3] pl-4 my-3 dark:text-[#555] ">
                  MINIMIZED WIDGET
                </h1>
                <div className="flex  items-center  gap-8">
                  <div className="pl-4 pr-4  mt-3 ">
                    <h3 className="text-[20px] text-[#516173] dark:text-[#555]">
                      Bubble Background
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible(!colorPickerVisible)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {bubbleBackground}
                        </div>
                        <div
                          style={{ backgroundColor: bubbleBackground }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible ? (
                        <div
                          ref={bubbleColorPicker}
                          id="func"
                          className="fixed top-[140px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={handleOnChange}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="pl-4 pr-4  mt-3">
                    <h3 className="text-[20px] text-[#516173] dark:text-[#555]">
                      Icon color
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible2(!colorPickerVisible2)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {iconColor}
                        </div>
                        <div
                          style={{ backgroundColor: iconColor }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible2 ? (
                        <div
                          ref={iconColorPicker}
                          className="fixed top-[140px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={handleOnChange2}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <h1 className="text-[21px] text-[#9ba6b3] dark:text-[#555] pl-4 mt-11">
                  WELCOME SCREEN
                </h1>

                <div className="flex  items-center  gap-8">
                  <div className="pl-4 pr-4  mt-3 ">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Header Background
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible3(!colorPickerVisible3)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {headerBackground}
                        </div>
                        <div
                          style={{ backgroundColor: headerBackground }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible3 ? (
                        <div
                          ref={welHbColorPicker}
                          className="fixed top-[300px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={headerBackgroundFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="pl-4 pr-4  mt-3">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Header Text
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible4(!colorPickerVisible4)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {headerText}
                        </div>
                        <div
                          style={{ backgroundColor: headerText }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible4 ? (
                        <div
                          ref={welHtColorPicker}
                          className="fixed top-[300px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={headerTextFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="flex  items-center  gap-8">
                  <div className="pl-4 pr-4  mt-3 ">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Screen Background
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible5(!colorPickerVisible5)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {screenBackground}
                        </div>
                        <div
                          style={{ backgroundColor: screenBackground }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible5 ? (
                        <div
                          ref={welSbColorPicker}
                          className="fixed top-[340px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={screenBackgroundFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="pl-4 pr-4  mt-3">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Title Color
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible6(!colorPickerVisible6)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {titleColor}
                        </div>
                        <div
                          style={{ backgroundColor: titleColor }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible6 ? (
                        <div
                          ref={welTcColorPicker}
                          className="fixed top-[390px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={titleColorFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="pl-4 pr-4  mt-3">
                  <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                    Start Button Color
                  </h3>

                  <div>
                    <div
                      onClick={() =>
                        setColorPickerVisible7(!colorPickerVisible7)
                      }
                      className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                    >
                      <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                        {startButtonColor}
                      </div>
                      <div
                        style={{ backgroundColor: startButtonColor }}
                        className="px-[16px] my-1 mx-1 rounded-[5px]"
                      ></div>
                    </div>

                    {colorPickerVisible7 ? (
                      <div
                        ref={welSbcColorPicker}
                        className="fixed top-[250px] z-99"
                      >
                        {" "}
                        <SketchPicker
                          color={bubbleBackground}
                          onChangeComplete={startButtonColorFunc}
                          width={280}
                        />{" "}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Third */}

                <h1 className="text-[21px] text-[#9ba6b3] dark:text-[#555] pl-4 mt-11 ">
                  CHAT SCREEN
                </h1>
                <div className="flex  items-center  gap-8">
                  <div className="pl-4 pr-4  mt-3 ">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Header Background
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible8(!colorPickerVisible8)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {chatHeaderBackground}
                        </div>
                        <div
                          style={{ backgroundColor: chatHeaderBackground }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible8 ? (
                        <div
                          ref={chatHbColorPicker}
                          className="fixed top-[330px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={chatHeaderBackgroundFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="pl-4 pr-4  mt-3">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Background color
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible9(!colorPickerVisible9)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {chatBackground}
                        </div>
                        <div
                          style={{ backgroundColor: chatBackground }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible9 ? (
                        <div
                          ref={chatBcColorPicker}
                          className="fixed top-[330px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={chatBackgroundFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="flex  items-center  gap-8">
                  <div className="pl-4 pr-4  mt-3 ">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Title Color
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible10(!colorPickerVisible10)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {chatTitleColor}
                        </div>
                        <div
                          style={{ backgroundColor: chatTitleColor }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible10 ? (
                        <div
                          ref={chatTcColorPicker}
                          className="fixed top-[90px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={chatTitleColorFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="pl-4 pr-4  mt-3">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Start Button Color
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible12(!colorPickerVisible12)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {chatStartButtonColor}
                        </div>
                        <div
                          style={{ backgroundColor: chatStartButtonColor }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible12 ? (
                        <div
                          ref={chatSbcColorPicker}
                          className="fixed top-[90px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={chatStartButtonColorFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="flex  items-center  gap-8">
                  <div className="pl-4 pr-4  mt-3 ">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Message Background
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible13(!colorPickerVisible13)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {welMsgBgColor}
                        </div>
                        <div
                          style={{ backgroundColor: welMsgBgColor }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible13 ? (
                        <div
                          ref={chatMbcColorPicker}
                          className="fixed top-[180px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={welMsgBgColorFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="pl-4 pr-4  mt-3">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Message Color
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible14(!colorPickerVisible14)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {welMsgTextColor}
                        </div>
                        <div
                          style={{ backgroundColor: welMsgTextColor }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible14 ? (
                        <div
                          ref={chatMcColorPicker}
                          className="fixed top-[180px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={welMsgTextColorFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="flex  items-center  gap-8">
                  <div className="pl-4 pr-4  mt-3 ">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Response Background
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible15(!colorPickerVisible15)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {userResponseBgColor}
                        </div>
                        <div
                          style={{ backgroundColor: userResponseBgColor }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible15 ? (
                        <div
                          ref={chatRbColorPicker}
                          className="fixed top-[260px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={bubbleBackground}
                            onChangeComplete={userResponseBgColorFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="pl-4 pr-4  mt-3">
                    <h3 className="text-[20px] dark:text-[#555] text-[#516173]">
                      Response Color
                    </h3>

                    <div>
                      <div
                        onClick={() =>
                          setColorPickerVisible16(!colorPickerVisible16)
                        }
                        className="flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]"
                      >
                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                          {userResponseColor}
                        </div>
                        <div
                          style={{ backgroundColor: userResponseColor }}
                          className="px-[16px] my-1 mx-1 rounded-[5px]"
                        ></div>
                      </div>

                      {colorPickerVisible16 ? (
                        <div
                          ref={chatRcColorPicker}
                          className="fixed top-[260px] z-99"
                        >
                          {" "}
                          <SketchPicker
                            color={userResponseColor}
                            onChangeComplete={userResponseColorFunc}
                            width={280}
                          />{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="pl-4 pr-4  mt-3 ">
                  <button
                    onClick={handleSubmit}
                    className="px-[18px] py-[7px] rounded-[8px] border border-[#c4c2c5] bg-[#fff] shadow-md font-semibold text-[#888]"
                  >
                    Publish your bot
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <div className="mt-[20px] fixed right-0 ">
            <Preview
              poweredBy={poweredBy}
              bubbleIcon={bubbleIcon}
              logo={logo}
              iconColor={iconColor}
              userResponseColor={userResponseColor}
              userResponseBgColor={userResponseBgColor}
              welMsgTextColor={welMsgTextColor}
              welMsgBgColor={welMsgBgColor}
              chatTitleColor={chatTitleColor}
              chatBackground={chatBackground}
              screenBackground={screenBackground}
              startButtonColor={startButtonColor}
              headerText={headerText}
              bubbleBackground={bubbleBackground}
              botName={botName}
              headerBackground={headerBackground}
              description={description}
              chatHeaderBackground={chatHeaderBackground}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
