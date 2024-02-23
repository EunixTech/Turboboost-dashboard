import React from 'react';
import Tooltip from './Tooltip';
import { useSelector } from "react-redux";

export default function CacheStatCard({
    heading = "",
    purgeHeading = "",
    purgeValue = "",
    percentageData = "",
    fluctuationType = "",
    fluctuationAmount = ""
}) {

    const dark = useSelector((state) => state.home.dark);

    return (
        <div
            style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] rounded-[8px]"
        >
            <div className="flex justify-between items-center">
                <p style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                    className="text-[#0a0a187e] f2 text-[16px] tracking-wide font-bold"
                >
                    {heading}
                </p>

                <Tooltip text='demo' />
            </div>

            <div className="flex mt-[6px] items-center">
                <p style={{ color: dark ? "#fff" : "#000" }}
                    className="laptop:text-[20px] f2 desktop:text-[25px] font-bold "
                >
                    {percentageData}
                </p>

                <div className={`${fluctuationType === "inc" ? "bg-[#18df902e]":"bg-[#ff004c2d]"} flex px-[13px] py-[3px] rounded-[23px] ml-[10px]`}>
                    {
                        fluctuationType === "inc" ?
                            <img
                                src="/graphic/dashboard/trend.svg"
                                style={{ transform: "rotateZ(180deg) rotateY(180deg)", }}
                                className="mr-[5px] translate-y-[1px] w-[14px]"
                                alt="svgicon"
                            /> :
                            <img
                                src="/graphic/dashboard/trend-red-down.svg"
                                className="mr-[5px] translate-y-[1px] w-[14px]"
                                alt="svg icon"
                            />
                    }

                    <p className={`${fluctuationType === "inc" ?"text-[#18DF90]":"text-[#ff004c]"} f2 text-[13px] font-medium tracking-wide `}> 3%</p>
                </div>


            </div>

            <div className="flex">
                <p style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                    className="text-[#0a0a187e] f2 mr-[2px] text-[14px] tracking-wide font-bold"
                >
                    {purgeHeading}
                </p>

                <p style={{ color: dark ? "#fff" : "#000" }}
                    className="text-[#000] f2 text-[14px] tracking-wide font-bold"
                >
                    {purgeValue}
                </p>

            </div>

        </div>

    );

}
