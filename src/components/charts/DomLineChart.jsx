import React from "react";
import { Area } from "@ant-design/plots";
import { useSelector } from "react-redux";
import domLineChartDataArr from "../../static/domLineChartData";

export default function DomLineChart() {
    
    const dark = useSelector((state) => state.home.dark);

    const config = {
        data: domLineChartDataArr,
        xField: "year",
        yField: "gdp",
        xAxis: {
            tickLine: { length: 0 },
            range: [0, 1],
            label: {
                formatter: (text) => `${parseInt(text) + 1}`, // Add 1 to the x-axis label
            },
            tickCount: domLineChartDataArr.length, // Ensure there's a tick for each data point
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

    };

    return <Area {...config} />;
}
