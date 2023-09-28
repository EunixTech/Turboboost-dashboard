import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const InputDropdown = ({ label, list }) => {
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
  const dark = useSelector((state) => state.home.dark);

  return (
    <div className="mobile:w-[100%] laptop:w-[19.5%] h-[100%]">
      <p
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="text-[14px] font-bold tracking-wide  text-[#0a0a187a]"
      >
        {label}
      </p>
      <div
        style={{
          color: dark ? "#fff" : "#000",
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="w-[100%] relative     text-[12px] font-medium mt-[4px] h-[34px]"
      >
        <div
          onClick={() => {
            setClicked(true);
          }}
          style={{
            borderColor: dark ? "#1F2329" : "#ebebeb",
            borderRadius: clicked ? "4px 4px 0 0" : "4px 4px 4px 4px",
          }}
          className="w-[100%] cursor-pointer rounded-[4px] border-[1px] border-[#ebebeb] px-[10px] h-[34px] flex justify-between items-center"
        >
          <p
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[12px] font-bold tracking-wide  text-[#000]"
          >
            {list[curr]}
          </p>
          <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
        </div>
        {clicked && (
          <div
            style={{
              color: dark ? "#fff" : "#000",
              backgroundColor: dark ? "#111317" : "#fff",
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="w-[100%] min-h-[10px]  rounded-b-[4px] px-[0px] py-[5px] border-[1px] border-t-[0] border-[#ebebeb] absolute z-20  top-[33px] bg-[#fff]"
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
                  style={{
                    backgroundColor:
                      i === curr
                        ? dark
                          ? "#000"
                          : "#ebebeb"
                        : dark
                        ? "#111317"
                        : "#fff",
                  }}
                  onClick={() => {
                    setCurr(i);
                  }}
                  className="w-[100%] h-[34px]  flex items-center justify-center text-[11px] cursor-pointer"
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
