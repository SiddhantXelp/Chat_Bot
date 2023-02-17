import React, { useState } from "react";

const Responses = () => {
  const [addData, setAddData] = useState(false);
  const [addQuery, setAddQuery] = useState("");
  const [getData, setGetData] = useState({});
  const [inputFields, setInputFields] = useState([
    {
      res: "",
    },
  ]);
  const onSubmitform = (e) => {
    e.preventDefault();
    setAddQuery("");
    setAddData(false);

    console.log("addbtn", addQuery, inputFields);
    setInputFields([
      {
        res: "",
      },
    ]);
    let data = { addQuery, inputFields };
    localStorage.setItem("dataKey", JSON.stringify(data));
    setGetData(JSON.parse(localStorage.getItem("dataKey")));
  };

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        res: "",
      },
    ]);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  return (
    <>
      <div
        className="flex items-center m-8"
        onClick={() => setAddData(!addData)}
      >
        <h1 className="text-[19px] font-semibold  mr-7  ">Responses</h1>
        <i className="fa-solid fa-square-plus text-[#7451f8] text-[30px]"></i>
      </div>
      {addData ? (
        <div className=" flex justify-center">
          <div className="lg:w-[510px] sm:w-[300px] h-auto ml-6 border-r border-l border-t border-b rounded-[10px] border-gray-400 mb-6">
            <div className="text-center font-bold py-8 text-[18px]">
              Queries & Responses
            </div>
            <form onSubmit={(e) => onSubmitform(e)}>
              <div className="pl-[50px]  mt-3">
                <label className="text-[16px]">Add Query</label>
                <input
                  type="text"
                  value={addQuery}
                  onChange={(e) => setAddQuery(e.target.value)}
                  className="lg:w-[410px] sm:w-[300px]  mt-2 py-[6px] border rounded-[6px] border-gray-700"
                />
              </div>
              <div className="pl-[50px] pr-4  mt-3">
                <label className="text-[16px]">Add Response</label>
                <i
                  className="fa-solid fa-square-plus text-[#7451f8] text-[20px] ml-6 mt-2"
                  onClick={() => addInputField()}
                ></i>
              </div>
              {inputFields.map((data, index) => {
                const { res } = data;
                return (
                  <div className="pl-[50px]  mt-3 " key={index}>
                    <input
                      style={{
                        padding: "6px 0",
                        borderRadius: "6px",
                        border: "1px solid black",
                        width: "410px",
                      }}
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={res}
                      name="res"
                    />
                  </div>
                );
              })}
              <div className="my-6 flex justify-center">
                <input
                  type="submit"
                  className="mt-2 py-[6px] border rounded-full bg-[#7451f8] text-white w-[200px]"
                />
              </div>
            </form>
          </div>
        </div>
      ) : null}
      <div className="flex justify-center">
        <table className="border-collapse w-[80%]">
          <tbody>
          <tr>
            <th className="border border-gray-700 py-2 bg-[#7451f8] text-white">
              Queries
            </th>
            <th className="border border-gray-700  bg-[#7451f8] text-white">
              Responses
            </th>
          </tr>
          <tr>
            <td className="border border-gray-700 py-2">{getData.addQuery}</td>
            <td className="border border-gray-700">
              
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Responses;
