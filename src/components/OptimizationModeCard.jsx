import React from "react";
import { useSelector } from "react-redux";
import InputFields from "./InputFields";

const OptimizationModeCard = () => {
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
                        style={{ color: dark ? "#fff" : "#000"}}
                        className="text-[20px] font-bold tracking-wide "
                    >
                        Optimization Modes
                    </h1>
                    <div
                        style={{ color: dark ? "#fff" : "#000",}}
                        className="flex text-[14px] font-medium items-center"
                    >
                        <>
                            <img
                                src="/graphic/warmup/elli1.svg"
                                className="mr-[3px] w-[14px]"
                                alt="images"
                            />
                            Custom
                        </>
                    </div>
                </div>
                <p
                    style={{ color: dark ? "#ffffff74" : "#0a0a187e"}}
                    className="text-[14px] mt-[5px] tracking-wide text-[#0a0a186f]"
                >
                    Changing the mode, the level of optimization is updated and your cache
                    is purged
                </p>
                <InputFields
                    list={[" Customs", "Ludacris", "Strong", "Medium", "Standard"]}
                    labelText="Country"
                    type="dropdown"
                />

            </div>
        </div>
    );
};

export default OptimizationModeCard;
