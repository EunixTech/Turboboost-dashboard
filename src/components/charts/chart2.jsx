import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";
import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { GetAxiosConfig,PostAxiosConfig } from "../../utils/axiosConfig.js";

const Chart2 = () => {

  const [loadingAPI, toogleLoadingAPI] = useState(true);
  const [pageViewData, updatePageViewData] = useState([]);
  const [data, setData] = useState([]);

  const fetchPageViewData = async () => {
    try {
      toogleLoadingAPI(true)
      const res = await GetAxiosConfig(`api/dashboard/fetch-page-views-data`);
      const resJSON = res?.data;

      console.log("resJSONresJSONPagevView",resJSON)
 
      if (resJSON.status === 200) {
        toogleLoadingAPI(false)
        const pageViews = resJSON?.pageViewsArr;
       
        setData([{ name: "Page Views", year: 1, gdp: pageViews?.length },]);
        // updatePageViewData(pageViews);
      } else {
        toogleLoadingAPI(false);
        return toast.error("Please try again");
      }
    } catch (error) {
      toogleLoadingAPI(false);
      console.error("Error fetching user profile data:", error);
    }
  };

  // const [data, setData] = useState([
   
  //   { name: "Pageviews", year: 0, gdp: 1800 },

  // ]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchPageViewData();
    };
    fetchData();
  }, []);


 

  // const newData = pageViewArr.map((item, index) => ({
  //   name: "Page Views",
  //   year: index,
  //   gdp: item,
  // }));

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
        formatter: (text) => `${parseInt(text)}`, // Add 1 to the x-axis label
      },
      tickCount: data.length, // Ensure there's a tick for each data point
      nice: true, //
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
