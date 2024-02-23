import React, { useState, useEffect } from "react";

import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { GetAxiosConfig } from "../../utils/axiosConfig.js";

const DemoLine = ({ currMonth }) => {
  const [data, setData] = useState([]);

  // const fetchPageViewData = async () => {
  //   try {
  //     toogleLoadingAPI(true)
  //     const res = await GetAxiosConfig(`api/dashboard/fetch-page-views-data`);
  //     const resJSON = res?.data;

  //     if (resJSON.status === 200) {
  //       toogleLoadingAPI(false)
  //       const pageViews = resJSON?.pageViewsArr;
  //       updateLength(pageViews?.length)
  //       if(currMonth === 1){
  //         setData([
  //           { name: "Page Views", year: 0, gdp: 0 },
  //           { name: "Page Views", year: 1, gdp: pageViews?.length },
  //           { name: "Page Views", year: 2, },
  //           { name: "Page Views", year: 3, },
  //           { name: "Page Views", year: 4, },
  //           { name: "Page Views", year: 5, },
  //           { name: "Page Views", year: 6, },
  //           { name: "Page Views", year: 7, },
  //           { name: "Page Views", year: 8, },
  //           { name: "Page Views", year: 9, },
  //           { name: "Page Views", year: 10, },
  //           { name: "Page Views", year: 11, },
  //           { name: "Page Views", year: 12, },
  //           { name: "Page Views", year: 13, },
  //           { name: "Page Views", year: 14, },
  //           { name: "Page Views", year: 15, },
  //           { name: "Page Views", year: 16, },
  //           { name: "Page Views", year: 17, },
  //           { name: "Page Views", year: 18, },
  //           { name: "Page Views", year: 19, },
  //           { name: "Page Views", year: 20, },
  //           { name: "Page Views", year: 21, },
  //           { name: "Page Views", year: 22, },
  //           { name: "Page Views", year: 23, },
  //           { name: "Page Views", year: 24, },
  //           { name: "Page Views", year: 25, },
  //           { name: "Page Views", year: 26, },
  //           { name: "Page Views", year: 27, },
  //           { name: "Page Views", year: 28, },

  //         ]);
  //       } else if(currMonth === 2) {
  //         setData([
  //           { name: "Page Views", year: 0},
  //           { name: "Page Views", year: 1 },
  //           { name: "Page Views", year: 2, },
  //           { name: "Page Views", year: 3, },
  //           { name: "Page Views", year: 4, },
  //           { name: "Page Views", year: 5, },
  //           { name: "Page Views", year: 6, },
  //           { name: "Page Views", year: 7, },
  //           { name: "Page Views", year: 8, },
  //           { name: "Page Views", year: 9, },
  //           { name: "Page Views", year: 10, },
  //           { name: "Page Views", year: 11, },
  //           { name: "Page Views", year: 12, },
  //           { name: "Page Views", year: 13, },
  //           { name: "Page Views", year: 14, },
  //           { name: "Page Views", year: 15, },
  //           { name: "Page Views", year: 16, },
  //           { name: "Page Views", year: 17, },
  //           { name: "Page Views", year: 18, },
  //           { name: "Page Views", year: 19, },
  //           { name: "Page Views", year: 20, },
  //           { name: "Page Views", year: 21, },
  //           { name: "Page Views", year: 22, },
  //           { name: "Page Views", year: 23, },
  //           { name: "Page Views", year: 24, },
  //           { name: "Page Views", year: 25, },
  //           { name: "Page Views", year: 26, },
  //           { name: "Page Views", year: 27, },
  //           { name: "Page Views", year: 28, },
  //           { name: "Page Views", year: 29, },
  //           { name: "Page Views", year: 30, },
  //         ]);
  //       } else {
  //         setData([
  //           { name: "Page Views", year: 0},
  //           { name: "Page Views", year: 1 },
  //           { name: "Page Views", year: 2, },
  //           { name: "Page Views", year: 3, },
  //           { name: "Page Views", year: 4, },
  //           { name: "Page Views", year: 5, },
  //           { name: "Page Views", year: 6, },
  //           { name: "Page Views", year: 7, },
  //           { name: "Page Views", year: 8, },
  //           { name: "Page Views", year: 9, },
  //           { name: "Page Views", year: 10, },
  //           { name: "Page Views", year: 11, },
  //           { name: "Page Views", year: 12, },
  //           { name: "Page Views", year: 13, },
  //           { name: "Page Views", year: 14, },
  //           { name: "Page Views", year: 15, },
  //           { name: "Page Views", year: 16, },
  //           { name: "Page Views", year: 17, },
  //           { name: "Page Views", year: 18, },
  //           { name: "Page Views", year: 19, },
  //           { name: "Page Views", year: 20, },
  //           { name: "Page Views", year: 21, },
  //           { name: "Page Views", year: 22, },
  //           { name: "Page Views", year: 23, },
  //           { name: "Page Views", year: 24, },
  //           { name: "Page Views", year: 25, },
  //           { name: "Page Views", year: 26, },
  //           { name: "Page Views", year: 27, },
  //           { name: "Page Views", year: 28, },
  //           { name: "Page Views", year: 29, },
  //         ]);
  //       }

  //     } else {
  //       toogleLoadingAPI(false);
  //       return toast.error("Please try again");
  //     }
  //   } catch (error) {
  //     toogleLoadingAPI(false);
  //   }
  // };

  const fetchPageViewData = async () => {
    try {
      const res = await GetAxiosConfig(`api/dashboard/fetch-page-views-graph-data`);
      const resJSON = res?.data;

      if (resJSON.status === 200) {
        const pageViews = resJSON?.pageViewsArr;
        if (currMonth === 1) {
          setData(pageViews)
        } else {
          setData([
            { name: "Page Views", year: 0 },
            { name: "Page Views", year: 1 },
            { name: "Page Views", year: 2, },
            { name: "Page Views", year: 3, },
            { name: "Page Views", year: 4, },
            { name: "Page Views", year: 5, },
            { name: "Page Views", year: 6, },
            { name: "Page Views", year: 7, },
            { name: "Page Views", year: 8, },
            { name: "Page Views", year: 9, },
            { name: "Page Views", year: 10, },
            { name: "Page Views", year: 11, },
            { name: "Page Views", year: 12, },
            { name: "Page Views", year: 13, },
            { name: "Page Views", year: 14, },
            { name: "Page Views", year: 15, },
            { name: "Page Views", year: 16, },
            { name: "Page Views", year: 17, },
            { name: "Page Views", year: 18, },
            { name: "Page Views", year: 19, },
            { name: "Page Views", year: 20, },
            { name: "Page Views", year: 21, },
            { name: "Page Views", year: 22, },
            { name: "Page Views", year: 23, },
            { name: "Page Views", year: 24, },
            { name: "Page Views", year: 25, },
            { name: "Page Views", year: 26, },
            { name: "Page Views", year: 27, },
            { name: "Page Views", year: 28, },
            { name: "Page Views", year: 29, },
            { name: "Page Views", year: 30, },
          ]);
        }
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
  }, [currMonth]);


  const dark = useSelector((state) => state.home.dark);
  const config = {
    data,
    xField: "day",
    yField: "count",
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
          marginTop: "-80px",
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
        formatter: (text) => `${parseInt(text)}`,
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
      };
    },
    color: ["#38F8AC"],
  };

  return <Area {...config} />;
};

export default DemoLine;



