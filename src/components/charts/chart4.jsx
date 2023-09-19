import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";
import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";
const Chart4 = () => {
  const [data, setData] = useState([
    { name: "Optimizations", year: 0, gdp: 900 },
    { name: "Optimizations", year: 1, gdp: 1000 },
    { name: "Optimizations", year: 2, gdp: 1600 },
    { name: "Optimizations", year: 3, gdp: 2700 },
    { name: "Optimizations", year: 4, gdp: 1200 },
    { name: "Optimizations", year: 5, gdp: 1300 },
    { name: "Optimizations", year: 6, gdp: 1980 },
    { name: "Optimizations", year: 7, gdp: 3500 },
    { name: "Optimizations", year: 8, gdp: 4500 },
    { name: "Optimizations", year: 9, gdp: 3400 },
    { name: "Optimizations", year: 10, gdp: 4500 },
    { name: "Optimizations", year: 11, gdp: 2700 },
    { name: "Optimizations", year: 12, gdp: 1500 },
    { name: "Optimizations", year: 13, gdp: 2700 },
    { name: "Optimizations", year: 14, gdp: 4500 },
    { name: "Optimizations", year: 15, gdp: 1000 },
    { name: "Optimizations", year: 16, gdp: 1200 },
    { name: "Optimizations", year: 17, gdp: 2500 },
    { name: "Optimizations", year: 18, gdp: 3800 },
    { name: "Optimizations", year: 19, gdp: 4500 },
    { name: "Optimizations", year: 20, gdp: 700 },
    { name: "Optimizations", year: 21, gdp: 500 },
    { name: "Optimizations", year: 22, gdp: 1500 },
    { name: "Optimizations", year: 23, gdp: 4500 },
    { name: "Optimizations", year: 24, gdp: 500 },
    { name: "Optimizations", year: 25, gdp: 4100 },
    { name: "Optimizations", year: 26, gdp: 1500 },
    { name: "Optimizations", year: 27, gdp: 1700 },
    { name: "Optimizations", year: 28, gdp: 2500 },
    { name: "Optimizations", year: 29, gdp: 3500 },
    { name: "Optimizations", year: 30, gdp: 2500 },

    { name: "Purge/Invalidate Requests", year: 0, gdp: 1800 },
    { name: "Purge/Invalidate Requests", year: 1, gdp: 1900 },
    { name: "Purge/Invalidate Requests", year: 2, gdp: 1600 },
    { name: "Purge/Invalidate Requests", year: 3, gdp: 2700 },
    { name: "Purge/Invalidate Requests", year: 4, gdp: 1300 },
    { name: "Purge/Invalidate Requests", year: 5, gdp: 1980 },
    { name: "Purge/Invalidate Requests", year: 6, gdp: 3500 },
    { name: "Purge/Invalidate Requests", year: 7, gdp: 4500 },
    { name: "Purge/Invalidate Requests", year: 8, gdp: 3400 },
    { name: "Purge/Invalidate Requests", year: 9, gdp: 4500 },
    { name: "Purge/Invalidate Requests", year: 10, gdp: 2500 },
    { name: "Purge/Invalidate Requests", year: 11, gdp: 1500 },
    { name: "Purge/Invalidate Requests", year: 12, gdp: 2700 },
    { name: "Purge/Invalidate Requests", year: 13, gdp: 4500 },
    { name: "Purge/Invalidate Requests", year: 14, gdp: 1000 },
    { name: "Purge/Invalidate Requests", year: 15, gdp: 3500 },
    { name: "Purge/Invalidate Requests", year: 16, gdp: 4100 },
    { name: "Purge/Invalidate Requests", year: 17, gdp: 3800 },
    { name: "Purge/Invalidate Requests", year: 18, gdp: 4500 },
    { name: "Purge/Invalidate Requests", year: 19, gdp: 700 },
    { name: "Purge/Invalidate Requests", year: 20, gdp: 1200 },
    { name: "Purge/Invalidate Requests", year: 21, gdp: 500 },
    { name: "Purge/Invalidate Requests", year: 22, gdp: 1500 },
    { name: "Purge/Invalidate Requests", year: 23, gdp: 2700 },
    { name: "Purge/Invalidate Requests", year: 24, gdp: 1200 },
    { name: "Purge/Invalidate Requests", year: 25, gdp: 500 },
    { name: "Purge/Invalidate Requests", year: 26, gdp: 4500 },
    { name: "Purge/Invalidate Requests", year: 27, gdp: 1700 },
    { name: "Purge/Invalidate Requests", year: 28, gdp: 2500 },
    { name: "Purge/Invalidate Requests", year: 29, gdp: 2500 },
    { name: "Purge/Invalidate Requests", year: 30, gdp: 1500 },

    { name: "Tag Create Requests", year: 0, gdp: 100 },
    { name: "Tag Create Requests", year: 1, gdp: 200 },
    { name: "Tag Create Requests", year: 2, gdp: 400 },
    { name: "Tag Create Requests", year: 3, gdp: 1500 },
    { name: "Tag Create Requests", year: 4, gdp: 1200 },
    { name: "Tag Create Requests", year: 5, gdp: 1100 },
    { name: "Tag Create Requests", year: 6, gdp: 980 },
    { name: "Tag Create Requests", year: 7, gdp: 2520 },
    { name: "Tag Create Requests", year: 8, gdp: 100 },
    { name: "Tag Create Requests", year: 9, gdp: 5400 },
    { name: "Tag Create Requests", year: 10, gdp: 1500 },
    { name: "Tag Create Requests", year: 11, gdp: 4700 },
    { name: "Tag Create Requests", year: 12, gdp: 3512 },
    { name: "Tag Create Requests", year: 13, gdp: 2734 },
    { name: "Tag Create Requests", year: 14, gdp: 4420 },
    { name: "Tag Create Requests", year: 15, gdp: 3410 },
    { name: "Tag Create Requests", year: 16, gdp: 2200 },
    { name: "Tag Create Requests", year: 17, gdp: 4500 },
    { name: "Tag Create Requests", year: 18, gdp: 1820 },
    { name: "Tag Create Requests", year: 19, gdp: 4100 },
    { name: "Tag Create Requests", year: 20, gdp: 1700 },
    { name: "Tag Create Requests", year: 21, gdp: 4800 },
    { name: "Tag Create Requests", year: 22, gdp: 1100 },
    { name: "Tag Create Requests", year: 23, gdp: 4100 },
    { name: "Tag Create Requests", year: 24, gdp: 1500 },
    { name: "Tag Create Requests", year: 25, gdp: 100 },
    { name: "Tag Create Requests", year: 26, gdp: 200 },
    { name: "Tag Create Requests", year: 27, gdp: 700 },
    { name: "Tag Create Requests", year: 28, gdp: 500 },
    { name: "Tag Create Requests", year: 29, gdp: 3500 },
    { name: "Tag Create Requests", year: 30, gdp: 4500 },

    { name: "Tag Delete Requests", year: 0, gdp: 4000 },
    { name: "Tag Delete Requests", year: 1, gdp: 4100 },
    { name: "Tag Delete Requests", year: 2, gdp: 4500 },
    { name: "Tag Delete Requests", year: 3, gdp: 2300 },
    { name: "Tag Delete Requests", year: 4, gdp: 100 },
    { name: "Tag Delete Requests", year: 5, gdp: 2980 },
    { name: "Tag Delete Requests", year: 6, gdp: 3500 },
    { name: "Tag Delete Requests", year: 7, gdp: 4400 },
    { name: "Tag Delete Requests", year: 8, gdp: 3500 },
    { name: "Tag Delete Requests", year: 9, gdp: 400 },
    { name: "Tag Delete Requests", year: 10, gdp: 500 },
    { name: "Tag Delete Requests", year: 11, gdp: 200 },
    { name: "Tag Delete Requests", year: 12, gdp: 700 },
    { name: "Tag Delete Requests", year: 13, gdp: 500 },
    { name: "Tag Delete Requests", year: 14, gdp: 1300 },
    { name: "Tag Delete Requests", year: 15, gdp: 3200 },
    { name: "Tag Delete Requests", year: 16, gdp: 4400 },
    { name: "Tag Delete Requests", year: 17, gdp: 3200 },
    { name: "Tag Delete Requests", year: 18, gdp: 4100 },
    { name: "Tag Delete Requests", year: 19, gdp: 1700 },
    { name: "Tag Delete Requests", year: 20, gdp: 1200 },
    { name: "Tag Delete Requests", year: 21, gdp: 2000 },
    { name: "Tag Delete Requests", year: 22, gdp: 2100 },
    { name: "Tag Delete Requests", year: 23, gdp: 2200 },
    { name: "Tag Delete Requests", year: 24, gdp: 800 },
    { name: "Tag Delete Requests", year: 25, gdp: 400 },
    { name: "Tag Delete Requests", year: 26, gdp: 500 },
    { name: "Tag Delete Requests", year: 27, gdp: 700 },
    { name: "Tag Delete Requests", year: 28, gdp: 500 },
    { name: "Tag Delete Requests", year: 29, gdp: 4500 },
    { name: "Tag Delete Requests", year: 30, gdp: 1500 },

    { name: "Failure", year: 0, gdp: 2211 },
    { name: "Failure", year: 1, gdp: 2311 },
    { name: "Failure", year: 2, gdp: 1211 },
    { name: "Failure", year: 3, gdp: 2700 },
    { name: "Failure", year: 4, gdp: 1220 },
    { name: "Failure", year: 5, gdp: 4330 },
    { name: "Failure", year: 6, gdp: 1980 },
    { name: "Failure", year: 7, gdp: 3230 },
    { name: "Failure", year: 8, gdp: 1510 },
    { name: "Failure", year: 9, gdp: 2300 },
    { name: "Failure", year: 10, gdp: 1500 },
    { name: "Failure", year: 11, gdp: 1700 },
    { name: "Failure", year: 12, gdp: 1300 },
    { name: "Failure", year: 13, gdp: 4700 },
    { name: "Failure", year: 14, gdp: 2500 },
    { name: "Failure", year: 15, gdp: 4010 },
    { name: "Failure", year: 16, gdp: 2200 },
    { name: "Failure", year: 17, gdp: 2300 },
    { name: "Failure", year: 18, gdp: 3400 },
    { name: "Failure", year: 19, gdp: 3200 },
    { name: "Failure", year: 20, gdp: 1700 },
    { name: "Failure", year: 21, gdp: 2500 },
    { name: "Failure", year: 22, gdp: 3500 },
    { name: "Failure", year: 23, gdp: 1500 },
    { name: "Failure", year: 24, gdp: 2100 },
    { name: "Failure", year: 25, gdp: 1100 },
    { name: "Failure", year: 26, gdp: 2500 },
    { name: "Failure", year: 27, gdp: 3700 },
    { name: "Failure", year: 28, gdp: 1500 },
    { name: "Failure", year: 29, gdp: 4500 },
    { name: "Failure", year: 30, gdp: 1500 },
  ]);

  const dark = useSelector((state) => state.home.dark);
  const config = {
    data,
    isStack: false,
    xField: "year",
    yField: "gdp",
    seriesField: "name",
    xAxis: {
      tickLine: { length: 0 },
      range: [0, 1],
      label: {
        formatter: (text) => `${parseInt(text) + 1}`, // Add 1 to the x-axis label
      },
    },
    legend: {
      position: "top-right",
      itemName: {
        style: {
          fontWeight: "500",
          fill: dark ? "#fff" : "#000", // Change the font color
        },
      },
      marker: {
        symbol: "circle", // Make the legend markers circular
      },
    },
    yAxis: {
      label: {
        formatter: (text) => (text === '0' ? ' ' : text), // Hide "0" by setting its label to a space
      },
      grid: {
        line: {
          style: {
            stroke: dark ? "#1F2329" : "#e4e4e4", // Change this to the color you prefer
          },
        },
      },
    },
    color: ["#38F8AC", "#FF465C", "#9963FE", "#F8B738", "#FF46CB"],
    areaStyle: (e) => {
      console.log(e, 141132534242);
      if (e.name === "Optimizations") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#38F8AC80 1:#38F8AC",
        };
      } else if (e.name === "Purge/Invalidate Requests") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#FF465C80 1:#FF465C",
        };
      } else if (e.name === "Tag Create Requests") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#9963FE80 1:#9963FE",
        };
      } else if (e.name === "Tag Delete Requests") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#F8B73880 1:#F8B738",
        };
      } else if (e.name === "Failure") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#FF46CB80 1:#FF46CB",
        };
      }
    },
    // smooth: true,
    // // @TODO 后续会换一种动画方式
    // xAxis: {
    //   range: [0, 1],
    //   tickCount: 5,
    // },
    // animation: {
    //   appear: {
    //     animation: "path-in",
    //     duration: 5000,
    //   },
    // },
  };

  return <Area {...config} />;
};

export default Chart4;
