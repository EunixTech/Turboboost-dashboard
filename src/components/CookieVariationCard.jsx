import React from "react";
import { useSelector } from "react-redux";
import InputFields from "./InputFields";

export default function CookieVariationCard() {
    const dark = useSelector((state) => state.home.dark);

    return (

        <div
            className="w-[100%] mobile:py-[10px] laptop:py-0 laptop:h-[72px] laptop:px-[15px] flex laptop:flex-row mobile:flex-col items-end justify-between border-b-[1px] "
            style={{
                borderColor: true ? "#ffffff00" : dark ? "#1F2329" : "#ebebeb",
            }}
        >
            <div className="mobile:w-[100%] laptop:w-[32.5%] h-[100%] mobile:mb-[10px] laptop:mr-[10px] flex items-center">
                <InputFields
                    inputClass="w-[100%] border-[1px] rounded-[4px] outline-none rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[34px]"
                    wrapperStyle={{ width: "100%" }}
                    labelText="Cookie Name"
                    type="text"
                    labelClass="text-[12px] font-bold tracking-wide  text-[#0a0a187a]"
                />
            </div>
                
                
            <div className="mobile:w-[100%] laptop:w-[32.5%] h-[100%] mobile:mb-[10px] laptop:mr-[10px] flex items-center">
                <InputFields
                    inputClass="w-[100%] border-[1px] rounded-[4px] outline-none rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[34px]"
                    labelClass="text-[12px] font-bold tracking-wide  text-[#0a0a187a]"
                    wrapperStyle={{ width: "100%" }}
                    labelText="Cookie Values (,)"
                    type="text"
                />
            </div>
            <div className="mobile:w-[100%] laptop:w-[25%] mobile:mb-[10px] h-[100%] laptop:mr-[10px] flex items-center">
                <InputFields
                    labelText="Group"
                    list={["External", "Any Device", "jquery.min.js", "JavaScript"]}
                    type="dropdown"
                    wrapperStyle={{ width: "100%" }}
                    dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
                    dropDownClass="h-[34px]"
                />
            </div>
            <div
                style={{
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className="mobile:w-[100%] laptop:w-[34px] cursor-pointer mb-[16px] h-[34px] flex items-center justify-center border-[1px] border-[#ebebeb] rounded-[3px]"
            >
                <img
                    src="/graphic/settings/trash.svg"
                    className="w-[14px] h-[14px] shrink-0"
                    alt=""
                />
            </div>

        </div>

    );

}
