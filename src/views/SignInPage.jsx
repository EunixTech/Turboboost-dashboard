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
    try {
      // Make the API request using Axios for signing in
      const response = await axios.post(
        "http://localhost:8000/v1/user/login-with-email",
        {
          email_address: values.email_address,
          password: values.password,
        }
      );

      // Handle the response as needed
      if (response.status === 200) {
        // Successful login, you can redirect or handle accordingly
        router("/"); // Redirect to the home page
      } else {
        // Handle other response statuses or errors
        console.error("Sign-in failed. Please try again.");
      }
    } catch (error) {
      console.error("API call error:", error);
      // Handle the error, e.g., show an error message
      console.error("Sign-in failed. Please try again.");
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




