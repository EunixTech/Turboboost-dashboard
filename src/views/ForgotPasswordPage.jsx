import React from "react";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import SideBanner from "../components/SideBanner";

import useWidth from "../hooks/useWidth";

const ForgotPasswordPage = () => {

    const screenWidth = useWidth();

    return (

        <div className="w-[100%] h-[100vh] flex items-center justify-center">

            <div className="laptop:w-[50%] mobile:w-[100%]  px-[100px] h-[100vh] px-[7%] flex items-center justify-center">
                <div className="w-[100%]">
                    <img src="/logo-b.png" className="w-[150px]" alt="" />
                    <h1 className="text-[34px] mt-[10px] font-bold">Forgot Password?</h1>
                    <p className="text-[#969AA5] inter text-[14px] mb-[10px]"> Please enter your email address below</p>

                    <ForgotPasswordForm />

                </div>
            </div>

            {screenWidth > 1000 && (
                <SideBanner />
            )}
        </div>
    );
};

export default ForgotPasswordPage;
