import React, { useState, useMemo } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import OtpInput from "react-otp-input";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyOTP } from "../../slice/verifyOtpSlice";
import { toast } from "react-toastify"; // Import toast library
import {PostAxiosConfig}  from "../../utils/axiosConfig"
const VerifyOTP = () => {
    const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);


  const queryParams = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return {
      email: searchParams.get('email'),
      isNew: searchParams.get('new')
    };
  }, [location.search]);

  const emailAddress = queryParams.email,
    isNewAccount = queryParams.isNew;

  const handleSubmit = async (values) => {
    try {

      const res = await dispatch(verifyOTP({ emailAddress, otp })); // Send email and OTP to verifyOTP action
 
      const isNewAccountBoolean = isNewAccount === 'true' ? true : false;

      const status = res?.payload?.status;
      if(status === 200 && isNewAccountBoolean === true){
        navigate("/auth/qustions");
      } else if(status === 200 && isNewAccountBoolean === false) {
        navigate("/connector/website-connect");
      } else {
        setError("Entered OTP is invalid");
        setOtp("");
      }
      
    } catch (error) {
      setError(error.response.data.message);
      toast.error("Entered OTP is invalid");
      setOtp("");
    }
  };

  const handleResendOTP = async() =>{
    let endPoint = "api/wordpress/auth/resend-otp";
    const data = await PostAxiosConfig(endPoint,{emailAddress});
    if (data.status === 200) {
    } else return toast.error(data?.message)
  }
  
  return (
    <div className="otp-container">
      <div className="flex justify-center">
        <img src="/logo-b.png" className="w-[150px]" alt="" />
      </div>

      <h3 className="mt-[10px] flex p-[10px] text-center">
        Check your email for a code We've sent a 6-digit code to email. <br /> Please
        check your email inbox.
      </h3>
      <p className="mb-[10px]">{error && <div>{error}</div>}</p>
      <Formik
        initialValues={{ otp: "" }} // Add email field to initialValues
        onSubmit={(values) => handleSubmit(values)} // Pass form values to handleSubmit
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="otp-input-container">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => (
                  <input {...props} style={{ width: "4em", color: '#000' }} />
                )}
              />
            </div>
            <ErrorMessage name="otp" component="div" />
            <p onClick={handleResendOTP} className="flex justify-center text-[#38F8AC] cursor-pointer">Re-send code</p>

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

export default VerifyOTP;
