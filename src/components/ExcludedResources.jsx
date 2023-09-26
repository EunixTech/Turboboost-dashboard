import React from "react";
import { useSelector } from "react-redux";
import InputFields from "./InputFields";

export default function ExcludedResources({last}) {
    const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className="w-[100%] mobile:py-[10px] laptop:py-0 laptop:h-[90px] px-[15px] flex laptop:flex-row mobile:flex-col laptop:items-end justify-between border-b-[1px] "
      style={{
        borderColor: last ? "#ffffff00" : dark ? "#1F2329" : "#ebebeb",
      }}
    >
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        <InputFields
          labelText="Asset URL/Code"
          list={["jquery.min.js", "JavaScript", "External", "Any Device"]}
          type="dropdown"
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        <InputFields
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          labelText="Resource Type"
          list={["JavaScript", "External", "Any Device", "jquery.min.js"]}
          type="dropdown"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        <InputFields
          labelText="Resource Relation"
          list={["External", "Any Device", "jquery.min.js", "JavaScript"]}
          type="dropdown"
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        <InputFields
          labelText="Device"
          list={["Any Device", "jquery.min.js", "JavaScript", "External"]}
          type="dropdown"
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        {/* <InputDropdown2
        w="100%"
        list={[
          "Optimize",
          "Minify",
          "Combine",
          "Render Blocking Fix",
          "Resize",
          "Remove Unused CSS",
          "Page Prefetch",
        ]}
        label="Excluded Operations"
      /> */}

        <InputFields
          labelText="Excluded Operations"
          list={[
            "Optimize",
            "Minify",
            "Combine",
            "Render Blocking Fix",
            "Resize",
            "Remove Unused CSS",
            "Page Prefetch",
          ]}
          dropDownCheckbox={true}
          type="dropdown"
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className=" mobile:w-[100%] mobile:mt-[10px] cursor-pointer laptop:mt-0 laptop:w-[34px] mb-[14px] h-[34px] flex items-center justify-center border-[1px] border-[#ebebeb] rounded-[3px]"
      >
        <img
          src="/graphic/settings/trash.svg"
          className="w-[14px] h-[14px] shrink-0"
          alt=""
        />
      </div>
    </div>
  );
}
