import React, { useState } from "react";
import { useSelector } from "react-redux";

const ToggleButton = ({ value, setValue }) => {
    const [toggle, updateToogle] = useState(false);
    const dark = useSelector((state) => state.home.dark);

    return (
        <div
            style={{ backgroundColor: (value ? value : toggle) ? dark ? "#272B33" : "#EBEBEB" : "#38F8AC", }}
            onClick={() => {
                if (setValue) { setValue(!value);
                } else { updateToogle(!toggle);}
            }}
            className="w-[45px] cursor-pointer duration-100 bg-[#38F8AC] relative h-[25px] flex items-center rounded-[23px]"
        >
            <img
                style={{
                    position: "absolute",
                    left: (value ? !value : !toggle) ? "24px" : "3.5px",
                }}
                src="/graphic/dashboard/toggle.svg"
                className="w-[19px] shrink-0 duration-100 h-[18.5px]"
                alt="toogleimage"
            />
        </div>
    );
};

export default ToggleButton;
