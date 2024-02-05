import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

const InputDropdown1 = ({ label, list, w }) => {
    const [curr, setCurr] = useState(0);
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const dark = useSelector((state) => state.home.dark);

    useEffect(() => {
        const onpointerdown = () => {
            if (!hover) {
                setClicked(false);
            }
        };
        document.addEventListener("pointerdown", onpointerdown, false);
        return () => {
            document.removeEventListener("pointerdown", onpointerdown, false);
        };
    });

    return (
        <div className="h-[100%] flex justify-center flex-col" style={{ width: w }}>
            <p className="text-[14px] whitespace-nowrap font-bold tracking-wide  text-[#0a0a187a]">
                {label}
            </p>
            <div
                style={{
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className="w-[100%] relative   text-[12px] font-medium mt-[4px] h-[34px]"
            >
                <div
                    onClick={() => {
                        setClicked(true);
                    }}
                    style={{
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                        borderRadius: clicked ? "4px 4px 0 0" : "4px 4px 4px 4px",
                    }}
                    className="w-[100%] cursor-pointer border-[1px] border-[#ebebeb] px-[10px] h-[34px] flex justify-between items-center"
                >
                    <p
                        style={{
                            color: dark ? "#fff" : "#000",
                        }}
                        className="text-[12px] font-medium tracking-wide px-[10px] text-[#000]"
                    >
                        {list[curr]}
                    </p>
                    <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
                </div>
                {clicked && (
                    <div
                        style={{
                            color: dark ? "#fff" : "#000",
                            backgroundColor: dark ? "#111317" : "#fff",
                            borderColor: dark ? "#1F2329" : "#ebebeb",
                        }}
                        className="w-[100%] min-h-[10px] rounded-b-[4px] border-[1px] border-t-0 border-[#ebebeb] absolute z-20 top-[33px] bg-[#fff]"
                    >
                        {list.map((item, i) => {
                            return (
                                <div
                                    onMouseOver={() => {
                                        setHover(true);
                                    }}
                                    onMouseLeave={() => {
                                        setHover(false);
                                    }}
                                    key={i}
                                    style={{
                                        backgroundColor:
                                            i === curr
                                                ? dark
                                                    ? "#000"
                                                    : "#ebebeb"
                                                : dark
                                                    ? "#111317"
                                                    : "#fff",
                                    }}
                                    onClick={() => {
                                        setCurr(i);
                                    }}
                                    className="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default function OptimizationModeCard() {
    const dark = useSelector((state) => state.home.dark);
    return (
        <div className="w-[320px] shrink-0 ml-[15px]">
            <div
                style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className=" bg-[#fff] pb-[12px] px-[15px] border-[1px] border-[#EBEBEB] pt-[12px] mb-[30px] rounded-[8px] w-[100%]"
            >
                <div className="w-[100%] flex justify-between">
                    <h1
                        style={{
                            color: dark ? "#fff" : "#000",
                        }}
                        className="text-[20px] font-bold tracking-wide "
                    >
                        Optimization Modes
                    </h1>
                    <div
                        style={{
                            color: dark ? "#fff" : "#000",
                        }}
                        className="flex text-[14px] font-medium items-center"
                    >
                        <>
                            <img
                                src="/graphic/warmup/elli1.svg"
                                className="mr-[3px] w-[14px]"
                                alt=""
                            />
                            Custom
                        </>
                    </div>
                </div>
                <p
                    style={{
                        color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] mt-[5px] tracking-wide text-[#0a0a186f]"
                >
                    Changing the mode, the level of optimization is updated and your cache is purged
                </p>
                <InputDropdown1
                    label=""
                    list={[
                        "Strong",
                        "Medium",
                        "Standard",
                    ]}
                />
            </div>
        </div>
    )
}
