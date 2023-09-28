import React from "react";
import { useSelector } from "react-redux";

const HeaderItem = ({ color, title, sub, dark }) => {
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
        color: dark ? "#fff" : "#000",
      }}
      className="h-[70px] bg-[#e6e6e640] px-[12px] py-[12px] rounded-[6px] border-[1px] border-[#ebebeb]"
    >
      <div className="flex items-center">
        <div
          className="w-[8px] h-[8px] rounded-[50%]"
          style={{ backgroundColor: color }}
        ></div>
        <h1
          style={{
            color: dark ? "#ffffff74" : "#0a0a187e",
          }}
          className="text-[12px] font-bold ml-[4px] text-[#0a0a187a]"
        >
          {title}
        </h1>
      </div>
      <h1 className="text-[24px] mobile:mt-[2px] laptop:mt-[0px] font-bold tracking-wide ">
        {sub}
      </h1>
    </div>
  );
};

export default HeaderItem;
