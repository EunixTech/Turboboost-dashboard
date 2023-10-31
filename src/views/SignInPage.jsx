import React, { useEffect } from "react";
import SignInForm from "../components/forms/signIn";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import { useSelector } from 'react-redux';

import GoogleLoginButton from "../components/button/GoogleLogin";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikInput from "../components/forms/FormikInput";
import SideBanner from "../components/SideBanner";

const validationSchema = Yup.object().shape({

    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email_address: Yup.string().email("Invalid email address").required("Email is required"),
    bussiness_type: Yup.string().required("Business Type is required"),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        ).required("Password is required"),
});

const SignInPage = () => {


    const submitForm = async (values) => {
        // dispatch(registerUser(values));
    };


    const router = useNavigate(),
        screenWidth = useWidth(),
        navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);


    return (

        <div className="w-[100%] h-[100vh] flex items-center justify-center">
            <div className="laptop:w-[50%] mobile:w-[100%] mobile:overflow-y-auto px-[100px] h-[100vh] px-[7%] flex items-center laptop:justify-center">
                <div className="w-[100%]">
                    <Formik
                        initialValues={{
                            first_name: "",
                            last_name: "",
                            email_address: "",
                            bussiness_type: "",
                            password: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={submitForm}
                    >
                        {() => (
                            <Form>

                                <img src="/logo-b.png" className="w-[150px]" alt="" />
                                <h1 className="text-[34px] mt-[10px] font-bold">Sign In</h1>
                                <p className="text-[#969AA5] inter text-[14px] mb-[10px]"> Please enter your credentials below.</p>

                                <div className="w-[100%] mt-[20px] mb-[13px]">

                                    <FormikInput
                                        inputLabel="Email"
                                        inputName="email_address"
                                        inputType="email"
                                    />

                                    <FormikInput
                                        inputLabel="Password"
                                        inputName="password"
                                        inputType="password"
                                    />

                                </div>

                                {/* <div className="flex">
                                <input
                                    type="checkbox"
                                    className="mr-[5px]"
                                    name="termandcondition"
                                />
                                <p className="text-[13px] font-medium translate-y-[1px] text-[#969AA5]"> I agree to the TurboBoost
                                    <span className="text-[#18113C] cursor-pointer"> Terms of Use </span> and
                                    <span className="text-[#18113C] cursor-pointer"> Privacy Policy </span>
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="h-[38px] text-[#000] w-[100%]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm mb-[20px]"
                            > <span className="translate-y-[1.5px]"> Create Account </span> </button> */}
                            </Form>

                        )}

                    </Formik>

                    <GoogleLoginButton />
                    <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
                        Don’t have an account?
                        <span onClick={() => { router("/auth/signUp"); }} className="text-[#06F] font-bold cursor-pointer" > Sign up </span>
                    </p>
                </div>

            </div>

            {screenWidth > 1000 && (
                <SideBanner />
            )}

        </div>


    );

};

export default SignInPage;
