import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OtpInput from "react-otp-input";

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^\d{6}$/, "OTP must be a 6-digit number")
    .required("OTP is required"),
});

const OTPComponent = () => {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/v1/api/wordpress/auth/verify-otp",
        { otp }
      );
      console.log(response.data); // Log the response for now

      if (response.data.message === "OTP verified successfully") {
        navigate("/connect-site");
      } else {
        console.error("OTP verification failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="otp-container">
      <div className="flex justify-center">
        <img src="/logo-b.png" className="w-[150px]" alt="" />
      </div>

      <h3 className="mt-[10px] flex p-[10px]">
        Check your email for a code. We've sent a 6-digit code to your email.
        Please check your inbox.
      </h3>

      <Formik
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="otp-input-container">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                isInputNum
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  fontSize: "2rem",
                  margin: "0 1rem",
                  borderRadius: "4px",
                  border: "1px solid #ced4da",
                  textAlign: "center",
                }}
              />
            </div>
            <ErrorMessage name="otp" component="div" />
            <p className="flex justify-center">
              {/* Conditional rendering of "Re-send code" message */}
              {isSubmitting && <span>Re-send code</span>}
            </p>
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
