import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { loginWithEmail } from "../../slice/loginWithEmailSlice";
import FormikInput from "../../components/forms/FormikInput";
import GoogleLoginButton from "../../components/button/GoogleLogin";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});

const PlatformAuthIntegration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // State to track if OTP has been sent

  useEffect(() => {
    setLoading(false); // Reset loading state when component unmounts or changes
  }, []);

  useEffect(() => {
    if (otpSent) {
      toast.success("OTP has been sent to your email address");
    }else {}
  }, [otpSent]); // Show toast message when otpSent changes

  const parseQueryStringAndStoreInLocalStorage = () => {
    const urlParams = new URLSearchParams(location.search);

    const siteUrl = urlParams.get('siteUrl') ?? '';
    const siteName = urlParams.get('siteName') ?? '';

    localStorage.setItem('siteUrl', siteUrl);
    localStorage.setItem('siteName', siteName);
  };

  const handleFormSubmit = async (enteredEmail) => {
    try {
      setLoading(true); // Set loading state to true when request starts

      const res = await dispatch(loginWithEmail(enteredEmail));
      console.log("res", res)
      localStorage.removeItem("authToken")

      const dataObj = res?.payload?.data;
      const status = res?.payload?.status;
      const accountExist = dataObj?.accountExist;
      const emailAddress = dataObj?.emailAddress;
      const token = dataObj?.token;

      console.log(dataObj, "dataObj")
      if (status === 200) {
        await parseQueryStringAndStoreInLocalStorage();
        navigate(`/auth/opt-verification?new=${!accountExist}&email=${emailAddress}`);
        localStorage.setItem("authToken", token);
        setOtpSent(true); // Set otpSent to true when OTP is successfully sent
      }
    } catch (error) {
      console.error("Error calling loginWithEmail API:", error);
      toast.error("Failed to login. Please try again later.");
    } finally {
      setLoading(false); // Set loading state to false when request completes
    }
  };

  const handleContinueClick = (enteredEmail) => {
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
          onSubmit={() => { }} // No need to specify onSubmit here
        >
          {(formikProps) => (
            <Form>
              <div className="flex justify-center">
                <img src="/logo-b.png" className="w-[150px]" alt="" />
              </div>

              <h1 className="text-[20px] mt-4 font-bold text-center hidden md:block">
                Let's start with your email
              </h1>
              <h1 className="text-[35px] mt-4 font-bold text-center md:hidden">
                Let's start with your email
              </h1>

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
                  disabled={loading} // Disable the button when loading
                >
                  {loading ? ( // Show loader when loading is true
                    <span>Loading...</span>
                  ) : (
                    <span className="translate-y-[1.5px] text-[16px]">
                      Continue
                    </span>
                  )}
                </button>

                {/* <p className="text-center mt-4">
                  <strong>OR</strong>
                </p>
                <GoogleLoginButton /> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PlatformAuthIntegration;
