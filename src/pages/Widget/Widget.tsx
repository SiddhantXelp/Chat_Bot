import React, { useState } from 'react'
interface Props {
    id: string
    title?: string
    count: number
}



const Widget: React.FC<Props> = (props) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [settingVisible, setSettingVisible] = useState(false);

    return (
        <div >
            <div className="pl-[30px] mt-4 border py-4 border-slate-200">
                <h1 className="text-[30px] font-semi-bold">Chat Widget</h1>
            </div>

            {/* <div className="mt-4 ml-6 border border-slate-200 max-w-[900px] h-[400px]">
                <div className=" flex items-center py-5 border border-slate-200 px-4">
                    <i className="fa-solid fa-sliders text-[#7451f8] text-[30px]"></i>

                    <h1 className="text-[21px] font-semibold ml-6  ">General Settings</h1>
                </div>
            </div> */}

            {/* <div className="mt-4 ml-6 border border-slate-200 max-w-[900px] h-[400px] ">
                <div className=" flex items-center py-5 border border-slate-200 px-4">

                    <i class="fa-sharp fa-solid fa-pencil text-[#7451f8] text-[30px]"></i>
                    <h1 className="text-[21px] font-semibold ml-6  ">Appearance</h1>
                </div>
            </div> */}

            <div className=" flex items-center justify-between py-9 border max-w-[900px] ml-6 border-slate-200 px-4 mt-5 ">
                <div className="flex items-center">
                    <i className="fa-solid fa-sliders text-[#7451f8] text-[30px]"></i>
                    <h1 className="text-[21px] font-semibold ml-6  ">General Settings</h1>
                </div>
                <i onClick={() => setSettingVisible(!settingVisible)} className="fa-solid fa-angle-right  text-[20px]"></i>



            </div>
            {settingVisible ? <div className="max-w-[900px] h-[600px] ml-6 border border-slate-200 mb-6">
                <div className="pl-4 pr-4  mt-3">
                    <h3 className="text-[20px]">Bot Name</h3>
                    <input type="text"  className="min-w-[800px] mt-2 py-[8px] border rounded-[6px] border-zinc-300" />
                </div>

                <div className="pl-4 mt-3">
                    <h3 className="">Description</h3>
                    <input type="text"  className="min-w-[800px] mt-2 py-[8px] border rounded-[6px] border-zinc-300" />
                </div>

                <div className="pl-4 mt-3">
                    <h3 className="text-[20px]">Powered by</h3>
                    </div>
            </div> : null}

            <div className=" flex items-center justify-between py-9 border max-w-[900px] ml-6 border-slate-200 px-4 mt-5 ">
                <div className="flex items-center">
                    <i className="fa-sharp fa-solid fa-pencil text-[#7451f8] text-[30px]"></i>
                    <h1 className="text-[21px] font-semibold ml-6  ">Appearance</h1>
                </div>
                <i onClick={() => setVisible(!visible)} className="fa-solid fa-angle-right text-[20px]"></i>



            </div>
            {visible ? <div className="max-w-[900px] h-[600px] ml-6 border border-slate-200 mb-6">
                hello
                world
            </div> : null}


        </div>
    )
}

export default Widget
