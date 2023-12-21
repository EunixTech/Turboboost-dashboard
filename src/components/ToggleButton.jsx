import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setToggle } from "../slice/statusToggleSlice";

const ToggleButton = ({ toggleKey = "defaultKey", onSaveToggleState }) => {
  const dispatch = useDispatch();
  const storedToggleValue = useSelector((state) => state.toggles?.[toggleKey]);
  const dark = useSelector((state) => state.home.dark);

  const showToast = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  const [toggleValue, setToggleValue] = useState(() => {
    const localStorageValue = localStorage.getItem(toggleKey);
    return localStorageValue !== null ? JSON.parse(localStorageValue) : false;
  });

  useEffect(() => {
    setToggleValue(storedToggleValue !== undefined ? storedToggleValue : false);
  }, [storedToggleValue]);

  const handleToggleClick = () => {
    const newValue = !toggleValue;
    console.log("newValue:", newValue);
    setToggleValue(newValue);
    dispatch(setToggle({ key: toggleKey, value: newValue }));
    showToast(`Toggle switched to ${newValue ? "on" : "off"}`, "success");
    onSaveToggleState && onSaveToggleState(newValue, toggleKey);
  };

  useEffect(() => {
    localStorage.setItem(toggleKey, JSON.stringify(toggleValue));
  }, [toggleKey, toggleValue]);

  return (
    <div
      style={{
        backgroundColor: toggleValue ? (dark ? "#272B33" : "#EBEBEB") : "#38F8AC",
      }}
      onClick={handleToggleClick}
      className="w-[45px] cursor-pointer duration-100 bg-[#38F8AC] relative h-[25px] flex items-center rounded-[23px]"
    >
      <img
        style={{
          position: "absolute",
          left: toggleValue ? "24px" : "3.5px",
        }}
        src="/graphic/dashboard/toggle.svg"
        className="w-[19px] shrink-0 duration-100 h-[18.5px]"
        alt="toggle-image"
      />
    </div>
  );
};

export default ToggleButton;
