import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import Preview from '../../components/Preview/Preview';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";



const Widget = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const [settingVisible, setSettingVisible] = useState(false);


    const [colorPickerVisible, setColorPickerVisible] = useState(false)
    const [colorPickerVisible2, setColorPickerVisible2] = useState(false)
    const [colorPickerVisible3, setColorPickerVisible3] = useState(false)
    const [colorPickerVisible4, setColorPickerVisible4] = useState(false)
    const [colorPickerVisible5, setColorPickerVisible5] = useState(false)
    const [colorPickerVisible6, setColorPickerVisible6] = useState(false)
    const [colorPickerVisible7, setColorPickerVisible7] = useState(false)
    const [colorPickerVisible8, setColorPickerVisible8] = useState(false)
    const [colorPickerVisible9, setColorPickerVisible9] = useState(false)
    const [colorPickerVisible10, setColorPickerVisible10] = useState(false)
    const [colorPickerVisible11, setColorPickerVisible11] = useState(false)
    const [colorPickerVisible12, setColorPickerVisible12] = useState(false)
    const [colorPickerVisible13, setColorPickerVisible13] = useState(false)
    const [colorPickerVisible14, setColorPickerVisible14] = useState(false)
    const [colorPickerVisible15, setColorPickerVisible15] = useState(false)
    const [colorPickerVisible16, setColorPickerVisible16] = useState(false)



    // Color UseState

    const [bubbleBackground, setBubbleBackground] = useState("#000000");
    const [iconColor, setIconColor] = useState("#000000");
    const [headerBackground, setHeaderBackground] = useState("#000000");
    const [headerText, setHeaderText] = useState("#000000");
    const [screenBackground, setScreenBackground] = useState("#000000");
    const [titleColor, setTitleColor] = useState("#000000");
    const [startButtonColor, setStartButtonColor] = useState("#000000");
    const [chatHeaderBackground, setChatHeaderBackground] = useState("#000000");
    const [chatBackground, setChatBackground] = useState("#000000");
    const [chatTitleColor, setChatTitleColor] = useState("#000000");
    const [chatStartButtonColor, setChatStartButtonColor] = useState("#000000");
    const [welMsgBgColor, setWelMsgBgColor] = useState("#000000");
    const [welMsgTextColor, setWelMsgTextColor] = useState("#000000");
    const [userResponseBgColor, setUserResponseBgColor] = useState("#000000");
    const [userResponseColor, setUserResponseColor] = useState("#000000");



    // Input Value

    const [botName, setBotName] = useState("");
    const [description, setDescription] = useState("");

 

    const handleOnChange = (color) => {
        setBubbleBackground(color.hex)
        console.log(bubbleBackground)

    }

    const handleOnChange2 = (color) => {
        setIconColor(color.hex)
        console.log(bubbleBackground)

    }

    const headerBackgroundFunc = (color) => {
        setHeaderBackground(color.hex)
        console.log(bubbleBackground)

    }

    const headerTextFunc = (color) => {
        setHeaderText(color.hex)
        console.log(bubbleBackground)

    }

    const screenBackgroundFunc = (color) => {
        setScreenBackground(color.hex)
        console.log(bubbleBackground)

    }

    const titleColorFunc = (color) => {
        setTitleColor(color.hex)
        console.log(bubbleBackground)

    }

    const startButtonColorFunc = (color) => {
        setStartButtonColor(color.hex)
        console.log(bubbleBackground)

    }

    const chatHeaderBackgroundFunc = (color) => {
        setChatHeaderBackground(color.hex)
        console.log(bubbleBackground)

    }

    const chatBackgroundFunc = (color) => {
        setChatBackground(color.hex)
        console.log(bubbleBackground)

    }


    const chatTitleColorFunc = (color) => {
        setChatTitleColor(color.hex)
        console.log(bubbleBackground)

    }

    const chatStartButtonColorFunc = (color) => {
        setChatStartButtonColor(color.hex)
        console.log(bubbleBackground)

    }

    const welMsgBgColorFunc = (color) => {
        setWelMsgBgColor(color.hex)
        console.log(bubbleBackground)

    }

    const welMsgTextColorFunc = (color) => {
        setWelMsgTextColor(color.hex)
        console.log(bubbleBackground)

    }

    const userResponseBgColorFunc = (color) => {
        setUserResponseBgColor(color.hex)
        console.log(bubbleBackground)

    }

    const userResponseColorFunc = (color) => {
        setUserResponseColor(color.hex)
        console.log(bubbleBackground)

    }






    return (
        <>

            <div className="border border-slate-200 " >

                <div className="pl-[30px] mt-4 border py-4 border-slate-200">
                    <h1 className="text-[28px] font-semi-bold">Chat Widget</h1>
                </div>

                <div className='flex  gap-6 min-h-[300px]'>
                    <div className="flex flex-col   min-w-[770px]">

                    <div onClick={() => setSettingVisible(!settingVisible)} className=" flex items-center justify-between py-[22px] border max-w-[710px] ml-6 border-slate-200 px-4 mt-5 ">
                        <div className="flex items-center">
                            <i className="fa-solid fa-sliders text-[#7451f8] text-[30px]"></i>
                            <h1 className="text-[19px] font-semibold ml-6  ">General Settings</h1>
                        </div>
                        <i onClick={() => setSettingVisible(!settingVisible)} className="fa-solid fa-angle-right  text-[20px]"></i>



                    </div>
                    {settingVisible ? <div className="max-w-[710px] h-[480px] ml-6 border border-slate-200 mb-6">
                        <div className="pl-4 pr-4  mt-3">
                            <h3 className="text-[20px]">Bot Name</h3>
                            <input type="text" value={botName} onChange={(e) => setBotName(e.target.value)} className="min-w-[680px] mt-2 py-[8px] border rounded-[6px] border-zinc-300" />
                        </div>

                        <div className="pl-4 mt-3">
                            <h3 className="">Description</h3>
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="min-w-[680px] mt-2 py-[8px] border rounded-[6px] border-zinc-300" />
                        </div>

                        <div className="pl-4 mt-3">
                            <h3 className="text-[20px]">Powered by</h3>
                        </div>
                    </div> : null}

                    <div onClick={() => setVisible(!visible)} className=" flex items-center justify-between py-[22px] border max-w-[710px] ml-6 border-slate-200 px-4 mt-5 ">
                        <div className="flex items-center">
                            <i className="fa-sharp fa-solid fa-pencil text-[#7451f8] text-[30px]"></i>
                            <h1 className="text-[19px] font-semibold ml-6  ">Appearance</h1>
                        </div>
                        <i className="fa-solid fa-angle-right text-[20px]"></i>



                    </div>
                    {visible ? <div className="max-w-[710px] h-[990px] ml-6 border border-slate-200 mb-6">
                        <h1 className="text-[21px] text-[#9ba6b3] pl-4 my-3">MINIMIZED WIDGET</h1>
                        <div className="flex  items-center  gap-8">

                            <div className="pl-4 pr-4  mt-3 " >
                                <h3 className="text-[20px] text-[#516173]">Bubble Background</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible(!colorPickerVisible)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {bubbleBackground}
                                        </div>
                                        <div style={{ backgroundColor: bubbleBackground }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible ? <div className="fixed top-[140px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={handleOnChange}
                                            width={280}
                                        />  </div> : null
                                    }

                                </div>
                            </div>

                            <div className="pl-4 pr-4  mt-3" >
                                <h3 className="text-[20px] text-[#516173]">Icon color</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible2(!colorPickerVisible2)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {iconColor}
                                        </div>
                                        <div style={{ backgroundColor: iconColor }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible2 ? <div className="fixed top-[140px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={handleOnChange2}
                                            width={280}
                                        /> </div> : null
                                    }

                                </div>
                            </div>
                        </div>

                        <h1 className="text-[21px] text-[#9ba6b3] pl-4 mt-11">WELCOME SCREEN</h1>

                        <div className="flex  items-center  gap-8">

                            <div className="pl-4 pr-4  mt-3 " >
                                <h3 className="text-[20px] text-[#516173]">Header Background</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible3(!colorPickerVisible3)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {headerBackground}
                                        </div>
                                        <div style={{ backgroundColor: headerBackground }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible3 ? <div className="fixed top-[300px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={headerBackgroundFunc}
                                            width={280}
                                        />  </div> : null
                                    }

                                </div>
                            </div>

                            <div className="pl-4 pr-4  mt-3" >
                                <h3 className="text-[20px] text-[#516173]">Header Text</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible4(!colorPickerVisible4)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {headerText}
                                        </div>
                                        <div style={{ backgroundColor: headerText }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible4 ? <div className="fixed top-[300px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={headerTextFunc}
                                            width={280}
                                        /> </div> : null
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="flex  items-center  gap-8">

                            <div className="pl-4 pr-4  mt-3 " >
                                <h3 className="text-[20px] text-[#516173]">Screen Background</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible5(!colorPickerVisible5)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {screenBackground}
                                        </div>
                                        <div style={{ backgroundColor: screenBackground }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible5 ? <div className="fixed top-[390px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={screenBackgroundFunc}
                                            width={280}
                                        />  </div> : null
                                    }

                                </div>
                            </div>

                            <div className="pl-4 pr-4  mt-3" >
                                <h3 className="text-[20px] text-[#516173]">Title Color</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible6(!colorPickerVisible6)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {titleColor}
                                        </div>
                                        <div style={{ backgroundColor: titleColor }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible6 ? <div className="fixed top-[390px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={titleColorFunc}
                                            width={280}
                                        /> </div> : null
                                    }

                                </div>
                            </div>


                        </div>

                        <div className="pl-4 pr-4  mt-3" >
                            <h3 className="text-[20px] text-[#516173]">Start Button Color</h3>

                            <div >



                                <div onClick={() => setColorPickerVisible7(!colorPickerVisible7)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                    <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                        {startButtonColor}
                                    </div>
                                    <div style={{ backgroundColor: startButtonColor }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                    </div>

                                </div>

                                {
                                    colorPickerVisible7 ? <div className="fixed top-[490px] z-99"> <SketchPicker

                                        color={bubbleBackground}
                                        onChangeComplete={startButtonColorFunc}
                                        width={280}
                                    /> </div> : null
                                }

                            </div>
                        </div>


                        {/* Third */}

                        <h1 className="text-[21px] text-[#9ba6b3] pl-4 mt-11 ">CHAT SCREEN</h1>
                        <div className="flex  items-center  gap-8">

                            <div className="pl-4 pr-4  mt-3 " >
                                <h3 className="text-[20px] text-[#516173]">Header Background</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible8(!colorPickerVisible8)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {chatHeaderBackground}
                                        </div>
                                        <div style={{ backgroundColor: chatHeaderBackground }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible8 ? <div className="fixed top-[370px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={chatHeaderBackgroundFunc}
                                            width={280}
                                        />  </div> : null
                                    }

                                </div>
                            </div>

                            <div className="pl-4 pr-4  mt-3" >
                                <h3 className="text-[20px] text-[#516173]">Background color</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible9(!colorPickerVisible9)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {chatBackground}
                                        </div>
                                        <div style={{ backgroundColor: chatBackground }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible9 ? <div className="fixed top-[370px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={chatBackgroundFunc}
                                            width={280}
                                        /> </div> : null
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="flex  items-center  gap-8">

                            <div className="pl-4 pr-4  mt-3 " >
                                <h3 className="text-[20px] text-[#516173]">Title Color</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible10(!colorPickerVisible10)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {chatTitleColor}
                                        </div>
                                        <div style={{ backgroundColor: chatTitleColor }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible10 ? <div className="fixed top-[470px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={chatTitleColorFunc}
                                            width={280}
                                        />  </div> : null
                                    }

                                </div>
                            </div>

                            <div className="pl-4 pr-4  mt-3" >
                                <h3 className="text-[20px] text-[#516173]">Start Button Color</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible12(!colorPickerVisible12)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {chatStartButtonColor}
                                        </div>
                                        <div style={{ backgroundColor: chatStartButtonColor }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible12 ? <div className="fixed top-[470px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={chatStartButtonColorFunc}
                                            width={280}
                                        /> </div> : null
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="flex  items-center  gap-8">

                            <div className="pl-4 pr-4  mt-3 " >
                                <h3 className="text-[20px] text-[#516173]">Message Background</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible13(!colorPickerVisible13)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {welMsgBgColor}
                                        </div>
                                        <div style={{ backgroundColor: welMsgBgColor }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible13 ? <div className="fixed top-[470px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={welMsgBgColorFunc}
                                            width={280}
                                        />  </div> : null
                                    }

                                </div>
                            </div>

                            <div className="pl-4 pr-4  mt-3" >
                                <h3 className="text-[20px] text-[#516173]">Message Color</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible14(!colorPickerVisible14)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {welMsgTextColor}
                                        </div>
                                        <div style={{ backgroundColor: welMsgTextColor }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible14 ? <div className="fixed top-[470px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={welMsgTextColorFunc}
                                            width={280}
                                        /> </div> : null
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="flex  items-center  gap-8">

                            <div className="pl-4 pr-4  mt-3 " >
                                <h3 className="text-[20px] text-[#516173]">Response Background</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible15(!colorPickerVisible15)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {userResponseBgColor}
                                        </div>
                                        <div style={{ backgroundColor: userResponseBgColor }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible15 ? <div className="fixed top-[500px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={userResponseBgColorFunc}
                                            width={280}
                                        />  </div> : null
                                    }

                                </div>
                            </div>

                            <div className="pl-4 pr-4  mt-3" >
                                <h3 className="text-[20px] text-[#516173]">Response Color</h3>

                                <div >



                                    <div onClick={() => setColorPickerVisible16(!colorPickerVisible16)} className='flex h-[40px] w-[195px] border border-[#c8d0d8] mt-[12px]'>
                                        <div className="border h-[39px] pt-[8px] px-2 none min-w-[115px] border-r-[#c8d0d8] border-b-0 border-t-0">
                                            {userResponseColor}
                                        </div>
                                        <div style={{ backgroundColor: userResponseColor }} className="px-[16px] my-1 mx-1 rounded-[5px]">

                                        </div>

                                    </div>

                                    {
                                        colorPickerVisible16 ? <div className="fixed top-[500px] z-99"> <SketchPicker

                                            color={bubbleBackground}
                                            onChangeComplete={userResponseColorFunc}
                                            width={280}
                                        /> </div> : null
                                    }

                                </div>
                            </div>
                        </div>

                    </div> : null}
                    </div>

                        <div className='mt-[20px]'>
                    <Preview botName ={botName} headerBackground={headerBackground} description={description}chatHeaderBackground={chatHeaderBackground}/>
                    </div>
                </div>

               


            </div>



        </>

    )
}

export default Widget
