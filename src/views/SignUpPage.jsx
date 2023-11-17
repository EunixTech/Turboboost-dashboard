import React from "react";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import axios from "axios";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import GoogleLoginButton from "../components/button/GoogleLogin";
import SideBanner from "../components/SideBanner";
import FormikInput from "../components/forms/FormikInput";

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

const SignUpPage = () => {
  const screenWidth = useWidth();
  const router = useNavigate();

  const handleCreateAccount = async (values) => {
    try {
      // Make the API request using Axios
      const response = await axios.post(
        "http://localhost:8000/v1/user/register-account",
        {
          first_name: values.first_name,
          last_name: values.last_name,
          email_address: values.email_address,
          country: values.country,
          bussiness_type: values.bussiness_type,
          password: values.password,
        }
      );
      console.log("response", response);
      // Handle the response as needed
      if (response.status === 201) {
        // Registration successful, you can redirect or display a success message
        router("/auth/signIn");
      } else {
        // Handle other response statuses or errors
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("API call error:", error);
      // Handle the error, e.g., show an error message
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="laptop:w-[50%] mobile:w-[100%] mobile:overflow-y-auto px-[100px] h-[100vh] px-[7%] flex items-center laptop:justify-center">
        <div className="w-[100%]">
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email_address: "",
              country: "",
              bussiness_type: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleCreateAccount}
          >
            {({ values, handleChange }) => (
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
                  <div className="grid grid-cols-1 laptop:grid-cols-2 gap-x-4">
                    <div>
                      <FormikInput
                        inputLabel="First Name"
                        inputName="first_name"
                        inputType="text"
                        value={values.first_name}
                      />
                    </div>
                    <div>
                      <FormikInput
                        inputLabel="Last Name"
                        inputName="last_name"
                        inputType="text"
                        value={values.last_name}

                      />
                    </div>
                  </div>

                  <FormikInput
                    inputLabel="Business Type"
                    inputName="bussiness_type"
                    inputType="text"
                    value={values.bussiness_type}

                  />

                  <FormikInput
                    inputLabel="Email"
                    inputName="email_address"
                    inputType="email"
                    value={values.email_address}

                  />
                  <FormikInput
                    inputLabel="Country"
                    inputName="country"
                    inputType="text"
                    value={values.country}

                  />
                  <FormikInput
                    inputLabel="Password"
                    inputName="password"
                    inputType="password"
                    value={values.password}

                  />
                </div>

                <div className="flex">
                  <input
                    type="checkbox"
                    className="mr-[5px]"
                    name="termandcondition"
                  />
                  <p className="text-[13px] font-medium translate-y-[1px] text-[#969AA5]">
                    {" "}
                    I agree to the TurboBoost
                    <span className="text-[#18113C] cursor-pointer">
                      {" "}
                      Terms of Use{" "}
                    </span>{" "}
                    and
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
                  <span className="translate-y-[1.5px]">Create Account</span>
                </button>
              </Form>
            )}
          </Formik>

          <GoogleLoginButton />
          <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
            {" "}
            Already have an account?
            <span
              onClick={() => router("/auth/signIn")}
              className="text-[#06F] font-bold cursor-pointer"
            >
              {" "}
              Login{" "}
            </span>
          </p>
        </div>
      </div>

      {screenWidth > 1000 && <SideBanner />}
    </div>
  );
};

export default SignUpPage;
