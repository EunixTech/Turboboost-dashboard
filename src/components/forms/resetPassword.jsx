import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatchError, setPasswordsMatchError] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
      <div>
        <label className="mb-1 inline-block">Password</label>
        <div className="password-input w-full flex relative mb-5">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className="border rounded p-2 w-full"
          />
          <button
            className="password-toggle-button absolute right-3 top-3"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
      <div className="">
        <label className="mb-1 inline-block">Confirm Password</label>
        <div className="password-input w-full flex relative mb-0">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="border rounded p-2 w-full"
          />
          <button
            className="password-toggle-button absolute right-3 top-3"
            onClick={toggleShowConfirmPassword}
          >
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {passwordsMatchError && (
          <p className="text-red-600 text-md">{passwordsMatchError}</p>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordForm;
