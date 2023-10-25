import React from 'react';
import { useSelector } from "react-redux";
import { ReactComponent as CricleIcon } from '../svgIcons/progressBar.svg';

export default function CircularProgressBar({ percentage = " ", title = " ", margin = "20px" }) {

    const radius = 45;

    const circumference = 2 * Math.PI * radius,
        dashOffset = ((100 - percentage) / 100) * circumference,
        dark = useSelector((state) => state.home.dark);

    return (
        <div style={{ marginRight: margin = "" }} className="w-[70px]  relative  h-[70px] p-[2px] ">
            <div style={{ color: dark ? "#0ccf68" : "#0ccf68" }} className="w-[100%] h-[100%] font-medium relative z-0 rounded-[50%]  bg-[#0ccf6718] flex items-center justify-center text-[20px] ">
                {percentage}
            </div>

            <div style={{ color: dark ? "#fff" : "#000" }} className="w-[90px] absolute font-medium text-center left-[-10px]  top-[74px] text-[12px] font-medium">
                {title}
            </div>

            <CricleIcon dashOffset={dashOffset} circumference={circumference} radius={radius} style={{ transform: " rotateZ(-90deg)" }} />
        </div>
    )
}
