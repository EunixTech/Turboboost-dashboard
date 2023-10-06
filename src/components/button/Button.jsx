import React from "react";
import { useSelector } from "react-redux";

const Button = ({ label, onClick, dark }) => {
  return (
    <div
      className={`w-[48%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"} h-[34px] mt-[20px] cursor-pointer rounded-[4px] flex items-center justify-center`}
      onClick={onClick}
    >
      <p
        className={`text-[${dark ? "#fff" : "#000"}] f2 text-[12px] ${
          dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
        } rounded-[4px] active:translate-y-[0px] hover:bg-[#2fe49c] active:border-0 translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium`}
      >
        {label}
      </p>
    </div>
  );
};

export default Button;
