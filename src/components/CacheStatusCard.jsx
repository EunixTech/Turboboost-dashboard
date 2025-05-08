import React from 'react'
import { useSelector } from "react-redux";

export default function CacheStatusCard({ title = "", size = 0 }) {

    const dark = useSelector((state) => state.home.dark);

    return (
        <div className="flex items-center mb-[4px] justify-between">

            <div className="flex items-center">
                <img
                    src={
                        dark
                            ? "/graphic/dashboard/elli3-d.svg"
                            : "/graphic/dashboard/elli9.svg"
                    }
                    className="w-[10px] h-[10px]"
                    alt="svgIcon"
                />

                <p style={{ color: dark ? "#fff" : "#000" }} className="text-[13px] f2 font-medium ml-[5px]"> {title}</p>
            </div>

            <div style={{ color: dark ? "#fff" : "#000" }} className="text-[14px] font-bold translate-y-[-2px]" > {size} </div>

        </div>

    )
}

