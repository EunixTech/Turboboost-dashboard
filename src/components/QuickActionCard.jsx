import React from 'react'
import ToggleButton from "./ToggleButton";
import { useSelector } from "react-redux";

export default function QuickActionCard({text = " "}) {
    const dark = useSelector((state) => state.home.dark);

    return (
        <div className="flex px-[15px] w-[100%] items-center mt-[9px] justify-between">
            <p style={{ color: dark ? "#fff" : "#000" }}
               className="text-[14px] f2 translate-y-[0px] font-medium tracking-wide"
            >
                {text}
            </p>
            <ToggleButton />
        </div>
    )
}
