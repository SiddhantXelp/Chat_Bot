import React from "react";
import Tree from "react-d3-tree";

const orgChart = {
  name: "AirBot",
  children: [
    {
      name: "ChatScreen",

      children: [
        {
          name: "Greeting",
        },
        {
          name: "Postpaid",

          children: [
            {
              name: "Internet",
            },
          ],
        },
        {
          name: "Prepaid",

          children: [
            {
              name: "Broadband",
            },
          ],
        },
      ],
    },
  ],
};
const Responses = () => {
  return (
    <div className=" w-full dark:bg-black min-h-screen mt-[60px]   ml-[214px] ">
      <div id="treeWrapper" style={{ width: "100em", height: "200em" }}>
        <Tree data={orgChart} />
      </div>
    </div>
  );
};

export default Responses;
