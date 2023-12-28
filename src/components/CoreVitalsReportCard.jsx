import React from 'react';
import { useSelector } from "react-redux";

export default function CoreVitalsReportCard({ coreVitualData = [] }) {
    console.log('coreVitualData', coreVitualData);
    const dark = useSelector((state) => state.home.dark);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
            {coreVitualData?.length && coreVitualData.map((item, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                    <p
                        style={{ color: dark ? "#fff" : "#000", wordWrap: "break-word" }}
                        className="text-sm md:text-base lg:text-lg xl:text-xl font-medium mb-2"
                    >
                        {item?.name || " "}
                    </p>
                    <p className="text-[#0CD16A] text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-6"> {item?.value || " "} </p>
                </div>
            ))}
        </div>
    );
}
