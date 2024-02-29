import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikInput from "../components/forms/FormikInput";
import GoogleLoginButton from "../components/button/GoogleLogin";
import TitleManager from "../components/TitleManager";
import { useDispatch } from "react-redux";
import { connectSite } from "../slice/siteSlice";
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
  const [showAllPlans, setShowAllPlans] = useState(false);
  const dispatch = useDispatch();

  const handleFormSubmit = async (values) => {
    try {
      const response = await dispatch(connectSite(values));
      console.log(response.payload);
      toast.success("Site connected successfully");
      // Optionally, redirect the user to another page upon successful submission
      // navigate("/success-page");
    } catch (error) {
      console.error("Error connecting site:", error);
      toast.error("Failed to connect site");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen m-[10px]">
      <div className="w-full max-w-lg h-[80vh] overflow-y-scroll">
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
              <div className="flex justify-center">
                {" "}
                {/* Center the image horizontally */}
                <img src="/logo-b.png" className="w-[150px]" alt="" />
              </div>

              <div className="mt-6">
                <FormikInput
                  inputLabel="Site URL"
                  inputName="siteURL"
                  inputType="text"
                />

                <FormikInput
                  inputLabel="Site Name"
                  inputName="siteName"
                  inputType="text"
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

                {/* Show only one error message for subscription */}
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
                          value="free"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                        />
                        <div>
                          <p className="font-semibold text-lg">
                            Business <span>$21/mo</span> $0/mo
                          </p>
                          <p className="text-sm text-gray-600">
                            Standard features, 50k page views.
                          </p>
                          <p className="text-xs text-gray-500">
                            kickstart your page speed and core Web vitals.
                          </p>
                        </div>
                      </label>
                    </div>
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
                          value="free"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                        />
                        <div>
                          <p className="font-semibold text-lg">
                            Business <span>$21/mo</span> $0/mo
                          </p>
                          <p className="text-sm text-gray-600">
                            Standard features, 50k page views.
                          </p>
                          <p className="text-xs text-gray-500">
                            kickstart your page speed and core Web vitals.
                          </p>
                        </div>
                      </label>
                    </div>
                  </>
                ) : (
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
                          <p className="font-semibold text-lg">
                            Scale <span>$176 /mo</span> $146.67/mo
                          </p>
                          <p className="text-sm text-gray-600">
                            Font Subsetting, Adaptive image Sizing and 1M page
                            views.
                          </p>
                          <p className="text-xs text-gray-500">
                            Gives you better Core Web Vitals and cheaper page
                            views.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="bg-gray-100 rounded-md p-4 mt-4">
                      <label className="flex items-center">
                        <Field
                          type="radio"
                          name="subscription"
                          value="free"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                        />
                        <div>
                          <p className="font-semibold text-lg">Growth <span>$51/mo</span>  $0/mo</p>
                          <p className="text-sm text-gray-600">
                            Adaptive image sizing and 200k page views.
                          </p>
                          <p className="text-xs text-gray-500">
                            Gives you advanced speed and  optimization for growing sites.
                          </p>
                        </div>
                      </label>
                    </div>
                  </>
                )}

                {!showAllPlans && (
                  <button
                    type="button"
                    onClick={() => setShowAllPlans(true)}
                    className="text-[#38F8AC] text-sm mt-2 underline cursor-pointer focus:outline-none"
                  >
                    See more plans
                  </button>
                )}

                <button
                  type="submit"
                  className="h-10 text-[#000] w-full font-medium cursor-pointer font-medium flex items-center justify-center px-4 mt-4 inter text-[12px] bg-[#38F8AC] rounded-sm mb-4"
                >
                  <span className="translate-y-[1.5px] text-[16px]">Add</span>
                </button>    
                <p className="flex justify-center">You are logged in as email </p>
                  <p className="flex justify-center">Switch account</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );  
};

export default ConnectSiteNitro;
