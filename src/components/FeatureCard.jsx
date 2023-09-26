import React,{useState} from "react";
import useWidth from "../hooks/useWidth";
import ToggleButton from "./ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { setUpgradePopUpShow } from "../services/home";

export default function FeatureCard({ last, title, sub, h, p, drop = false, dropTitle, children }) {
  const [dropped, setDropped] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className="w-[100%] px-[15px]   border-t-[1px]"
      style={{
        borderColor: last ? "#ffffff00" : dark ? "#1F2329" : "#ebebeb",
        padding: "10px 15px 10px 15px",
      }}
    >
      <div
        className="w-[100%] flex items-center "
        style={{
          borderColor: last ? "#ffffff00" : dark ? "#1F2329" : "#ebebeb",
          style: h ? h : "50px",
        }}
      >
        <div className="w-[100%]">
          <h1
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[16px] font-bold tracking-wide "
          >
            {title}
          </h1>
          <h1
            style={{
              color: dark ? !drop?"#ffffff74" :"#fff" : !drop?"#0a0a187e" : "#000",
            }}
            className="text-[14px] font- text-[#85858C] tracking-wide "
          >
            {sub}
          </h1>
        </div>
        <div className="shrink-0">
          <ToggleButton />
        </div>
      </div>
      {drop ? (
        <div className="w-[100%] mt-[10px]">
          <div className="w-[100%] text-[14px] items-center font-bold tracking-wide text-[#0066FF] h-[20px] flex ">
            <span
              onClick={() => {
                setDropped(!dropped);
              }}
              className="flex items-center  cursor-pointer "
            >
              {dropTitle}
              <img
                style={{
                  transform: !dropped ? "rotate(180deg) translateY(0px)" : "",
                }}
                src="/graphic/settings/down.svg"
                className="w-[8px] ml-[5px] h-[8px]  duration-100"
                alt=""
              />
            </span>
          </div>
          <div
            className="w-[100%] duration-100"
            style={{
              height: !dropped && "0px",
              overflow: !dropped && "hidden",
            }}
          >
            <div className="w-[100%]">{children}</div>
          </div>
        </div>
      ) : (
        <div className="w-[100%]">{children}</div>
      )}
    </div>
  );
}
