import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";
import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";
const Chart2 = () => {
  const [data, setData] = useState([
    { name: "CDN Bandwidth (MiB)", year: 0, gdp: 900 },
    { name: "CDN Bandwidth (MiB)", year: 1, gdp: 1000 },
    { name: "CDN Bandwidth (MiB)", year: 2, gdp: 1600 },
    { name: "CDN Bandwidth (MiB)", year: 3, gdp: 2700 },
    { name: "CDN Bandwidth (MiB)", year: 4, gdp: 1200 },
    { name: "CDN Bandwidth (MiB)", year: 5, gdp: 1300 },
    { name: "CDN Bandwidth (MiB)", year: 6, gdp: 1980 },
    { name: "CDN Bandwidth (MiB)", year: 7, gdp: 3500 },
    { name: "CDN Bandwidth (MiB)", year: 8, gdp: 4500 },
    { name: "CDN Bandwidth (MiB)", year: 9, gdp: 3400 },
    { name: "CDN Bandwidth (MiB)", year: 10, gdp: 4500 },
    { name: "CDN Bandwidth (MiB)", year: 11, gdp: 2700 },
    { name: "CDN Bandwidth (MiB)", year: 12, gdp: 1500 },
    { name: "CDN Bandwidth (MiB)", year: 13, gdp: 2700 },
    { name: "CDN Bandwidth (MiB)", year: 14, gdp: 4500 },
    { name: "CDN Bandwidth (MiB)", year: 15, gdp: 1000 },
    { name: "CDN Bandwidth (MiB)", year: 16, gdp: 1200 },
    { name: "CDN Bandwidth (MiB)", year: 17, gdp: 2500 },
    { name: "CDN Bandwidth (MiB)", year: 18, gdp: 3800 },
    { name: "CDN Bandwidth (MiB)", year: 19, gdp: 4500 },
    { name: "CDN Bandwidth (MiB)", year: 20, gdp: 700 },
    { name: "CDN Bandwidth (MiB)", year: 21, gdp: 500 },
    { name: "CDN Bandwidth (MiB)", year: 22, gdp: 1500 },
    { name: "CDN Bandwidth (MiB)", year: 23, gdp: 4500 },
    { name: "CDN Bandwidth (MiB)", year: 24, gdp: 500 },
    { name: "CDN Bandwidth (MiB)", year: 25, gdp: 4100 },
    { name: "CDN Bandwidth (MiB)", year: 26, gdp: 1500 },
    { name: "CDN Bandwidth (MiB)", year: 27, gdp: 1700 },
    { name: "CDN Bandwidth (MiB)", year: 28, gdp: 2500 },
    { name: "CDN Bandwidth (MiB)", year: 29, gdp: 3500 },
    { name: "CDN Bandwidth (MiB)", year: 30, gdp: 2500 },

    { name: "Pageviews", year: 0, gdp: 1800 },
    { name: "Pageviews", year: 1, gdp: 1900 },
    { name: "Pageviews", year: 2, gdp: 1600 },
    { name: "Pageviews", year: 3, gdp: 2700 },
    { name: "Pageviews", year: 4, gdp: 1300 },
    { name: "Pageviews", year: 5, gdp: 1980 },
    { name: "Pageviews", year: 6, gdp: 3500 },
    { name: "Pageviews", year: 7, gdp: 4500 },
    { name: "Pageviews", year: 8, gdp: 3400 },
    { name: "Pageviews", year: 9, gdp: 4500 },
    { name: "Pageviews", year: 10, gdp: 2500 },
    { name: "Pageviews", year: 11, gdp: 1500 },
    { name: "Pageviews", year: 12, gdp: 2700 },
    { name: "Pageviews", year: 13, gdp: 4500 },
    { name: "Pageviews", year: 14, gdp: 1000 },
    { name: "Pageviews", year: 15, gdp: 3500 },
    { name: "Pageviews", year: 16, gdp: 4100 },
    { name: "Pageviews", year: 17, gdp: 3800 },
    { name: "Pageviews", year: 18, gdp: 4500 },
    { name: "Pageviews", year: 19, gdp: 700 },
    { name: "Pageviews", year: 20, gdp: 1200 },
    { name: "Pageviews", year: 21, gdp: 500 },
    { name: "Pageviews", year: 22, gdp: 1500 },
    { name: "Pageviews", year: 23, gdp: 2700 },
    { name: "Pageviews", year: 24, gdp: 1200 },
    { name: "Pageviews", year: 25, gdp: 500 },
    { name: "Pageviews", year: 26, gdp: 4500 },
    { name: "Pageviews", year: 27, gdp: 1700 },
    { name: "Pageviews", year: 28, gdp: 2500 },
    { name: "Pageviews", year: 29, gdp: 2500 },
    { name: "Pageviews", year: 30, gdp: 1500 },
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
    color: ["#38F8AC", "#9866FD"],
    areaStyle: (e) => {
      console.log(e, 141132534242);
      if (e.name === "CDN Bandwidth (MiB)") {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#38F8AC80 1:#38F8AC",
        };
      } else {
        return {
          fill: "l(270) 0:#ffffff50 0.5:#9866FD80 1:#9866FD",
        };
      }
    },
    // smooth: true,
    // // @TODO 后续会换一种动画方式
    // animation: {
    //   appear: {
    //     animation: "path-in",
    //     duration: 5000,
    //   },
    // },
  };

  return <Area {...config} />;
};

export default Chart2;
