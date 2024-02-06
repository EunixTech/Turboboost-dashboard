import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "../components/forms/FormikInput";
import GoogleLoginButton from "../components/button/GoogleLogin";
import TitleManager from "../components/TitleManager";
import axios from "axios";
import appURLs from "../appURL";
import getFetchConfig from "../utils/getFetchConfig";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  domain: Yup.string()
    .matches(
      /^(http|https)?:\/\/(www\.)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?|[\w-]+\.myshopify\.com$/,
      "Invalid domain name format"
    )
    .required("Domain name is required"),
});

const NitroPack = () => {
  const fetchConfig = getFetchConfig();
  const appURL = appURLs();

  const handleFormSubmit = async (values) => {
    try {
      const authResponse = await axios.post(
        `${appURL}/api/shopify/shopify-auth`,
        {
          shop_name: values.domain,
        },
        {
          withCredentials: true,
        }
      );

      const resJSON = authResponse?.data;
      const redirectURL = resJSON.redirectURI;

      if (resJSON.status === 200) {
        window.location.href = redirectURL;
      } else {
        return toast.error(resJSON.message);
      }
    } catch (error) {
      console.error("Error fetching user profile data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen m-[10px]">
      <div className="w-full max-w-md">
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
                If you already have a NitroPack account, use that email.
              </p>

              <div className="mt-6">
                <FormikInput
                  inputLabel="Enter your Email"
                  inputName="domain"
                  inputType="email"
                />

                <button
                  type="submit"
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
