import React from "react";

export default function Input({style = {}, classess ="", type="text", onChangeHandler =() =>{}, value="", inputName = ""}) {
    return <>
            <input
                type={type}
                className={classess}
                name = {inputName}
                value={value}
                style={style}
            />
    </>;
}
