
import React from "react";
import { useField } from "formik";
import { useSelector } from "react-redux";

const FormikSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100%]">
      <label style={{
        color: dark ? "#ffffff74" : "#0a0a187e",
      }} htmlFor={props.id || props.name} className="text-[14px] font-bold tracking-wide  text-[#0a0a187a]">
        {label}
      </label>
      <select
        {...field}
        {...props}
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
          color: dark ? "#fff" : "#000",
          backgroundColor: dark ? "#111317" : "#fff",
        }}
        className="w-[100%] border-[1px] outline-none rounded-[4px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[38px]"
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
