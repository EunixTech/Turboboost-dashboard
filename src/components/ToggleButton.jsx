import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToggleButton = ({ value, setValue }) => {
  const [toggle, updateToggle] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const dark = useSelector((state) => state.home.dark);

  const showToast = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        const message = "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = message; 
        return message; 
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const handleToggleClick = () => {
    if (setValue) {
      setValue(!value);
      showToast("Toggle switched successfully", "success");
      setUnsavedChanges(true)
    } else {
      updateToggle(!toggle);
      showToast("Toggle switched successfully", "success");
      setUnsavedChanges(true)
    }
  };

  return (
    <div
      style={{
        backgroundColor: (value ? value : toggle)
          ? dark
            ? "#272B33"
            : "#EBEBEB"
          : "#38F8AC",
      }}
      onClick={handleToggleClick}
      className="w-[45px] cursor-pointer duration-100 bg-[#38F8AC] relative h-[25px] flex items-center rounded-[23px]"
    >
      <img
        style={{
          position: "absolute",
          left: (value ? !value : !toggle) ? "24px" : "3.5px",
        }}
        src="/graphic/dashboard/toggle.svg"
        className="w-[19px] shrink-0 duration-100 h-[18.5px]"
        alt="toggle-image"
      />
    </div>
  );
};

export default ToggleButton;
