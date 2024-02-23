import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
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
  console.log("iski maa ka bhodsa============>", otp);

  const handleSubmit = async (values) => {

    navigate("/connect-site");
  };

  return (
    <div className="otp-container">
      <div className="flex justify-center">
        {/* Center the image horizontally */}
        <img src="/logo-b.png" className="w-[150px]" alt="" />
      </div>

      <h3 className="mt-[10px] flex p-[10px]">Check your email for a code  We've sent a 6-digit code to email. Please check your email inbox.</h3>
      <p className="mb-[10px]">
       
      </p>
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="otp-input-container">
              <OtpInput
                value={otp} // Use state variable otp instead of the string "otp"
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
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
