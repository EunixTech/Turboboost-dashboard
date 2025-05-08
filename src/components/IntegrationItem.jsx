import React, { useState } from "react";
import IntegrationButton from "./button/IntegrationButton";

const IntegrationItem = ({ connectClick, src, title, sub, connected, dark }) => {
  const [hover, setHover] = useState(false);

  const buttonProps = {
    onClick: connectClick,
    dark,
    text: connected ? "Disconnect" : "Connect",
    backgroundColor: connected ? "#FF465C" : "#38F8AC",
    borderColor: dark ? "#1F2329" : "#ebebeb",
  };

  return (
    <div
      style={{
        backgroundColor: dark ? "#111317" : "#fff",
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="px-[15px] bg-[#fff] border-[1px] border-[#ebebeb] rounded-[9px] py-[18px] h-[190px] "
    >
      <div className="flex justify-between w-[100%]">
        <img src={src} className="w-[50px] rounded-[7px]" alt="" />
        <IntegrationButton {...buttonProps} />
      </div>
      <h1
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="text-[20px] font-bold tracking-wide mt-[10px] items-center flex"
      >
        {title}{" "}
        {connected && (
          <div
            className="h-[22px] flex items-center px-[9.5px] ml-[8px] justify-between rounded-[23px]"
            style={{
              backgroundColor: "#38f8ab31",
            }}
          >
            <p
              className="text-[14px] translate-y-[-1px] tracking-wide "
              style={{
                color: "#0FE38F",
              }}
            >
              Connected
            </p>
          </div>
        )}
      </h1>
      <p
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="text-[14px] font-bold text-[#0a0a1876] tracking-wide mt-[2px]"
      >
        {sub}
      </p>
    </div>
  );
};

export default IntegrationItem;
