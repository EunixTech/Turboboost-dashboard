import React from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const ToggleButton = ({ toggleValue, handlingToggle = {}}) => {

  const dark = useSelector((state) => state.home.dark);

  return (
    <div
      style={{
        backgroundColor: !toggleValue ? (dark ? "#272B33" : "#EBEBEB") : "#38F8AC",
      }}
      onClick={handlingToggle}
      className="w-[45px] cursor-pointer duration-100 bg-[#38F8AC] relative h-[25px] flex items-center rounded-[23px]"
    >
      <svg  style={{
          position: "absolute",
          left: toggleValue ? "24px" : "3.5px",
        }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="18" rx="9" fill="white" />
      </svg>

    </div>
  );
};

export default ToggleButton;
