import React from 'react'
import { Field, ErrorMessage } from "formik";

export default function FormikInput({inputName = "", inputType = "", inputLabel = ""}) {

    return (
        <div className="mb-5">

            <label
                htmlFor={inputName}
                className="block text-[#969AA5] text-sm font-medium mb-2"
            > { inputLabel }  </label>

            <Field
                type={inputType}
                id={inputName}
                name={inputName}
                className="w-full h-12 px-3 border rounded focus:outline-none focus:border-[#38F8AC] focus:ring-[#38F8AC] bg-gray-50 text-gray-800"
            />

            <ErrorMessage
                name={inputName}
                component="div"
                className="text-red-500 text-sm"
            />

        </div>

    )

}
