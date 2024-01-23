import React, { useState, Suspense } from 'react';

const Tooltip = ({ text = ' ' }) => {

    const [isActive, updateIsActive] = useState(false);
    const [showImaage, updateShowImage] = useState(false);

    const handleImageLoad = () => { updateShowImage(true)};

    return (
        <div
            onMouseOver={() => {updateIsActive(true)}}
            onMouseLeave={() => { updateIsActive(false);}}
            className="relative"
        >
            {isActive && (

                <div style={{height:"fit-content"}} className="absolute shrink-0 w-[150px] left-[-62.1px] z-50 bottom-[13px]">
                    <Suspense fallback={null}>
                        <img
                            onLoad={handleImageLoad}
                            src="/hover.svg"
                            className="z-0 w-[145px] h-[88px]"
                            alt="svg icon"
                        />
                        {showImaage && (
                            <div className="w-[100%] h-[100%] px-[10px] py-[14px] font-medium text-[12px] leading-[16px] top-0 left-0 absolute z-10">
                               {text}
                            </div>
                        )}
                    </Suspense>
                </div>

            )}
            
            <img
                className="w-[20px] cursor-pointer"
                src="/graphic/dashboard/info.svg"
                alt="svgIcon"
            />
        </div>
    );
};

export default Tooltip;
