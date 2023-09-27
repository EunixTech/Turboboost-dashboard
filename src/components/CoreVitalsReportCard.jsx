import React from 'react'
import { useSelector } from "react-redux";
import coreVitalsDataArr from '../static/coreVitalsData';

export default function CoreVitalsReportCard() {

    const dark = useSelector((state) => state.home.dark);

    return (
        <div className="w-[100%] mt-[20px]">

            <div className="flex  justify-around ">

                    {coreVitalsDataArr?.length && coreVitalsDataArr.map((item, index) => (
                    <div className="w-[150px]" key={index}>
                        <p
                            style={{ color: dark ? "#fff" : "#000" }}
                            className="text-[12px] f2 font-medium"
                        >
                            {item.title}
                        </p>
                        <p className="text-[#0CD16A] f2 text-[24px] font-medium leading-[28px]"> {item.time} </p>
                    </div>
                ))}

            </div>

        </div>

    )

}
