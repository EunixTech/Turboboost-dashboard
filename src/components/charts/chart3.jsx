import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";
import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";
const Chart3 = () => {
  const [data, setData] = useState([
    { name: "Images", year: 0, gdp: 900 },
    { name: "Images", year: 1, gdp: 1000 },
    { name: "Images", year: 2, gdp: 1600 },
    { name: "Images", year: 3, gdp: 2700 },
    { name: "Images", year: 4, gdp: 1200 },
    { name: "Images", year: 5, gdp: 1300 },
    { name: "Images", year: 6, gdp: 1980 },
    { name: "Images", year: 7, gdp: 3500 },
    { name: "Images", year: 8, gdp: 4500 },
    { name: "Images", year: 9, gdp: 3400 },
    { name: "Images", year: 10, gdp: 4500 },
    { name: "Images", year: 11, gdp: 2700 },
    { name: "Images", year: 12, gdp: 1500 },
    { name: "Images", year: 13, gdp: 2700 },
    { name: "Images", year: 14, gdp: 4500 },
    { name: "Images", year: 15, gdp: 1000 },
    { name: "Images", year: 16, gdp: 1200 },
    { name: "Images", year: 17, gdp: 2500 },
    { name: "Images", year: 18, gdp: 3800 },
    { name: "Images", year: 19, gdp: 4500 },
    { name: "Images", year: 20, gdp: 700 },
    { name: "Images", year: 21, gdp: 500 },
    { name: "Images", year: 22, gdp: 1500 },
    { name: "Images", year: 23, gdp: 4500 },
    { name: "Images", year: 24, gdp: 500 },
    { name: "Images", year: 25, gdp: 4100 },
    { name: "Images", year: 26, gdp: 1500 },
    { name: "Images", year: 27, gdp: 1700 },
    { name: "Images", year: 28, gdp: 2500 },
    { name: "Images", year: 29, gdp: 3500 },
    { name: "Images", year: 30, gdp: 2500 },

    { name: "CSS", year: 0, gdp: 1700 },
    { name: "CSS", year: 1, gdp: 1900 },
    { name: "CSS", year: 2, gdp: 1600 },
    { name: "CSS", year: 3, gdp: 2700 },
    { name: "CSS", year: 4, gdp: 1300 },
    { name: "CSS", year: 5, gdp: 1980 },
    { name: "CSS", year: 6, gdp: 3500 },
    { name: "CSS", year: 7, gdp: 4500 },
    { name: "CSS", year: 8, gdp: 3400 },
    { name: "CSS", year: 9, gdp: 4500 },
    { name: "CSS", year: 10, gdp: 2500 },
    { name: "CSS", year: 11, gdp: 1500 },
    { name: "CSS", year: 12, gdp: 2700 },
    { name: "CSS", year: 13, gdp: 4500 },
    { name: "CSS", year: 14, gdp: 1000 },
    { name: "CSS", year: 15, gdp: 3500 },
    { name: "CSS", year: 16, gdp: 4100 },
    { name: "CSS", year: 17, gdp: 3800 },
    { name: "CSS", year: 18, gdp: 4500 },
    { name: "CSS", year: 19, gdp: 700 },
    { name: "CSS", year: 20, gdp: 1200 },
    { name: "CSS", year: 21, gdp: 500 },
    { name: "CSS", year: 22, gdp: 1500 },
    { name: "CSS", year: 23, gdp: 2700 },
    { name: "CSS", year: 24, gdp: 1200 },
    { name: "CSS", year: 25, gdp: 500 },
    { name: "CSS", year: 26, gdp: 4500 },
    { name: "CSS", year: 27, gdp: 1700 },
    { name: "CSS", year: 28, gdp: 2500 },
    { name: "CSS", year: 29, gdp: 2500 },
    { name: "CSS", year: 30, gdp: 1500 },

    { name: "JS", year: 0, gdp: 100 },
    { name: "JS", year: 1, gdp: 200 },
    { name: "JS", year: 2, gdp: 400 },
    { name: "JS", year: 3, gdp: 1500 },
    { name: "JS", year: 4, gdp: 1200 },
    { name: "JS", year: 5, gdp: 1100 },
    { name: "JS", year: 6, gdp: 980 },
    { name: "JS", year: 7, gdp: 2520 },
    { name: "JS", year: 8, gdp: 100 },
    { name: "JS", year: 9, gdp: 5400 },
    { name: "JS", year: 10, gdp: 1500 },
    { name: "JS", year: 11, gdp: 4700 },
    { name: "JS", year: 12, gdp: 3512 },
    { name: "JS", year: 13, gdp: 2734 },
    { name: "JS", year: 14, gdp: 4420 },
    { name: "JS", year: 15, gdp: 3410 },
    { name: "JS", year: 16, gdp: 2200 },
    { name: "JS", year: 17, gdp: 4500 },
    { name: "JS", year: 18, gdp: 1820 },
    { name: "JS", year: 19, gdp: 4100 },
    { name: "JS", year: 20, gdp: 1700 },
    { name: "JS", year: 21, gdp: 4800 },
    { name: "JS", year: 22, gdp: 1100 },
    { name: "JS", year: 23, gdp: 4100 },
    { name: "JS", year: 24, gdp: 1500 },
    { name: "JS", year: 25, gdp: 100 },
    { name: "JS", year: 26, gdp: 200 },
    { name: "JS", year: 27, gdp: 700 },
    { name: "JS", year: 28, gdp: 500 },
    { name: "JS", year: 29, gdp: 3500 },
    { name: "JS", year: 30, gdp: 4500 },

    { name: "Fonts", year: 0, gdp: 4000 },
    { name: "Fonts", year: 1, gdp: 4100 },
    { name: "Fonts", year: 2, gdp: 4500 },
    { name: "Fonts", year: 3, gdp: 2300 },
    { name: "Fonts", year: 4, gdp: 100 },
    { name: "Fonts", year: 5, gdp: 2980 },
    { name: "Fonts", year: 6, gdp: 3500 },
    { name: "Fonts", year: 7, gdp: 4400 },
    { name: "Fonts", year: 8, gdp: 3500 },
    { name: "Fonts", year: 9, gdp: 400 },
    { name: "Fonts", year: 10, gdp: 500 },
    { name: "Fonts", year: 11, gdp: 200 },
    { name: "Fonts", year: 12, gdp: 700 },
    { name: "Fonts", year: 13, gdp: 500 },
    { name: "Fonts", year: 14, gdp: 1300 },
    { name: "Fonts", year: 15, gdp: 3200 },
    { name: "Fonts", year: 16, gdp: 4400 },
    { name: "Fonts", year: 17, gdp: 3200 },
    { name: "Fonts", year: 18, gdp: 4100 },
    { name: "Fonts", year: 19, gdp: 1700 },
    { name: "Fonts", year: 20, gdp: 1200 },
    { name: "Fonts", year: 21, gdp: 2000 },
    { name: "Fonts", year: 22, gdp: 2100 },
    { name: "Fonts", year: 23, gdp: 2200 },
    { name: "Fonts", year: 24, gdp: 800 },
    { name: "Fonts", year: 25, gdp: 400 },
    { name: "Fonts", year: 26, gdp: 500 },
    { name: "Fonts", year: 27, gdp: 700 },
    { name: "Fonts", year: 28, gdp: 500 },
    { name: "Fonts", year: 29, gdp: 4500 },
    { name: "Fonts", year: 30, gdp: 1500 },

    { name: "Others", year: 0, gdp: 2211 },
    { name: "Others", year: 1, gdp: 2311 },
    { name: "Others", year: 2, gdp: 1211 },
    { name: "Others", year: 3, gdp: 2700 },
    { name: "Others", year: 4, gdp: 1220 },
    { name: "Others", year: 5, gdp: 4330 },
    { name: "Others", year: 6, gdp: 1980 },
    { name: "Others", year: 7, gdp: 3230 },
    { name: "Others", year: 8, gdp: 1510 },
    { name: "Others", year: 9, gdp: 2300 },
    { name: "Others", year: 10, gdp: 1500 },
    { name: "Others", year: 11, gdp: 1700 },
    { name: "Others", year: 12, gdp: 1300 },
    { name: "Others", year: 13, gdp: 4700 },
    { name: "Others", year: 14, gdp: 2500 },
    { name: "Others", year: 15, gdp: 4010 },
    { name: "Others", year: 16, gdp: 2200 },
    { name: "Others", year: 17, gdp: 2300 },
    { name: "Others", year: 18, gdp: 3400 },
    { name: "Others", year: 19, gdp: 3200 },
    { name: "Others", year: 20, gdp: 1700 },
    { name: "Others", year: 21, gdp: 2500 },
    { name: "Others", year: 22, gdp: 3500 },
    { name: "Others", year: 23, gdp: 1500 },
    { name: "Others", year: 24, gdp: 2100 },
    { name: "Others", year: 25, gdp: 1100 },
    { name: "Others", year: 26, gdp: 2500 },
    { name: "Others", year: 27, gdp: 3700 },
    { name: "Others", year: 28, gdp: 1500 },
    { name: "Others", year: 29, gdp: 4500 },
    { name: "Others", year: 30, gdp: 1500 },
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
      if (e.name === "Images") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#38F8AC80 1:#38F8AC",
        };
      } else if (e.name === "CSS") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#FF465C80 1:#FF465C",
        };
      } else if (e.name === "JS") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#9963FE80 1:#9963FE",
        };
      } else if (e.name === "Fonts") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#F8B73880 1:#F8B738",
        };
      } else if (e.name === "Others") {
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

export default Chart3;
