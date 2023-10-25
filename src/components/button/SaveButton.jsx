import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SaveButton({btnText = "", wrapperClasses = ""}) {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className={` ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}
      w-[130px]
      h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center ${wrapperClasses}`}
    >
      <p
        className={`text-[${false ? "#fff" : "#000"}]   f2 text-[12px]   ${
          dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
        } rounded-[4px] active:translate-y-[0px] active:border-0 hover:bg-[#2fe49c] translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-bold `}
      >
        {btnText}
      </p>
    </div>
  );
}
