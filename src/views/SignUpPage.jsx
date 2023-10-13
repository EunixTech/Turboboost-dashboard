import React, { useState, useEffect } from "react";
import Axios from "axios";  
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slice/userApiSlice";
import { setCredentials } from "../slice/authSlice";
import GoogleLoginButton from "../components/button/GoogleLogin";

import {
  isTruthyString,
  isValidEmailAddress,
  isValidPassword,
} from "../utils/verification";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email_address: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bussiness_type: Yup.string().required("Business Type is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
});

export default function SignUpPage() {
  const router = useNavigate();
  const screenWidth = useWidth();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const submitForm = async (values) => {
    try {
      const response = await Axios.post("http://localhost:8000/v1/user/register-account", values);
  
      if (response.status === 201) {
        // Registration was successful, navigate to the login screen
        router.push("/auth/signIn");
      } else {
        // Handle errors here, e.g., by displaying an error message.
        // You can use toast to display error messages:
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle other error scenarios, e.g., network issues
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
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
                <img src="/logo-b.png" className="w-[150px]" alt="logoImage" />
                <h1 className="text-[34px] mt-[10px] font-bold">
                  {" "}
                  Create an account{" "}
                </h1>
                <p className="text-[#969AA5] inter text-[14px] mb-[10px]">
                  {" "}
                  Start your 7-day free trial, no credit card required.{" "}
                </p>
                <div className="w-[100%] mt-[20px] mb-[13px]">
                  <div className="flex justify-between">
                    <div className="w-[48%]">
                      <CustomFormInput
                        label="First Name"
                        name="first_name"
                        type="text"
                      />
                    </div>
                    <div className="w-[48%]">
                      <CustomFormInput
                        label="Last Name"
                        name="last_name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <CustomFormInput
                      label="Business Type"
                      name="bussiness_type"
                      type="text"
                    />
                  </div>
                  <div className="w-[48%]">
                    <CustomFormInput
                      label="Email"
                      name="email_address"
                      type="email"
                    />
                  </div>
                  <div className="w-[48%]">
                    <CustomFormInput
                      label="Password"
                      name="password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    className="mr-[5px]"
                    name="termandcondition"
                  />
                  <p className="text-[13px] font-medium translate-y-[1px] text-[#969AA5]">
                    I agree to the TurboBoost{" "}
                    <span className="text-[#18113C] cursor-pointer">
                      {" "}
                      Terms of Use{" "}
                    </span>{" "}
                    and{" "}
                    <span className="text-[#18113C] cursor-pointer">
                      {" "}
                      Privacy Policy{" "}
                    </span>
                  </p>
                </div>
                <button
                  type="submit"
                  className="h-[38px] text-[#000] w-[100%]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm mb-[20px]"
                >
                  <span className="translate-y-[1.5px]"> Create Account </span>
                </button>
              </Form>
            )}
          </Formik>
          <GoogleLoginButton />
          <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
            {" "}
            Already have an account?{" "}
            <span
              onClick={() => router.push("/auth/signIn")}
              className="text-[#06F] font-bold cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
      {screenWidth > 1000 && (
        <div className="w-[50%] h-[100vh] relative">
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
          <div className="w-[100%] h-[100vh]  flex items-end justify-end opacity-20 absolute z-20">
            <img
              src="/graphic/login/Vector.png"
              className="w-[95%]"
              alt="banner image"
            />
          </div>
          <div className="overflow-hidden w-[100%] h-[100vh] flex items-center flex-col justify-center absolute z-30">
            <h1 className="inter text-white text-[30px] text-center px-[100px] leading-[38px] font-medium">
              Increasing your website speed has dwnever been easier.
            </h1>
            <div className="w-[600px] mt-[10px] flex items-center justify-center">
              {[
                "7-day free trial",
                "One-click setup",
                "No fixed contracts",
              ].map((item, index) => (
                <div
                  key={index}
                  className="mr-[17px] h-[30px] flex items-center"
                >
                  <img
                    src="/graphic/login/tick.png"
                    className="w-[10px]  h-[10px] object-contain   mr-[8px]"
                    alt="svgIcon"
                  />
                  <p className="text-[13px] inter font-medium text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative laptop:w-[370px] scale-110 desktop:w-[65%] mt-[40px] h-[300px]">
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
  );
}

const CustomFormInput = ({ label, name, type }) => (
  <div className="mb-5">
    <label
      htmlFor={name}
      className="block text-[#969AA5] text-sm font-medium mb-2"
    >
      {label}
    </label>
    <Field
      type={type}
      id={name}
      name={name}
      className="w-full h-12 px-3 border rounded focus:outline-none focus:border-[#38F8AC] focus:ring-[#38F8AC] bg-gray-50 text-gray-800"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm"
    />
  </div>
);
