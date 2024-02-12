import React from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";

import optModeDropdownArr from '../../utils/optModeDropDownArr';
import { PostAxiosConfig } from "../../utils/axiosConfig.js";
import { setToggle } from "../../slice/statusToggleSlice";
import InputFields from '../InputFields';
import useWidth from "../../hooks/useWidth";

export default function OptimizationModeCard() {
    const dark = useSelector((state) => state.home.dark);
    const optimizationModeValue = useSelector((state) => state.toggles?.optimizationMode);
    const dispatch = useDispatch();
    const deviceWith = useWidth();

    const handleChangeMode = async (index) => {
        toast.dismiss();
        const mode = index + 1;
        const res = await PostAxiosConfig(`api/shopify/optimization/toggle-optimization-mode`, { mode })
        const resData = res.data;

        if (resData.status === 200) {
            dispatch(setToggle({ key: "optimizationMode", value: mode }));
            return toast.success(`Optimization mode changed to ${optModeDropdownArr[index]}.`);
        } else return toast.error(resData?.message)

    }

    return (
        <div style = {{
            width: deviceWith < 1000 ? "100%" : "",
            marginLeft: deviceWith < 1000 ? "" : "20px"
        }} className={`w-[320px] shrink-0`}>
            <div
                style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className="pb-[25px] bg-[#fff] pb-[12px] px-[15px] border-[1px] border-[#EBEBEB] pt-[12px] mb-[30px] rounded-[8px] w-[100%]"
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
                            {optModeDropdownArr[optimizationModeValue ? optimizationModeValue - 1 : 1]}
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

                <InputFields
                    list={optModeDropdownArr}
                    type="dropdown"
                    defaultValue={optimizationModeValue}
                    onChangeHandler={handleChangeMode}
                />
            </div>
        </div>
    )
}
