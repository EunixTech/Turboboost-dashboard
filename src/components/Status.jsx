import React from "react";
import HeaderItem from "./HeaderItem";

const Status = ({ i }) => {
  return (
    <div
    className="h-[22px] flex items-center px-[9.5px] justify-between rounded-[23px] "
    style={{
      backgroundColor:
        i === 1 ? "#38f8ab31" : i === 2 ? "#ffcc6538" : "#ff465c38",
    }}
  >
    <div
      className="w-[6px] h-[6px] shrink-0 rounded-[50%]"
      style={{
        backgroundColor:
          i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
      }}
    ></div>
    <p
      className="text-[11px] tracking-wide ml-[5px]"
      style={{
        color: i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
      }}
    >
      {i === 1 ? "Optimized" : i === 2 ? "Incomplete" : "Disconnected"}
    </p>
  </div>
  );
};

export default Status;
