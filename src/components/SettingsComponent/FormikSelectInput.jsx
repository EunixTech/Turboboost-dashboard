
import React from "react";
import { useField } from "formik";

const FormikSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-[100%]">
      <label htmlFor={props.id || props.name} className="text-[13px] text-[#2F3A45] mb-[8px] block font-medium">
        {label}
      </label>
      <select
        {...field}
        {...props}
        className="w-full border-[1px] border-[#EBEBEB] rounded-[4px] h-[38px] px-[12px] text-[13px] text-[#2F3A45] placeholder-[#969AA5] focus:outline-none focus:border-blue-500"
      >
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-[13px] mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikSelectInput;
