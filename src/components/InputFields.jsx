import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputFields({
    inputClass = "w-[100%] border-[1px] rounded-[4px] outline-none rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[38px]",
    type,
    onChangeHandler = () => {},
    value,
    inputName,
    wrapperClass = "h-[100%]",
    wrapperStyle,
    labelClass = "text-[14px] font-bold tracking-wide  text-[#0a0a187a]",
    labelText,
    list = [],
    dropDownListClass = "w-[100%]  h-[34px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer",
    dropDownClass = "h-[38px]"

}) {

    const dark = useSelector((state) => state.home.dark);
    const [checkboxStatus, updateCheckboxStatus] = useState(false);
    const [valueIndex, updateValueIndex] = useState(0);

    const [hover, setHover] = useState(false),
        [isDropdownOpen, updateIsDropdownOpen] = useState(false);

    useEffect(() => {
        const onpointerdown = () => { if (!hover) { updateIsDropdownOpen(false) } };

        document.addEventListener("pointerdown", onpointerdown, false);
        return () => { document.removeEventListener("pointerdown", onpointerdown, false) };
    });

    // password field
    const [showPassword, updateShowPassword] = useState(false);
    const [showConfirmPassword, updateShowConfirmPassword] = useState(false);
   
    const toggleShowPassword = (passwordType = "") => {
        if(passwordType === "password") updateShowPassword(!showPassword);
        else if(passwordType === "confirm_password") updateShowConfirmPassword(!showConfirmPassword)
    };

    return (

        <div style={wrapperStyle} className={wrapperClass}>
            <p
                style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
                className={labelClass}
            >
                {labelText}
            </p>
            {
                (() => {
                    if (type === "text" || type === "email" || type === "number") {
                        return <input
                            type={type}
                            className={inputClass}
                            onChange={onChangeHandler}
                            name={inputName}
                            value={value}
                            style={{
                                borderColor: dark ? "#1F2329" : "#ebebeb",
                                color: dark ? "#fff" : "#000",
                                backgroundColor: dark ? "#111317" : "#fff",
                            }}
                        />

                    } else if (type === "dropdown") {

                        return <div
                            style={{ borderColor: dark ? "#1F2329" : "#ebebeb" }}
                            className="w-[100%] relative   text-[12px] font-medium mt-[5px] h-[34px]"
                        >

                            <div onClick={() => { updateIsDropdownOpen(true) }}
                                style={{ borderColor: dark ? "#1F2329" : "#ebebeb", borderRadius: "4px", }}
                                className={`${dropDownClass}  w-[100%] cursor-pointer border-[1px] border-[#ebebeb] px-[10px] flex justify-between items-center`}
                            >
                                <p
                                    style={{ color: dark ? "#fff" : "#000" }}
                                    className="text-[12px] font-bold tracking-wide  text-[#000]"
                                >
                                    {list[valueIndex]}
                                </p>

                                <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
                            </div>

                            {isDropdownOpen && (

                                <div
                                    onMouseOver={() => { setHover(true) }}
                                    onMouseLeave={() => { setHover(false) }}
                                    style={{
                                        color: dark ? "#fff" : "#000",
                                        backgroundColor: dark ? "#111317" : "#fff",
                                        borderColor: dark ? "#1F2329" : "#ebebeb",
                                    }}
                                    className="w-[100%] min-h-[10px] rounded-b-[4px] max-h-[200px] scroll-bar-cool111 overflow-y-auto  border-t-0 border-[1px] border-[#ebebeb] absolute z-50 top-[33px] bg-[#fff]"
                                >

                                    {list.map((item, i) => {
                                        return (
                                            <div

                                                key={i}
                                                style={{
                                                    backgroundColor: i === 2 ? dark ? "#000" : "#ebebeb" : dark ? "#111317" : "#fff",
                                                }}
                                                onClick={() => {
                                                    updateValueIndex(i)
                                                    updateIsDropdownOpen(false)
                                                }}
                                                className={dropDownListClass}
                                            >
                                                {item}
                                            </div>

                                        );

                                    })}

                                </div>
                            )}

                        </div>
                    } else if (type === "textarea") {
                        return <textarea
                            style={{
                                borderColor: dark ? "#1F2329" : "#ebebeb",
                                color: dark ? "#fff" : "#000",
                                backgroundColor: dark ? "#191b2184" : "#fff",
                                resize: "none",
                            }}
                            type="textarea"
                            className={inputClass}
                        />
                    } else if (type === "checkbox") {
                        return <div
                            style={{
                                backgroundColor: checkboxStatus && "#38f8ab34",
                                borderColor: checkboxStatus ? "#38F8AC" : "#959494",
                            }}
                            onClick={() => { updateCheckboxStatus(!checkboxStatus); }}
                            className="w-[14px] h-[14px] mr-[10px] shrink-0 border-[1px] border-[#959494] rounded-[2px] cursor-pointer flex items-center justify-center"
                        >
                            {checkboxStatus && (
                                <img
                                    alt="checkbox"
                                    src="/graphic/status/checkboxStatus.svg"
                                    className="w-[8px] h-[8px]"
                                />
                            )}

                        </div>
                    } else if (type === "tel") {
                        return <div style={{ borderColor: dark ? "#1F2329" : "#ebebeb" }}
                            className="flex w-[100%] h-[38px] border-[1px] border-[#ebebeb] mt-[7px] rounded-[2px]"
                        >
                            <div
                                style={{
                                    borderColor: dark ? "#1F2329" : "#ebebeb",
                                    color: dark ? "#fff" : "#000",
                                    backgroundColor: dark ? "#191b2184" : "#ebebeb79",
                                }}
                                className="w-[70px]  shrink-0 h-[100%] border-r-[1px] text-[12px] font-medium  border-[#ebebeb] bg-[#ebebeb79] flex items-center justify-center"
                            >
                                +1
                            </div>

                            <input
                                type="tel"
                                style={{
                                    backgroundColor: dark ? "#111317" : "#fff",
                                    color: dark ? "#fff" : "#000",
                                }}
                                className="w-[100%] outline-none rounded-[4px] px-[10px] text-[12px] font-medium   h-[100%]"
                            />
                        </div>
                    } else if (type === "password") {
                        return <div>

                            <div className="password-input w-full flex relative mb-5">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={value}
                                    name={inputName}
                                    onChange={onChangeHandler}
                                    className="border rounded p-2 w-full"
                                />
                                <button
                                    className="password-toggle-button absolute right-3 top-3"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                          
                        </div>
                    }

                })()}

        </div>

    );
}
