import React from "react";
import { useSelector } from "react-redux";

export default function InputFields({
    inputStyle,
    inputClass,
    type,
    onChangeHandler = () => {},
    value,
    inputName,
    wrapperStyle,
    wrapperClass,
    labelStyle,
    labelClass,
    labelText

}) {

    const dark = useSelector((state) => state.home.dark);

    return (

        <div className={wrapperClass}>
        <p
          style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
          className={labelClass}
        >
          {labelText}
        </p>
        <input
                type={type}
                className={inputClass}
                onChange={onChangeHandler}
                name={inputName}
                value={value}
                style={{
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                    color: dark ? "#fff" : "#000",
                    backgroundColor: dark ? "#111317" : "#fff",
                  }}
            />
       
      </div>
        
    );
}
