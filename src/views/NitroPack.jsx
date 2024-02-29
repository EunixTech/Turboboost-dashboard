import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { loginWithEmail } from "../slice/loginWithEmailSlice"; // Import your auth slice
import FormikInput from "../components/forms/FormikInput";
import GoogleLoginButton from "../components/button/GoogleLogin";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});

const NitroPack = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleFormSubmit = async (enteredEmail) => {
    // Dispatch the loginWithEmail action
    try {
      await dispatch(loginWithEmail(enteredEmail));
      // If the action dispatch is successful, navigate to the desired page
      navigate("/verifiy-email-otp");
    } catch (error) {
      console.error("Error calling loginWithEmail API:", error);
      // Handle the error, show toast message, etc.
      toast.error("Failed to login. Please try again later.");
    }
  };

  const handleContinueClick = (enteredEmail) => {
    // Validate the email before proceeding
    if (!enteredEmail || !Yup.string().email().isValidSync(enteredEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // Call the handleFormSubmit function to initiate the API call
    handleFormSubmit(enteredEmail);
  };

  return (
    <div className="flex items-center justify-center h-screen m-[10px]">
      <div className="w-full max-w-md">
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={() => {}} // No need to specify onSubmit here
        >
          {(formikProps) => (
            <Form>
              <div className="flex justify-center">
                <img src="/logo-b.png" className="w-[150px]" alt="" />
              </div>

              <h1 className="text-[60px] mt-4 font-bold text-center hidden md:block">
                Let's start with your email
              </h1>
              <h1 className="text-[36px] mt-4 font-bold text-center md:hidden">
                Let's start with your email
              </h1>
              <p className="text-[16px] text-center">
                Please use your <strong>work email</strong>.
              </p>
              <p className="text-[16px] text-center">
                If you already have a Turboboost account, use that email.
              </p>

              <div className="mt-6">
                <FormikInput
                  inputLabel="Enter your Email"
                  inputName="email"
                  inputType="email"
                  value={formikProps.values.email}
                  onChange={formikProps.handleChange}
                />

                <button
                  type="button"
                  onClick={() => handleContinueClick(formikProps.values.email)}
                  className="h-10 text-[#000] w-full font-medium cursor-pointer font-medium flex items-center justify-center px-4 mt-4 inter text-[12px] bg-[#38F8AC] rounded-sm mb-4"
                >
                  <span className="translate-y-[1.5px] text-[16px]">
                    Continue
                  </span>
                </button>

                <p className="text-center mt-4">
                  <strong>OR</strong>
                </p>
                <GoogleLoginButton />
                <p className="text-center mt-2">
                  By proceeding, you agree to the Terms of Use and the Privacy
                  Policy.
                </p>
                <p className="text-center mb-4">Contact us</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NitroPack;
