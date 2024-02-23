import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function IntegerationIteamCard({
    src,
    title,
    sub,
    connected,
    connect,
}) {
    const dark = useSelector((state) => state.home.dark);
    const [hover, setHover] = useState(false);
    return (
        <div
            style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
                height:"fit-content",
                minHeight:"200px"
            }}
            className="px-[15px] bg-[#fff] border-[1px] border-[#ebebeb] rounded-[9px] py-[18px] h-[220px] "
        >
            <div className="flex justify-between w-[100%]">
                <img src={src} className="w-[50px] rounded-[7px]" alt="" />
                {!connect ? (
                    <div
                        onMouseOver={() => {
                            setHover(true);
                        }}
                        onMouseLeave={() => {
                            setHover(false);
                        }}
                        style={{
                            color: !connect ? (dark ? "#fff" : "#000") : "#FF465C",
                            borderColor: dark ? "#1F2329" : "#ebebeb",
                        }}

                        className="w-[110px] rounded-[3px] text-[14px]  hover:bg-[#38F8AC] cursor-pointer font-medium h-[38px] border-[1px] border-[#ebebeb] flex items-center justify-center"
                    >
                        Connect
                    </div>

                ) : (
                    <div
                        onMouseOver={() => {
                            setHover(true);
                        }}
                        onMouseLeave={() => {
                            setHover(false);
                        }}
                        style={{ borderColor: dark ? "#1F2329" : "#ebebeb"}}
                        className="w-[100px] rounded-[3px] text-[14px] hover:bg-[#FF465C] text-[#FF465C] hover:text-[#fff]  cursor-pointer font-medium h-[38px] border-[1px] border-[#ebebeb] flex items-center justify-center"
                    >
                        Disconnect
                    </div>

                )}
            </div>
            <h1
                style={{
                    color: dark ? "#fff" : "#000",
                }}
                className="text-[20px] font-bold tracking-wide mt-[10px] items-center flex"
            >
                {title}{" "}
                {connect && (
                    <div
                        className="h-[22px] flex items-center px-[9.5px] ml-[8px] justify-between rounded-[23px] "
                        style={{
                            backgroundColor: "#38f8ab31",
                        }}
                    >
                        <p
                            className="text-[14px] translate-y-[-1px] tracking-wide "
                            style={{
                                color: "#0FE38F",
                            }}
                        >
                            Connected
                        </p>
                    </div>
                )}
            </h1>
            <p
                style={{
                    color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px] font-bold text-[#0a0a1876] tracking-wide mt-[2px]"
            >
                {sub}
            </p>
        </div>
    );
};
