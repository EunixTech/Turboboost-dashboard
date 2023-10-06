import React from 'react';
import { useSelector } from 'react-redux';

const Button2 = ({ onClick, check }) => {
    const dark = useSelector((state) => state.home.dark);
    return (
      <div
        className={`w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}
  
          h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
      >
        <p
          style={{
            backgroundColor: check ? "#F87238" : "#FF465C",
          }}
          className={`text-[${true ? "#fff" : "#000"}]   f2 text-[12px]   ${
            dark ? "bg-[#000]" : "bg-[#000]"
          } rounded-[4px] hover:opacity-80 active:translate-y-[0px] pl-[6px] pr-[12px] hover:bg-[#333345] active:border-0 translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
        >
          <img
            src="/graphic/status/del.svg"
            className="w-[12px] ml-[6px] mr-[6px] translate-y-[0px]"
            alt=""
          />{" "}
          <div className="translate-y-[1px]">
            {check ? "Purge Selected" : "Purge All Cache"}
          </div>
        </p>
      </div>
    );
  };

export default Button2;
