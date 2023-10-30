import React, { useState } from "react";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import ResetPasswordForm from "../components/forms/resetPassword";

const ForgotPasswordPage = () => {

  const [showResetPassword, setShowResetPassword] = useState(false);
  return (
    <>
      <div className="w-[100%] h-[100vh] flex items-center justify-center">
        <div className="laptop:w-[50%] mobile:w-[100%]  px-[100px] h-[100vh] px-[7%] flex items-center justify-center">
          <div className="w-[100%]">
            <img src="/logo-b.png" className="w-[150px]" alt="" />
            <h1 className="text-[34px] mt-[10px] font-bold">Forgot Password?</h1>
            <p className="text-[#969AA5] inter text-[14px] mb-[10px]">
              Please enter your email address below
            </p>
            {showResetPassword ? (
              // Display Reset Password form
              <ResetPasswordForm />
            ) : (
              // Display Forgot Password form
              <ForgotPasswordForm />
            )}
          </div>
        </div>
      </div>
   
    </>
  );
};

export default ForgotPasswordPage;
