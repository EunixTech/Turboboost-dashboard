import React from "react";

const IntegrationButton = ({ onClick, dark, text, backgroundColor, borderColor }) => (
  <div
    onClick={onClick}
    className={`w-[100px] bg-${backgroundColor} h-[32px] cursor-pointer rounded-[4px] border-[1px] border-${borderColor} flex items-center justify-center`}
  >
    <p
      className={`text-${dark ? "#fff" : "#000"} f2 text-[12px] border-[1px] border-${borderColor} bg-${dark ? "#111317" : "#fff"} rounded-[4px] active:translate-y-[0px] hover:font-bold active:border-0 translate-y-[-2px] translate-x-[1px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium`}
    >
      {text}
    </p>
  </div>
);

export default IntegrationButton;
