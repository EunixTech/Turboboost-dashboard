import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import { useSelector } from "react-redux";

const DemoPie = () => {
  const dark = useSelector((state) => state.home.dark);

  const data = [
    {
      type: "Not Optimized URLs",
      value: 19,
    },
    {
      type: "Pending Optimizations",
      value: 72,
    },
    {
      type: "Optimized URLs",
      value: 244,
    },
  ];
  const config = {
    appendPadding: 0,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    color: ["#FF465c70", "#FFCB6570", "#38F8AC70"],
    // legend: {
    //   layout: "vertical", // Set the layout to vertical
    //   position: "left", // Position the legend on the right side of the chart
    //   itemName: {
    //     style: {
    //       fontSize: 12, // Customize the font size of the legend items
    //     },
    //   },
    // },
    label: {
      type: "inner",
      offset: "-70%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 0,
      },
    },
    // interactions: [
    //   {
    //     type: "element-selected",
    //   },
    //   {
    //     type: "element-active",
    //   },
    // ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          fontSize: "24px",
          color: dark ? "#fff" : "#000",
          fontWeight: 500,
        },
        content: "335",
      },
    },
  };
  return (
    <div className="h-[100%] w-[140px]  overflow-x-auto scroll-hidden relative ">
      <div className="w-[200px] h-[100%]" id="effqq">
        <Pie {...config} className="ewrwrww" />
      </div>
    </div>
  );
};
export default DemoPie;
