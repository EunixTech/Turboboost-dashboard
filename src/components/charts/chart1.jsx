import React, { useState, useEffect } from "react";

import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { GetAxiosConfig } from "../../utils/axiosConfig.js";

const DemoLine = () => {
  const [data, setData] = useState([]);

  const fetchPageViewData = async () => {
    try {
      const res = await GetAxiosConfig(`api/dashboard/fetch-page-views-graph-data`);
      const resJSON = res?.data;

      if (resJSON.status === 200) {
        const pageViews = resJSON?.pageViewsArr;
        setData(pageViews)
      } else {
        return toast.error("Please try again");
      }
    } catch (error) {
       return toast.error("Please try again");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPageViewData();
    };
    fetchData();
  }, []);


  const dark = useSelector((state) => state.home.dark);
 
  const config = {
    data,
    xField: "day",
    yField: "count",
    xAxis: {
      min:1,
      tickLine: { length: 1 },
      range: [0, 1],
      label: {
        formatter: (text) => `${parseInt(text)}`, // Add 1 to the x-axis label
      },
      tickCount: data.length+1, // Ensure there's a tick for each data point
      nice: true, //
      width: "30px", // Add width for xAxis 80%
    },
    seriesField: "name",
    isStack: false,
    legend: {
      position: "top-right",
      itemName: {
        style: {
          marginTop:"-80px",
          fontWeight: "500",
          fill: dark ? "#fff" : "#000", // Change the font color
        },
      },
      marker: {
        symbol: "circle", // Make the legend markers circular
      },
    },
    yAxis: {
      tickLine: { length: 0 },
      range: [0, 1],
       nice: true, //
      label: {
        formatter: (text) => `${parseInt(text) }`,
      },
      tickCount: 5, // Ensure at least 5 ticks on the y-axis
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
    return {
      fill: "l(270) 0:#ffffff50 0.5:#38F8AC80 1:#38F8AC",
      width: "70%", // Add width 90%
    };
  },
    color: ["#38F8AC"],
  };
  return <Area {...config} />;
};

export default DemoLine;



