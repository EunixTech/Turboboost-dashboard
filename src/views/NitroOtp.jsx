import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^\d{6}$/, "OTP must be a 6-digit number")
    .required("OTP is required"),
});

const OTPComponent = ({ handleSuccess }) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setSubmitting(true);
      // Simulate API call to verify OTP (replace with your actual API call)
      const response = await axios.post("/api/verify-otp", {
        otp: values.otp,
      });
      // Assuming your API returns success status
      if (response.data.success) {
        handleSuccess();
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="otp-container">
        <div className="flex justify-center">
                {" "}
                {/* Center the image horizontally */}
                <img src="/logo-b.png" className="w-[150px]" alt="" />
              </div>

      <h3 className="mt-[10px]">Check your email for a code</h3>
      <p className="mb-[10px]">We've sent a 6-digit code to email. Please check your email inbox.</p>
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="otp-input-container">
              {[...Array(6)].map((_, index) => (
                <Field
                  key={index}
                  type="text"
                  name={`otp[${index}]`}
                  maxLength={1}
                  className="otp-input"
                  disabled={isSubmitting}
                />
              ))}
            </div>
            <ErrorMessage name="otp" component="div" />
              <p className="flex justify-center">Re-send code</p>
            <button
              type="submit"
              disabled={isSubmitting || submitting}
              className="h-10 text-[#000] w-full font-medium cursor-pointer font-medium flex items-center justify-center px-4 mt-4 inter text-[12px] bg-[#38F8AC] rounded-sm mb-4"
            >
              <span className="translate-y-[1.5px] text-[16px]">Submit</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OTPComponent;
