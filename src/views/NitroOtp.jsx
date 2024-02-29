import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyOTP } from "../slice/verifyOtpSlice";

const OTPComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      await dispatch(verifyOTP(otp));
      navigate("/connect-site");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="otp-container">
      <div className="flex justify-center">
        <img src="/logo-b.png" className="w-[150px]" alt="" />
      </div>

      <h3 className="mt-[10px] flex p-[10px]">
        Check your email for a code We've sent a 6-digit code to email. Please
        check your email inbox.
      </h3>
      <p className="mb-[10px]">{error && <div>{error}</div>}</p>
      <Formik
        initialValues={{ otp: "" }}
        onSubmit={() => handleSubmit()}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="otp-input-container">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => (
                  <input {...props} style={{ width: "4em", color: '#000' }} />
                )}
              />
            </div>
            <ErrorMessage name="otp" component="div" />
            <p className="flex justify-center">Re-send code</p>
            <button
              type="submit"
              disabled={isSubmitting}
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
