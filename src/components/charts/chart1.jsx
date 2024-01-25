import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import { Line } from "@ant-design/plots";
import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { GetAxiosConfig,PostAxiosConfig } from "../../utils/axiosConfig.js";

const DemoLine = () => {
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
        
        // console.log("pageViews",pageViews)
        // const updatedData = pageViews.map((item, i) => {
        //   return { name: "Page Views", month: i, gdp: 1 };
        // });
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

  // [
  //   { name: "Page Views", year: 0, gdp: 100 },
  //   { name: "Page Views", year: 1, gdp: 200 },
    
  // ]

  useEffect(() => {
    const fetchData = async () => {
      await fetchPageViewData();
    };
    fetchData();
  }, []);


 
  // useEffect(() => {
  //   // Fixing the code
  //   if(pageViewData?.length){
  //   const updatedData = pageViewData.map((item) => {
  //     return { name: "Page Views", year: item.year, gdp: item.gdp };
  //   });
  //   setData(updatedData);
  // }
  // }, [pageViewData])
  
  
  const dark = useSelector((state) => state.home.dark);
  const config = {
    data,
    xField: "year",
    yField: "gdp",
    xAxis: {
      tickLine: { length: 0 },
      range: [1, 30], // Adjust the range to be from 1 to 30
      label: {
        formatter: (text) => `${parseInt(text)}`, // Remove +1 as the range is already from 1 to 30
      },
      tickCount: data.length,
      nice: true,
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