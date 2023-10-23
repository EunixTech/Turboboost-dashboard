import React, { useState } from "react";
import Status from "./Status";
import { useSelector } from "react-redux";
import CheckBox from "./CheckBox";
const TableItem = ({ last, change, selected }) => {
    const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
        color: dark ? "#fff" : "#000",
      }}
      className="w-[100%] flex h-[70px] border-b-[1px] border-[#ebebeb]"
    >
      <div className="w-[7%]  px-[10px] items-center flex h-[100%] ">
        <CheckBox check={selected} setCheck={setCheck} change={change} />
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[27%] pr-[10px] text-[14px] hover:underline cursor-pointer leading-[16px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
      >
        http://txtcartapp.com/sms-library/sms-marketing-calendar-for-ecommerce-may-2022/
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[11%]  text-[14px] tracking-wide text-[#000] font-bold  flex h-[100%] items-center"
      >
        Desktop
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[28%]  text-[14px] tracking-wide text-[#000] font-bold  flex h-[100%] items-center"
      >
        Author:1, pageType:sms:library,{" "}
        <span className="text-[#0a0a1876] ml-[3px]">more...</span>
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[9%]  text-[14px] tracking-wide text-[#000] font-bold  flex h-[100%] items-center"
      >
        05/23/23
      </div>
      <div className="w-[9%]  text-[10px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center">
        <Status i={1} />
      </div>
      <div className="w-[9%]  text-[10px] tracking-wide px-[10px] cursor-pointer text-[#0a0a1876] font-bold  flex h-[100%] items-center">
        <img
          src="/graphic/status/trash.svg"
          className="w-[15px] h-[15px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default TableItem;
