import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slice/userApiSlice";
import GoogleLoginButton from "../components/button/GoogleLogin";
import { registerUser, resetStatus } from "../slice/registerationSlice";

import toast from "react-hot-toast";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikInput from "../components/forms/FormikInput";
import SideBanner from "../components/SideBanner";

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

export default function SignUpPage() { debugger
  const dispatch = useDispatch();
  const registerStatus = useSelector(
    (state) => state.registration.registerStatus
  );
  const router = useNavigate();
  const screenWidth = useWidth();

  const submitForm = async (values) => {
    // Dispatch the registration action
    dispatch(registerUser(values));
  };

  useEffect(() => { 
    // Handle the registration status
    if (registerStatus === "succeeded") {
      // Registration was successful, navigate to the login screen
      router("/auth/signIn");
    } else if (registerStatus === "failed") {
      // Handle registration errors (display a message, etc.)
      toast.error("Registration failed. Please try again.");
      // Optionally reset the status to 'idle'
      dispatch(resetStatus());
    }
  }, [router, registerStatus, dispatch]);

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
                      <FormikInput
                        inputLabel="First Name"
                        inputName="first_name"
                        type="text"
                      />
                    </div>
                    <div className="w-[48%]">
                      <FormikInput
                        inputLabel="Last Name"
                        inputName="last_name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <FormikInput
                      inputLabel="Business Type"
                      inputName="bussiness_type"
                      inputType="text"
                    />
                  </div>
                  <div className="w-[48%]">
                    <FormikInput
                      inputLabel="Email"
                      inputName="email_address"
                      inputType="email"
                    />
                  </div>
                  <div className="w-[48%]">
                    <FormikInput
                      inputLabel="Password"
                      inputName="password"
                      inputType="password"
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
              onClick={() => router("/auth/signIn")}
              className="text-[#06F] font-bold cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
      {screenWidth > 1000 && (
        <SideBanner />
      )}
    </div>
  );
}
