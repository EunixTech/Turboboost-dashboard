import React, { useState } from "react";
import { isValidEmailAddress } from "../../utils/verification";
import InputFields from "../InputFields";
import appURLs from "../../appURL";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true); // Start as true to not show error initially
    const [isEmpty, setIsEmpty] = useState(false); // Track if email is empty
    const [emailExists, setEmailExists] = useState(null);

    const handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
        setIsValid(isValidEmailAddress(inputEmail));
        setIsEmpty(inputEmail.trim() === ""); // Check if email is empty
    };
    const appURL = appURLs();

    
    const handleNextClick = async () => {
        if (isValid && !isEmpty) {
            try {
                const response = await fetch(`${appURL}/user/forgot-password`, {
                    method: "PATCH", 
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                    mode: "cors",
                    referrerPolicy: "strict-origin-when-cross-origin",
                });
    
                if (response.ok) {
                    const data = await response.json();
                    setEmailExists(data.emailExists);
                } else {
                    console.error("Error:", response.statusText);
                }
            } catch (error) {
                console.error("Error checking email:", error);
            }
        }
    };
    


    return (

        <div>
            <div className="w-[100%] mt-[20px] mb-[13px]">

                <InputFields
                    value={email}
                    onChangeHandler={handleEmailChange}
                    labelText="Email Address"
                    type="email"
                />

                {isEmpty && (<p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}> Email is required. </p>)}
                {!isValid && !isEmpty && (<p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}> Invalid email format. Please enter a valid email address. </p>)}
            </div>

            <div
                className={`h-[38px] mb-[20px] text-[#000] w-[100%] font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] ${isValid && !isEmpty ? "bg-[#38F8AC]" : "bg-gray-400 cursor-not-allowed"} rounded-sm`}
                onClick={handleNextClick}
            > <span className="translate-y-[1.5px] "> Submit </span> </div>

            <div className="w-full">
                {emailExists === false && (<p className="text-red-600 text-lg font-semibold"> We couldn't find an account associated with this email address. </p>)}
                {emailExists === true && (<p className="text-green-600 text-lg font-semibold"> An email has been successfully sent to your provided email address. </p>)}
            </div>

        </div>

    );
};

export default ForgotPasswordForm;
