import React from 'react';
import { useSelector } from "react-redux";

export default function CircularProgressBar({ percentage = " ", title = " ", margin = "20px", mr }) {

    const radius = 45; 
    const centerX = 50;
    const centerY = 50;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = ((100 - percentage) / 100) * circumference;
    const dark = useSelector((state) => state.home.dark);

    return (
        <div
          style={{
            marginRight: mr,
          }}
          className="w-[70px] sm:w-[90px] relative h-[70px] sm:h-[90px] p-[2px] "
        >
          <div
            style={{
              color: dark ? "#0ccf68" : "#0ccf68",
              fontSize: "16px",
            }}
            className="w-[100%] h-[100%] font-medium relative z-0 rounded-[50%] bg-[#0ccf6718] flex items-center justify-center text-[20px] sm:text-[24px] "
          >
            {percentage}
          </div>
          <div
            style={{
              color: dark ? "#fff" : "#000",
              fontSize: "12px",
            }}
            className="w-[90px] sm:w-[120px] absolute font-medium text-center left-[-10px] top-[74px] sm:top-[98px] text-[12px] sm:text-[16px] font-medium"
          >
            {title}
          </div>
          <svg
            width="70"
            style={{
              transform: "rotateZ(-90deg)",
            }}
            className="absolute duration-100 z-10 top-0 left-0"
            height="70"
            viewBox="0 0 100 100"
          >
            <circle
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="transparent"
              strokeWidth="5" // Set the stroke width as needed
              stroke="#0ccf68" // Set the stroke color
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
            />
          </svg>
        </div>
    );
}
