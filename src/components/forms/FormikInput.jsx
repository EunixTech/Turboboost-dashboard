// FormikInput.js

import React from "react";
import { useField } from "formik";

const FormikInput = ({ inputLabel, inputName, inputType, optionsData }) => {
  const [field, meta] = useField(inputName);

  return (
    <div className="w-[100%]">
      <label htmlFor={inputName} className="text-[13px] text-[#2F3A45] mb-[8px] block font-medium">
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
          className="w-full border-[1px] border-[#EBEBEB] rounded-[4px] h-[38px] px-[12px] text-[13px] text-[#2F3A45] placeholder-[#969AA5] focus:outline-none focus:border-blue-500"
        />
      )}
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-[13px] mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikInput;
