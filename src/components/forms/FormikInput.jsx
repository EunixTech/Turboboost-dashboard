

import React from "react";
import { useField } from "formik";
import { useSelector } from "react-redux";

const FormikInput = ({ inputLabel, inputName, inputType, optionsData, inputValue, customClassName = "" }) => {
  const [field, meta] = useField(inputName);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100%]">
      <label style={{
        color: dark ? "#ffffff74" : "#0a0a187e",
      }} htmlFor={inputName} className="text-[14px] font-bold tracking-wide  text-[#0a0a187a]">
        {inputLabel}
      </label>
      {inputType === "select" ? (
        <select
          {...field}
          className="w-full border-[1px] border-[#EBEBEB] rounded-[4px] h-[38px] px-[12px] text-[13px] text-[#2F3A45] placeholder-[#969AA5] focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled>
            Select {inputLabel}
          </option>
          {optionsData.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        // Handle other input types (text, email, tel, etc.)
        <input
          {...field}
          type={inputType}
           style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
          color: dark ? "#fff" : "#000",
          backgroundColor: dark ? "#111317" : "#fff",
        }}
          className="w-[100%] border-[1px] outline-none rounded-[4px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[38px] mb-[-5px]"
        />
      )}
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-[13px]">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikInput;
