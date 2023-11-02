import React from 'react'
import { Field, ErrorMessage } from "formik";

export default function FormikInput({ inputName = "", inputType = "", inputLabel = "", optionsData = [] }) {

    return (
        <div className="mb-2">

            <label
                htmlFor={inputName}
                className="block text-[#000000] text-sm font-medium mb-1 formikInputLabel"
            >
                {inputLabel} <span className="text-red-500">*</span>
            </label>

            {
                (() => {
                    if (inputType === "text" || inputType === "tel" || inputType == "email" || inputType )  {
                        return <Field
                            type={inputType}
                            id={inputName}
                            name={inputName}
                            className="formikInputField w-full h-12 px-3 border rounded focus:outline-none focus:border-[#38F8AC] focus:ring-[#38F8AC] bg-gray-50 text-gray-800"
                        />
                    } else if (inputType === "select") {
                       return  <Field
                            as="select"
                            id={inputName}
                            name={inputName}
                            className="formikInputField rounded-md border border-gray-300 p-2 w-full"
                        >
                            {optionsData.map((data, index) => (
                                <option key={index} value={data}>
                                    {data}
                                </option>
                            ))}
                        </Field>
                    }
                })()}

            <ErrorMessage
                name={inputName}
                component="div"
                className="formikErrorText text-red-500 text-sm font-size: 0.8rem; margin-left: 3px;"
            />

        </div>

    )

}
