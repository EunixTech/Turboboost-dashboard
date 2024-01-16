import React from 'react'
import { useSelector } from "react-redux";

export default function HoverGreenButton({ btnText = " " , handlePurgeAll }) {
    const dark = useSelector((state) => state.home.dark);

    return (
        <div onClick={handlePurgeAll} style={{ borderColor: dark ? "#1F2329" : "#ebebeb" }}
            className="w-[100%]  mt-[10px] h-[50px] px-[15px] flex items-center justify-center  border-t-[1px] left-0"
        >

            <div className={`w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"} h-[32px] ${dark ? "hover:bg-[#1F2329]" : "hover:bg-[#f3f3f3]"}  cursor-pointer rounded-[4px] ${dark ? "border-[#1F2329]" : "border-[#38F8AC] "} flex items-center justify-center`}
            >
                <p
                    className={`text-[${dark ? "#fff" : "#000"
                        }]   f2 text-[12px]  border-[1px] hover:border-[#38F8AC] ${dark ? "border-[#38F8AC]" : "border-[#38F8AC]"
                        } ${dark ? "bg-[#111317]" : "bg-[#fff]"
                        } rounded-[4px] hover:bg-[#38f8ac] hover:text-white active:translate-y-[0px] active:border-0 active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
                >
                    {btnText}
                </p>
            </div>

        </div>
    )
}
