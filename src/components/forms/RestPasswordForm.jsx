import React, { useState } from "react";
import InputFields from "../InputFields";

const ResetPasswordForm = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatchError, setPasswordsMatchError] = useState("");


    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    };

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);

        if (!newConfirmPassword) {
            setPasswordsMatchError("");
            return;
        }

        if (newConfirmPassword !== password) {
            setPasswordsMatchError("Passwords do not match.");
        } else {
            setPasswordsMatchError("");
        }
    };

    return (
        <div>
            <InputFields
                type="password"
                inputName= "password"
                labelText="Password"
                value={password}
                onChangeHandler={handlePasswordChange}

            />

            <InputFields
                type="password"
                inputName= "confirm_password"
                labelText="Confirm Password"
                value={confirmPassword}
                onChangeHandler={handleConfirmPasswordChange}
            />
        </div>
    );
};

export default ResetPasswordForm;

