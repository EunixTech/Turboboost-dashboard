import React from "react";
import { useSelector } from "react-redux";
export default function Navigator({ current, setCurrent }) {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100%] h-[30px]   px-[5px]  border-[#ebebeb] flex  items-center">
      <div
        onClick={() => {
          setCurrent(0);
        }}
        className="h-[100%] cursor-pointer pl-[5] px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 0 && "2px solid #38F8AC",
            color:
              current === 0
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className=" translate-y-[-1px]">User</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(1);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 1 && "2px solid #38F8AC",
            color:
              current === 1
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className=" translate-y-[-1px]">General</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(2);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 2 && "2px solid #38F8AC",
            color:
              current === 2
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">Caching</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(3);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 3 && "2px solid #38F8AC",
            color:
              current === 3
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">Fonts</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(4);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 4 && "2px solid #38F8AC",
            color:
              current === 4
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">Images</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(5);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 5 && "2px solid #38F8AC",
            color:
              current === 5
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">HTML</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(6);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 6 && "2px solid #38F8AC",
            color:
              current === 6
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">CSS</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(7);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 7 && "2px solid #38F8AC",
            color:
              current === 7
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">JS</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(8);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 8 && "2px solid #38F8AC",
            color:
              current === 8
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">Integrations</span>
        </div>
      </div>
    </div>
  );
}
