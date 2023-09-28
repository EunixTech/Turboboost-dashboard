import React from 'react';

const CheckBox = ({ change, check, setCheck }) => {
    return (
      <div
        style={{
          backgroundColor: check && "#38f8ab34",
          borderColor: check ? "#38F8AC" : "#959494",
        }}
        onClick={() => {
          setCheck(!check);
          change();
        }}
        className="w-[14px] h-[14px] border-[1px] border-[#959494] rounded-[2px] cursor-pointer flex items-center justify-center"
      >
        {check && (
          <img
            alt=""
            src="/graphic/status/check.svg"
            className="w-[8px] h-[8px]"
          />
        )}
      </div>
    );
  };

export default CheckBox;
