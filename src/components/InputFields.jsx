import React from "react";
import { useSelector } from "react-redux";

export default function InputFields({
    style = {},
    classess = "",
    type = "text",
    onChangeHandler = () => {},
    value = "",
    inputName = "",
    wrapperStyle = "",
    wrapperClass = "",
    labelStyle = "",
    labelText = ""

}) {

    const dark = useSelector((state) => state.home.dark);

    return (

        <div style={wrapperStyle} className={wrapperClass}>
        <p
          style={{
            color: dark ? "#ffffff74" : "#0a0a187e",
          }}
          className={labelStyle}
        >
          {labelText}
        </p>
        <input
                type={type}
                className={classess}
                onChange={onChangeHandler}
                name={inputName}
                value={value}
                style={style}
            />
       
      </div>
        
    );
}
