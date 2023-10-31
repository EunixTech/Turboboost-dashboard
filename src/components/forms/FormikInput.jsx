import React from 'react'
import { Field, ErrorMessage } from "formik";

export default function FormikInput({inputName = "", inputType = "", inputLabel = ""}) {

    return (
        <div className="mb-2">

            <label 
                 htmlFor={inputName}
                className="block text-[#000000] text-sm font-medium mb-1 formikInputLabel"
            > 
                { inputLabel } <span className="text-red-500">*</span>
             </label>

            <Field
                type={inputType}
                id={inputName}
                name={inputName}
                className="formikInputField w-full h-12 px-3 border rounded focus:outline-none focus:border-[#38F8AC] focus:ring-[#38F8AC] bg-gray-50 text-gray-800"
            />

            <ErrorMessage
                name={inputName}
                component="div"
                className="formikErrorText text-red-500 text-sm font-size: 0.8rem; margin-left: 3px;"
            />

        </div>

    )

}
