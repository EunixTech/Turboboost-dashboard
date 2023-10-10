import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";

import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slice/userApiSlice";
import { setCredentials } from "../slice/authSlice";
import GoogleLoginButton from "../components/button/GoogleLogin";
import InputFields from "../components/InputFields";
import { isTruthyString, isValidEmailAddress, isValidPassword } from "../utils/verification";

import toast from "react-hot-toast";


export default function SignUpPage() {
    const router = useNavigate(),
        screenWidth = useWidth();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);
    const [formData, updateFormData] = useState({
        first_name: "",
        last_name: "",
        email_address: "",
        bussiness_name: "",
        password: "",
    });


    const { first_name, last_name, email_address, bussiness_name, password } = formData;

    const onChangeHandler = (e) => {
        const inputName = e.target.name,
            inputValue = e.target.value;

        updateFormData((prevState) => ({
            ...prevState,
            [inputName]: inputValue,
        }));
    };

    const submitHandler = async (e) => {
        console.log("working")
        e.preventDefault();
        try {
            const missingData = [],
                invalidData = [];

            if (!isTruthyString(first_name)) missingData.push(`first name`);
            if (!isTruthyString(last_name)) missingData.push(`last name`);
            if (!isTruthyString(bussiness_name)) missingData.push(`bussiness name`);

            if (!email_address) missingData.push(`email address`);
            else if (email_address && !isValidEmailAddress(email_address)) invalidData.push(`email_address`);

            if (!password) missingData.push(`password`);
            // else if (password && !isValidPassword(password)) invalidData.push(`password should include at least one upper case, one lower case,one digit & special character`);

            const data = {
                first_name,
                last_name,
                email_address,
                bussiness_name,
                password,
            };
            // Show errors if needed
            if (missingData.length || invalidData.length) {
                if (missingData.length)
                    toast.error(`Missing:- ${missingData.join(`, `)}`);
                if (invalidData.length)
                    toast.error(`Invalid:- ${invalidData.join(`, `)}`);

                return;
            }

            // const res = await login(data).unwrap();
            // dispatch(setCredentials({ ...res }));

            formData?.remember_me && localStorage.setItem("rememberMe", JSON.stringify(data));

            navigate("/");
        } catch (err) {
            console.log(err);
            return toast.error(err?.data?.message || err.error);
        }
    };


    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo]);


    return (
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
            <div className="laptop:w-[50%] mobile:w-[100%] mobile:overflow-y-auto px-[100px] h-[100vh] px-[7%] flex items-center laptop:justify-center">

                <div className="w-[100%] ">
                    <form onSubmit={submitHandler}>
                        <img src="/logo-b.png" className="w-[150px]" alt="logoImage" />
                        <h1 className="text-[34px] mt-[10px] font-bold"> Create an account </h1>
                        <p className="text-[#969AA5] inter text-[14px] mb-[10px]"> Start your 7-day free trial, no credit card required. </p>

                        <div className="w-[100%] mt-[20px] mb-[13px]">

                            <div className="flex items-center justify-between">
                                <InputFields type="text" name="first_name" labelText="First Name" wrapperStyle={{ width: "48%" }} />
                                <InputFields type="text" name="last_name" labelText="Last Name" wrapperStyle={{ width: "48%" }} />
                            </div>
                            
                            <InputFields type="text" name="bussiness_name" labelText="Business Name" wrapperStyle={{ width: "100%" }} />
                            <InputFields type="email" name="email_address" labelText="Email" wrapperStyle={{ width: "100%" }} />
                            <InputFields type="password" name="password" labelText="Password" wrapperStyle={{ width: "100%" }} />

                        </div>


                        <div className="flex ">
                            <input type="checkbox" className="mr-[5px]" name="" id="" />
                            <p className="text-[13px] font-medium translate-y-[1px] text-[#969AA5]">
                                I agree to the TurboBoost{" "}
                                <span className="text-[#18113C] cursor-pointer"> Terms of Use </span>{" "} and {" "}
                                <span className="text-[#18113C] cursor-pointer"> Privacy Policy </span>
                            </p>
                        </div>
                    </form>

                    <div className="h-[38px] text-[#000] w-[100%]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm mb-[20px]">
                        <span className="translate-y-[1.5px]"> Create Account </span>
                    </div>

                    <GoogleLoginButton />

                    <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]"> Already have an account?{" "}
                        <span
                            onClick={() => { router("/auth/signIn"); }}
                            className="text-[#06F] font-bold cursor-pointer"
                        >
                            Login
                        </span>
                    </p>

                </div>

            </div>

            {screenWidth > 1000 && (
                <div className=" w-[50%] h-[100vh] relative">

                    <img
                        src="/graphic/login/bg.png"
                        className="w-[100%] h-[100vh] object-cover absolute z-0"
                        alt="svgIcon"
                    />
                    <div className="w-[100%] h-[100vh] flex items-center justify-center absolute z-10">
                        <img
                            src="/graphic/login/ellipse.png"
                            className="w-[100%] h-[100vh] object-cover"
                            alt="svgIcon"
                        />
                    </div>

                    <div className="w-[100%] h-[100vh]  flex items-end   justify-end opacity-20 absolute z-20">
                        <img src="/graphic/login/Vector.png" className="w-[95%] " alt="banner image" />
                    </div>

                    <div className="overflow-hidden w-[100%] h-[100vh]  flex items-center flex-col  justify-center  absolute z-30">
                        <h1 className="inter text-white text-[30px] text-center px-[100px] leading-[38px] font-medium ">
                            Increasing your website speed has dwnever been easier.
                        </h1>

                        <div className="w-[600px] mt-[10px] flex items-center justify-center">

                            {["7-day free trial", "One-click setup", "No fixed contracts"].map((item, index) => (
                                <div key={index} className="mr-[17px] h-[30px] flex items-center">
                                    <img
                                        src="/graphic/login/tick.png"
                                        className="w-[10px]  h-[10px] object-contain   mr-[8px]"
                                        alt="svgIcon"
                                    />
                                    <p className="text-[13px] inter font-medium text-white">{item}</p>
                                </div>
                            ))}

                        </div>

                        <div className=" relative laptop:w-[370px] scale-110 desktop:w-[65%] mt-[40px] h-[300px]">
                            <img src="/graphic/login/g1.png" alt="svgIcon" />
                            <img
                                src="/graphic/login/g2.png"
                                className="w-[350px] translate-x-[-70px] translate-y-[120px] absolute bottom-0 left-0"
                                alt="svgIcon"
                            />
                            <img
                                src="/graphic/login/g3.png"
                                className="w-[250px]  absolute top-[100px] right-0 translate-x-[50px] "
                                alt="svgIcon"
                            />
                        </div>

                    </div>

                </div>

            )}

        </div>

    )

}

