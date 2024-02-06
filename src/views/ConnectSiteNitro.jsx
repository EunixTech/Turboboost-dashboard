import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikInput from "../components/forms/FormikInput";
import GoogleLoginButton from "../components/button/GoogleLogin";
import TitleManager from "../components/TitleManager";
import axios from "axios";
import appURLs from "../appURL";
import getFetchConfig from "../utils/getFetchConfig";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  siteURL: Yup.string()
    .url("Invalid URL format")
    .required("Site URL is required"),
  siteName: Yup.string().required("Site Name is required"),
  sitePlatform: Yup.string().required("Site Platform is required"),
  subscription: Yup.string().required("Subscription option is required"),
});

const ConnectSiteNitro = () => {
  const fetchConfig = getFetchConfig();
  const appURL = appURLs();

  const [showAllPlans, setShowAllPlans] = useState(false);

  const handleFormSubmit = async (values) => {
    try {
      const authResponse = await axios.post(
        `${appURL}/api/shopify/shopify-auth`,
        {
          site_url: values.siteURL,
          site_name: values.siteName,
          site_platform: values.sitePlatform,
          subscription: values.subscription,
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
            siteURL: "",
            siteName: "",
            sitePlatform: "",
            subscription: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {() => (
            <Form>
              <img src="/logo-b.png" className="w-[150px]" alt="" />

              <div className="mt-6">
                <FormikInput
                  inputLabel="Site URL"
                  inputName="siteURL"
                  inputType="text"
                />
                <ErrorMessage
                  name="siteURL"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <FormikInput
                  inputLabel="Site Name"
                  inputName="siteName"
                  inputType="text"
                />
                <ErrorMessage
                  name="siteName"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <label
                  htmlFor="sitePlatform"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  Site Platform
                </label>
                <Field
                  as="select"
                  id="sitePlatform"
                  name="sitePlatform"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select a platform
                  </option>
                  <option value="WordPress">WordPress</option>
                  <option value="Shopify">Shopify</option>
                  <option value="React">React</option>
                </Field>
                <ErrorMessage
                  name="sitePlatform"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Choose a speed optimization subscription
                </label>
                <div className="flex items-center mt-2">
                  <div>
                    <p>Compare features</p>
                  </div>
                  <div className="flex items-center ml-2 mr-2">
                    <label htmlFor="monthly">Monthly</label>
                    <switch></switch>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="yearly">Yearly (Save 17%)</label>
                  </div>
                </div>
                <ErrorMessage
                  name="subscription"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {showAllPlans ? (
                  <>
                    <div className="bg-gray-100 rounded-md p-4 mt-4">
                      <label className="flex items-center">
                        <Field
                          type="radio"
                          name="subscription"
                          value="free"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                        />
                        <div>
                          <p className="font-semibold text-lg">Free $0/mo</p>
                          <p className="text-sm text-gray-600">
                            Standard features, 5k shared page views.
                          </p>
                          <p className="text-xs text-gray-500">
                            Great for starters, comes with a badge on your site.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="bg-gray-100 rounded-md p-4 mt-4">
                      <label className="flex items-center">
                        <Field
                          type="radio"
                          name="subscription"
                          value="business"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                        />
                        <div>
                          <p className="font-semibold text-lg">Business $0/mo</p>
                          <p className="text-sm text-gray-600">
                            Standard features, 5k shared page views.
                          </p>
                          <p className="text-xs text-gray-500">
                            Great for starters, comes with a badge on your site.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="bg-gray-100 rounded-md p-4 mt-4">
                      <label className="flex items-center">
                        <Field
                          type="radio"
                          name="subscription"
                          value="scale"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                        />
                        <div>
                          <p className="font-semibold text-lg">Scale $0/mo</p>
                          <p className="text-sm text-gray-600">
                            Standard features, 5k shared page views.
                          </p>
                          <p className="text-xs text-gray-500">
                            Great for starters, comes with a badge on your site.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="bg-gray-100 rounded-md p-4 mt-4">
                      <label className="flex items-center">
                        <Field
                          type="radio"
                          name="subscription"
                          value="growth"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                        />
                        <div>
                          <p className="font-semibold text-lg">Growth $0/mo</p>
                          <p className="text-sm text-gray-600">
                            Standard features, 5k shared page views.
                          </p>
                          <p className="text-xs text-gray-500">
                            Great for starters, comes with a badge on your site.
                          </p>
                        </div>
                      </label>
                    </div>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowAllPlans(true)}
                    className="text-[#38F8AC] text-sm mt-2 underline cursor-pointer focus:outline-none"
                  >
                    See more plans
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="h-10 text-[#000] w-full font-medium cursor-pointer font-medium flex items-center justify-center px-4 mt-4 inter text-[12px] bg-[#38F8AC] rounded-sm mb-4"
              >
                <span className="translate-y-[1.5px] text-[16px]">
                  Add
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ConnectSiteNitro;
