import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";
import axios from "axios"; // Import axios

import GoogleLoginButton from "../components/button/GoogleLogin";
import FormikInput from "../components/forms/FormikInput";
import SideBanner from "../components/SideBanner";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email_address: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required"),
});

const SignInPage = () => { 
  const router = useNavigate();
  const screenWidth = useWidth();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const submitForm = async (values) => {
    axios.post("http://localhost:8000/v1/user/login-with-email", {
      email_address: values.email_address,
      password: values.password,
    })
    .then(response => {
      console.log("API Response:", response.status, response.data);
      if (response.data?.status === 400) { 
        console.error("Sign-in failed. Please try again.");
      } else if (response.status === 200) {
        router("/");
      } else {
        console.error("Sign-in failed. Please try again.");
      }
    })
      .catch(error => {
        console.error("API call error:", error);
        if (error.response && error.response.status === 400) {
          console.error("Invalid email or password. Please try again.");
        } else {
          console.error("Sign-in failed. Please try again.");
        }
      });
    
  }
  
  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTczNjc2NThhZmU4N2QwODM2YzA4OGQiLCJpYXQiOjE3MDIzODc2NDgsImV4cCI6MTcwNDk3OTY0OH0.zSBQ512pcmmU2XXDeiYfvEY8gUrN1GwC0lniUHLLkhY";
localStorage.setItem('accessToken', token);

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
              email_address: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >

            {() => (
              <Form>
                <img src="/logo-b.png" className="w-[150px]" alt="" />
                <h1 className="text-[34px] mt-[10px] font-bold">Sign In</h1>
                <p className="text-[#969AA5] inter text-[14px] mb-[10px]">
                  {" "}
                  Please enter your credentials below.
                </p>

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

                  <div className="w-[100%] flex justify-between">
                    <div className="flex">
                      <input
                        type="checkbox"
                        className="mr-[5px]"
                        name="remember_me"
                        // onChange={onChangeHandler}
                      />
                      <p className="text-[13px] font-medium text-[#000] translate-y-[1px]">
                        Remember me
                      </p>
                    </div>
                    <a href="/auth/forgot-password">
                      <p className="text-[13px] font-medium text-[#06F] text-[#06F] cursor-pointer translate-y-[1px]">
                        Forgot password
                      </p>
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="h-[38px] text-[#000] w-[100%] font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm mb-[20px]"
                  >
                    <span className="translate-y-[1.5px]">Sign In</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <GoogleLoginButton />
          <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
            Don’t have an account?
            <span
              onClick={() => {
                router("/auth/signUp");
              }}
              className="text-[#06F] font-bold cursor-pointer"
            >
              {" "}
              Sign up{" "}
            </span>
          </p>
        </div>
      </div>

      {screenWidth > 1000 && <SideBanner />}
    </div>
  );
};

export default SignInPage;




