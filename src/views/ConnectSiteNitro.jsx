import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikInput from "../components/forms/FormikInput";
import GoogleLoginButton from "../components/button/GoogleLogin";
import TitleManager from "../components/TitleManager";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

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
  const [selectedPlan, setSelectedPlan] = useState("");
  const [websiteName, setWebsiteName] = useState("")
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get("http://localhost/turbo-boost");
    const name = searchParams.get("turboboost");
    if (url && name) {
      setWebsiteName(name);
      // You can set other state variables here if needed
    }
  }, [location]);


  const getPrice = (selectedPlan) => {
    // Implement logic to get the price based on the selected plan
    // For example:
    switch (selectedPlan) {
      case "free":
        return 0;
      case "scale":
        return 2;
      // Add more cases as needed
      default:
        return 0; // Default to 0 if plan is not recognized
    }
  };

  const makePayment = async (values) => {
    console.log("Values object:", values); // Log the values object before stringification
    const { siteURL, siteName, sitePlatform, subscription } = values;

    // Map the selected plan to the appropriate object structure
    const plan = [
      {
        plan: selectedPlan, // Use the selected plan
        price: getPrice(selectedPlan), // Implement getPrice function to get the price of the plan
      },
    ];

    const stripe = await loadStripe("pk_test_51OpD6QSJz8rbJBHZieagAHv6P9mHF2YYSKtNdsQDkpxnOFkNHzCzVLxeWWyqG2M0KzSogYIOOIdQBmXgHUlFOwI500eI4vY8u8");

    try {
      const body = { siteURL, siteName, sitePlatform, plan }; // Update 'subscription' to 'plan'
      const headers = { "Content-Type": "application/json" };

      const response = await fetch("http://localhost:8000/v1/api/wordpress/auth/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      const session = await response.json();
      console.log("Session object:", session); // Log the session object
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }

      console.log("Data to send:", body); // Log the body data after the request is sent
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };



  return (
    <div className="flex items-center justify-center h-screen m-[10px]">
      <div className="w-full max-w-lg h-[80vh] overflow-y-scroll">
      <Formik
          initialValues={{
            siteURL: "https://dashboard.turbo-boost.io/", 
            siteName: "Turboboost", // Prefill with obtained website name
            sitePlatform: "",
            subscription: "",
          }}
          validationSchema={validationSchema}
          // onSubmit={handleFormSubmit}
        >
          {() => (
            <Form>
              <div className="flex justify-center">
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
                </Field>
                <ErrorMessage
                  name="sitePlatform"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Choose a speed optimization subscription
                </label>

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
                          onClick={() => setSelectedPlan("free")}
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
                          value="scale"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                          onClick={() => setSelectedPlan("scale")}
                        />
                        <div>
                          <p className="font-semibold text-lg">Scale $2/mo</p>
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
                          value="grow"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                          onClick={() => setSelectedPlan("grow")}
                        />
                        <div>
                          <p className="font-semibold text-lg">Grow $5/mo</p>
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
                          value="pro"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                          onClick={() => setSelectedPlan("pro")}
                        />
                        <div>
                          <p className="font-semibold text-lg">Pro $10/mo</p>
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
                  <>
                    <div className="bg-gray-100 rounded-md p-4 mt-4">
                      <label className="flex items-center">
                        <Field
                          type="radio"
                          name="subscription"
                          value="free"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                          onClick={() => setSelectedPlan("free")}
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
                          value="scale"
                          className="mr-2 h-4 w-4 border-gray-300 rounded"
                          onClick={() => setSelectedPlan("scale")}
                        />
                        <div>
                          <p className="font-semibold text-lg">Scale $2/mo</p>
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
                  // type="submit"
                  onClick={makePayment}
                  className="h-10 text-[#000] w-full font-medium cursor-pointer font-medium flex items-center justify-center px-4 mt-4 inter text-[12px] bg-[#38F8AC] rounded-sm mb-4"
                >
                  <span className="translate-y-[1.5px] text-[16px]">make payment</span>
                </button>

                <p className="flex justify-center">You are logged in as email</p>
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
