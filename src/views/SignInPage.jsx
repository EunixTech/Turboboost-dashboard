import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";
import axios from "axios"; // Import axios

import GoogleLoginButton from "../components/button/GoogleLogin";
import FormikInput from "../components/forms/FormikInput";
import SideBanner from "../components/SideBanner";
import TitleManager from "../components/TitleManager";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


import getFetchConfig from "../utils/getFetchConfig";
import appURLs from "../appURL";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  domain: Yup.string()
    .matches(/^(http|https):\/\/[^ "]+(\.[^ "]+)?$/, "Invalid domain name format")
    .required("Domain name is required"),
});

const SignInPage = () => { 
  const router = useNavigate();
  const screenWidth = useWidth();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [authType, toggleAuthType] = useState("login");
  const fetchConfig = getFetchConfig();
  const appURL = appURLs();

  const handleFormSubmit = async (values, { setSubmitting }) => {
    console.log(values)
   
      try {
        const res = await fetch(
          `${appURL}/api/shopify/shopify-auth`,
          {
            ...fetchConfig,
          method: "POST",
          body: JSON.stringify({
            shop_name: values.domain
          })
          }
        );

        const resJSON = await res.json();
        const redirectURL = resJSON.redirectURI;
        if(resJSON.status === 200){
          window.location.href = redirectURL;
        } else {
          return toast.error(resJSON.message)
        }

      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
  };


  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <TitleManager title={authType ? "Sign In" : "Sign Up"} conicalURL="shopify-auth" />
      
      <div className="laptop:w-[50%] mobile:w-[100%] mobile:overflow-y-auto px-[100px] h-[100vh] px-[7%] flex items-center laptop:justify-center">
        <div className="w-[100%]">
          <Formik
            initialValues={{
              domain: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >

            {() => (
              <Form>
                <img src="/logo-b.png" className="w-[150px]" alt="" />

               {
                authType === "login" ?
                <h1 className="text-[34px] mt-[10px] font-bold">Login to Existing <span className="turbo-boost-text">TurboBoost</span> Account</h1>:
                <h1 className="text-[34px] mt-[10px] font-bold">Connect Your Store</h1>
               }

                <div className="w-[100%] mt-[10px]">
                  <FormikInput
                    inputLabel="Enter your Shopify domain"
                    inputName="domain"
                    inputType="text"
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

          {/* <GoogleLoginButton /> */}

          {
            authType === "login" ?
            <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
            Don’t have an account?
            <span
              onClick={() => {
                toggleAuthType("register")
              }}
              className="text-[#06F] font-bold cursor-pointer"
            >
              {" "}
              Sign up{" "}
            </span>
          </p>:
 <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
 Already signed up?
 <span
   onClick={() => {
     toggleAuthType("login")
   }}
   className="text-[#06F] font-bold cursor-pointer"
 >
   {" "}
   login here{" "}
 </span>
</p>
          }
         
        </div>
      </div>

      {screenWidth > 1000 && <SideBanner />}
    </div>
  );
};

export default SignInPage;




