import React from 'react'
import { useSelector } from "react-redux";

export default function CoreVitalsReportCard({coreVitualData = []}) {
    console.log('coreVitualData', coreVitualData)
    const dark = useSelector((state) => state.home.dark);

    return (
        <div className="w-[100%] mt-[20px] grid grid-cols-2 gap-x-[20px] gap-y-[40px] ">
            {coreVitualData?.length && coreVitualData.map((item, index) => (
                <div className="w-[150px]" key={index}>
                    <p
                        style={{ color: dark ? "#fff" : "#000", wordWrap: "break-word" }}
                        className="text-[12px] f2 font-medium"
                    >
                        {item?.name || " "}
                    </p>
                    <p className="text-[#0CD16A] f2 text-[24px] font-medium leading-[28px]"> {item?.value || " "} </p>
                </div>
                
            ))}
        </div>

    )

}
