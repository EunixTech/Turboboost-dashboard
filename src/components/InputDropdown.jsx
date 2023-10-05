import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const InputDropdown = ({ label, list, dark }) => {
  const [curr, setCurr] = useState(0);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onpointerdown = () => {
      if (!hover) {
        setClicked(false);
      }
    };
    document.addEventListener("pointerdown", onpointerdown, false);
    return () => {
      document.removeEventListener("pointerdown", onpointerdown, false);
    };
  });

  return (
    <div className={`mobile:w-[100%] laptop:w-[19.5%] h-[100%] ${dark ? "divWrapperDarkMode" : "divWrapper"}`}>
      <p
        className={`text-[14px] font-bold tracking-wide ${dark ? "subHeadingDarkMode" : "subHeading"}`}
      >
        {label}
      </p>
      <div
        className={`w-[100%] relative text-[12px] font-medium mt-[4px] h-[34px] ${
          dark ? "backgroundDarkMode" : "background"
        } ${
          dark ? "borderColorDarkMode" : "borderColor"
        } ${clicked ? "rounded-[4px 4px 0 0]" : "rounded-[4px 4px 4px 4px]"}`}
      >
        <div
          onClick={() => {
            setClicked(true);
          }}
          className={`w-[100%] cursor-pointer rounded-[4px] border-[1px] ${
            dark ? "borderColorDarkMode" : "borderColor"
          } px-[10px] h-[34px] flex justify-between items-center`}
        >
          <p className={`text-[12px] font-bold tracking-wide ${dark ? "text-white" : "text-black"}`}>
            {list[curr]}
          </p>
          <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
        </div>
        {clicked && (
          <div
            className={`w-[100%] min-h-[10px] rounded-b-[4px] px-[0px] py-[5px] border-[1px] border-t-[0] absolute z-20 top-[33px] ${
              dark ? "backgroundDarkMode" : "background"
            } ${
              dark ? "borderColorDarkMode" : "borderColor"
            }`}
          >
            {list.map((item, i) => {
              return (
                <div
                  onMouseOver={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key={i}
                  onClick={() => {
                    setCurr(i);
                  }}
                  className={`w-[100%] h-[34px] flex items-center justify-center text-[11px] cursor-pointer ${
                    i === curr
                      ? dark
                        ? "bg-[#000]"
                        : "bg-[#ebebeb]"
                      : dark
                      ? "bg-[#111317]"
                      : "bg-[#fff]"
                  }`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputDropdown;
