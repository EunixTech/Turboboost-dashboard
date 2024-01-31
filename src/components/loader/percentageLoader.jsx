
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function PercentageLoader({percentage1 = 0}) {
  const [vidLoad, setVidLoad] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div
      style={{
        backgroundColor: dark ? "#090917" : "#fff",
      }}
      className="w-[100%] h-[100vh] bg-transparent flex items-center justify-center"
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div style={{ width: 70 }}>
          <CircularProgressbar styles={buildStyles({
            strokeLinecap: 'butt',
            textSize: '20px',
            pathTransitionDuration: 0.5,
            pathColor: `#38F8AC`,
            textColor: '#0a0a187e',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })} className="progressbar-div" value={percentage1} text={`${percentage1}%`} />
        </div>
        <p class="text-[#0a0a187e] mt-[5px] f2 text-[15px] font-medium">Please wait; we are optimizing your website.</p>
      </div>
    </div>
  )
}
