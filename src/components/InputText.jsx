import React from "react";
import { useSelector } from "react-redux";

const InputText = ({ label }) => {
  const dark = useSelector((state) => state.home.dark);

  // Define CSS classes based on dark mode
  const containerClasses = `mobile:w-[100%] laptop:w-[19.5%] h-[100%] ${
    dark ? "divWrapperDarkMode" : "divWrapper"
  }`;

  const labelClasses = `text-[14px] font-bold tracking-wide ${
    dark ? "subHeadingDarkMode" : "subHeading"
  }`;

  const inputClasses = `w-[100%] border-[1px] outline-none bg-transparent ${
    dark ? "borderColorDarkMode" : "borderColor"
  } rounded-[4px] px-[10px] text-[12px] font-medium mt-[4px] h-[34px]`;

  return (
    <div className={containerClasses}>
      <p className={labelClasses}>{label}</p>
      <input type="text" className={inputClasses} />
    </div>
  );
};

export default InputText;
