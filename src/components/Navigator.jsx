import React from "react";
import { useSelector } from "react-redux";
import { navigationbarArr } from "../static/navigationbarArr";

export default function Navigator({ activeTab, updateActiveTab }) {
    const dark = useSelector((state) => state.home.dark);

    return (
        <div className="w-[100%] h-[30px] px-[5px] border-[#ebebeb] flex items-center">

            {navigationbarArr.map((item, index) => (
                <div
                    key={index}
                    onClick={() => { updateActiveTab(index);}}
                    className="h-[100%] cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
                >
                    <div
                        style={{
                            borderBottom: activeTab === index && "2px solid #38F8AC",
                            color: activeTab === index ? (dark ? "#fff" : "#000") : (dark ? "#ffffff74" : "#0a0a187e")
                        }}
                        className="h-[100%] flex items-center"
                    >
                        <span className="translate-y-[-1px]">{item}</span>
                    </div>

                </div>

            ))}

        </div>

    );
}
