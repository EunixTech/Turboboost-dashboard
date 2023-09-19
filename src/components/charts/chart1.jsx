import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import { Line } from "@ant-design/plots";
import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";

const DemoLine = () => {
  const [data, setData] = useState([
    { name: "Page Views", year: 0, gdp: 100 },
    { name: "Page Views", year: 1, gdp: 200 },
    { name: "Page Views", year: 2, gdp: 100 },
    { name: "Page Views", year: 3, gdp: 900 },
    { name: "Page Views", year: 4, gdp: 200 },
    { name: "Page Views", year: 5, gdp: 300 },
    { name: "Page Views", year: 6, gdp: 980 },
    { name: "Page Views", year: 7, gdp: 500 },
    { name: "Page Views", year: 8, gdp: 500 },
    { name: "Page Views", year: 9, gdp: 400 },
    { name: "Page Views", year: 10, gdp: 500 },
    { name: "Page Views", year: 11, gdp: 700 },
    { name: "Page Views", year: 12, gdp: 500 },
    { name: "Page Views", year: 13, gdp: 700 },
    { name: "Page Views", year: 14, gdp: 500 },
    { name: "Page Views", year: 15, gdp: 100 },
    { name: "Page Views", year: 16, gdp: 200 },
    { name: "Page Views", year: 17, gdp: 500 },
    { name: "Page Views", year: 18, gdp: 800 },
    { name: "Page Views", year: 19, gdp: 500 },
    { name: "Page Views", year: 20, gdp: 700 },
    { name: "Page Views", year: 21, gdp: 500 },
    { name: "Page Views", year: 22, gdp: 500 },
    { name: "Page Views", year: 23, gdp: 500 },
    { name: "Page Views", year: 24, gdp: 500 },
    { name: "Page Views", year: 25, gdp: 100 },
    { name: "Page Views", year: 26, gdp: 500 },
    { name: "Page Views", year: 27, gdp: 700 },
    { name: "Page Views", year: 28, gdp: 500 },
    { name: "Page Views", year: 29, gdp: 500 },
    { name: "Page Views", year: 30, gdp: 500 },

    { name: "CDN Usage", year: 0, gdp: 700 },
    { name: "CDN Usage", year: 1, gdp: 900 },
    { name: "CDN Usage", year: 2, gdp: 600 },
    { name: "CDN Usage", year: 3, gdp: 1700 },
    { name: "CDN Usage", year: 4, gdp: 1300 },
    { name: "CDN Usage", year: 5, gdp: 980 },
    { name: "CDN Usage", year: 6, gdp: 500 },
    { name: "CDN Usage", year: 7, gdp: 500 },
    { name: "CDN Usage", year: 8, gdp: 400 },
    { name: "CDN Usage", year: 9, gdp: 1500 },
    { name: "CDN Usage", year: 10, gdp: 1500 },
    { name: "CDN Usage", year: 11, gdp: 1500 },
    { name: "CDN Usage", year: 12, gdp: 1700 },
    { name: "CDN Usage", year: 13, gdp: 1500 },
    { name: "CDN Usage", year: 14, gdp: 1000 },
    { name: "CDN Usage", year: 15, gdp: 500 },
    { name: "CDN Usage", year: 16, gdp: 100 },
    { name: "CDN Usage", year: 17, gdp: 800 },
    { name: "CDN Usage", year: 18, gdp: 1500 },
    { name: "CDN Usage", year: 19, gdp: 700 },
    { name: "CDN Usage", year: 20, gdp: 1200 },
    { name: "CDN Usage", year: 21, gdp: 500 },
    { name: "CDN Usage", year: 22, gdp: 1500 },
    { name: "CDN Usage", year: 23, gdp: 1700 },
    { name: "CDN Usage", year: 24, gdp: 1200 },
    { name: "CDN Usage", year: 25, gdp: 500 },
    { name: "CDN Usage", year: 26, gdp: 500 },
    { name: "CDN Usage", year: 27, gdp: 1700 },
    { name: "CDN Usage", year: 28, gdp: 1500 },
    { name: "CDN Usage", year: 29, gdp: 500 },
    { name: "CDN Usage", year: 30, gdp: 1500 },
  ]);

  const dark = useSelector((state) => state.home.dark);
  const config = {
    data,
    xField: "year",
    yField: "gdp",
    xAxis: {
      tickLine: { length: 0 },
      range: [0, 1],
      label: {
        formatter: (text) => `${parseInt(text) + 1}`, // Add 1 to the x-axis label
      },
      tickCount: data.length, // Ensure there's a tick for each data point
      nice: true, //
    },
    seriesField: "name",
    isStack: false,
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
    areaStyle: (e) => {
      console.log(e, 141132534242);
      if (e.name === "CDN Usage") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#D2D2D280 1:#D2D2D2",
        };
      } else {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#38F8AC80 1:#38F8AC",
        };
      }
    },

    color: ["#38F8AC", "#D2D2D2"],
    // smooth: true,
    // @TODO 后续会换一种动画方式
    // animation: {
    //   appear: {
    //     animation: "path-in",
    //     duration: 5000,
    //   },
    // },
  };

  return <Area {...config} />;
};

export default DemoLine;
