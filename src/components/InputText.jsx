import React from "react";
import { useSelector } from "react-redux";

const InputText = ({ label, dark }) => {
  return (
    <div className="mobile:w-[100%] laptop:w-[19.5%] h-[100%]">
      <p
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="text-[14px] font-bold tracking-wide text-[#0a0a187a]"
      >
        {label}
      </p>
      <input
        style={{
          color: dark ? "#fff" : "#000",
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        type="text"
        className="w-[100%] border-[1px] outline-none bg-transparent border-[#ebebeb] rounded-[4px] px-[10px] text-[12px] font-medium mt-[4px] h-[34px]"
      />
    </div>
  );
};

export default InputText;
