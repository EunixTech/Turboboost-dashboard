import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CheckBox from './CheckBox';

const TableHeader = ({ change }) => {
    const [check, setCheck] = useState(false);
  
    const dark = useSelector((state) => state.home.dark);
    return (
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
          color: dark ? "#fff" : "#000",
        }}
        className="w-[100%] flex h-[25px] border-b-[1px] border-[#ebebeb]"
      >
        <div className="w-[7%]  px-[10px] items-center flex h-[100%] ">
          <CheckBox change={change} check={check} setCheck={setCheck} />
        </div>
        <div
          style={{
            color: dark ? "#fff" : "#0a0a1876",
          }}
          className="w-[27%] text-[12px] tracking-wide text-[#0a0a1876] font-bold flex h-[100%] items-center"
        >
          URL
        </div>
        <div
          style={{
            color: dark ? "#fff" : "#0a0a1876",
          }}
          className="w-[11%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
        >
          Device
        </div>
        <div
          style={{
            color: dark ? "#fff" : "#0a0a1876",
          }}
          className="w-[28%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
        >
          Tags
        </div>
        <div
          style={{
            color: dark ? "#fff" : "#0a0a1876",
          }}
          className="w-[9%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
        >
          Last Optimized
        </div>
        <div
          style={{
            color: dark ? "#fff" : "#0a0a1876",
          }}
          className="w-[9%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
        >
          Status
        </div>
        <div
          style={{
            color: dark ? "#fff" : "#0a0a1876",
          }}
          className="w-[9%]  text-[12px] tracking-wide text-[#0a0a1876] font-bold  flex h-[100%] items-center"
        >
          Actions
        </div>
      </div>
    );
  };

export default TableHeader;
