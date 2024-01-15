import React from 'react';
import { useSelector } from "react-redux";

export default function CoreVitalsReportCard({ coreVitualData = [] }) {
    console.log('coreVitualData', coreVitualData);
    const dark = useSelector((state) => state.home.dark);

    return (
        <>
            <div className="flex mt-[5%] justify-around ">
            {coreVitualData?.length && coreVitualData.map((item, index) => (
                <div key={index} className="w-[150px]">
                    <p
                        style={{ color: dark ? "#fff" : "#000" }}
                        className="text-[12px] f2 font-medium"
                    >
                        {item?.name || " "}
                    </p>
                    <p className="text-[#0CD16A] f2 text-[24px] font-medium leading-[28px]"> {item?.value || " "} </p>
                </div>
            ))}
            </div>
        </>
    );
}
