import React from 'react'

export default function SideBanner() {

    return (
        <div className="w-[50%] h-[100vh] relative">

            <img
                src="/graphic/login/bg.png"
                className="w-[100%] h-[100vh] object-cover absolute z-0"
                alt="svgIcon"
            />

            <div className="w-[100%] h-[100vh] flex items-center justify-center absolute z-10">
                <img
                    src="/graphic/login/ellipse.png"
                    className="w-[100%] h-[100vh] object-cover"
                    alt="svgIcon"
                />
            </div>

            <div className="w-[100%] h-[100vh]  flex items-end justify-end opacity-20 absolute z-20">
                <img
                    src="/graphic/login/Vector.png"
                    className="w-[95%]"
                    alt="banner image"
                />
            </div>

            <div className="overflow-hidden w-[100%] h-[100vh] flex items-center flex-col justify-center absolute z-30">
                <h1 className="inter text-white text-[30px] text-center px-[100px] leading-[38px] font-medium">
                    Increasing your website speed has dwnever been easier.
                </h1>

                <div className="w-[600px] mt-[10px] flex items-center justify-center">
                    {[
                        "7-day free trial",
                        "One-click setup",
                        "No fixed contracts",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="mr-[17px] h-[30px] flex items-center"
                        >
                            <img
                                src="/graphic/login/tick.png"
                                className="w-[10px]  h-[10px] object-contain   mr-[8px]"
                                alt="svgIcon"
                            />
                            <p className="text-[13px] inter font-medium text-white">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="relative laptop:w-[370px] scale-110 desktop:w-[65%] mt-[40px] h-[300px]">
                    <img src="/graphic/login/g1.png" alt="svgIcon" />
                    <img
                        src="/graphic/login/g2.png"
                        className="w-[350px] translate-x-[-70px] translate-y-[120px] absolute bottom-0 left-0"
                        alt="svgIcon"
                    />
                    <img
                        src="/graphic/login/g3.png"
                        className="w-[250px]  absolute top-[100px] right-0 translate-x-[50px] "
                        alt="svgIcon"
                    />
                </div>
                
            </div>

        </div>

    )

}
