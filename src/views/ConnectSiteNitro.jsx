import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikInput from "../components/forms/FormikInput";
import GoogleLoginButton from "../components/button/GoogleLogin";
import TitleManager from "../components/TitleManager";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

// Initialize toast
// toast.configure();

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
  const [websiteName, setWebsiteName] = useState("");
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(""); // State to store logged-in user's email
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get("http://localhost/turbo-boost");
    const name = searchParams.get("turboboost");
    if (url && name) {
      setWebsiteName(name);
      // You can set other state variables here if needed
    }
    const loggedInUserEmail = fetchLoggedInUserEmail();
    setLoggedInUserEmail(loggedInUserEmail);
  }, [location]);
  const fetchLoggedInUserEmail = () => {
    // Simulated fetch logic, replace with actual logic to fetch user's email
    return "user@example.com";
  };

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
  const getSubscriptionDetails = (subscription) => {
    // Implement logic to extract standard features and page views from the subscription
    // For demonstration, I'm returning static values
    return {
      standardFeatures: "Standard features",
      pageViews: "5k",
    };
  };

  const makePayment = async (values) => {
    console.log("Values object:", values); // Log the values object before stringification
  
    // Check if all required fields are present
    // if (!values.siteURL || !values.siteName || !values.sitePlatform || !values.subscription || !values.selectedPlan) {
    //   console.error("Missing required fields in values object.");
    //   return;
    // }
  
    // Extract necessary values from the input object
    const { siteURL, siteName, sitePlatform, subscription, selectedPlan } = values;
  
    // Call getSubscriptionDetails to get standardFeatures and pageViews
    const { standardFeatures, pageViews } = getSubscriptionDetails(subscription);
  
    if (selectedPlan === "free") {
      // Display toast message indicating plan added successfully
      toast.success("Plan added successfully!");
  
      // You can add further logic here if needed for the "free" plan
    } else {
      // Map the selected plan to the appropriate object structure
      const plan = [
        {
          plan: selectedPlan, // Use the selected plan
          price: getPrice(selectedPlan), // Implement getPrice function to get the price of the plan
        },
      ];
  
      const stripe = await loadStripe("pk_test_51OpD6QSJz8rbJBHZieagAHv6P9mHF2YYSKtNdsQDkpxnOFkNHzCzVLxeWWyqG2M0KzSogYIOOIdQBmXgHUlFOwI500eI4vY8u8");
  
      try {
        const body = {
          siteURL,
          siteName,
          sitePlatform,
          plan,
          standardFeatures, // Include standardFeatures in the body
          pageViews, // Include pageViews in the body
        };
  
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
        } else {
          // Close the window upon successful payment
          window.close();
        }
  
        console.log("Data to send:", body); // Log the body data after the request is sent
      } catch (error) {
        console.error("Error making payment:", error);
      }
    }
  };
  
  // Example usage of the makePayment function with a sample values object
  const values = {
    siteURL: "https://example.com",
    siteName: "Example Site",
    sitePlatform: "WordPress",
    subscription: "premium", // Assuming this is the subscription type
    selectedPlan: "premium_plan", // Assuming this is the selected plan
  };
  
  // Call the makePayment function with the values object
  makePayment(values);
  
  
  

// Function to extract standard features and page views from the subscription



  return (
    <div className="flex items-center justify-center h-screen m-[10px]">
      <div className="w-full max-w-lg h-[80vh] overflow-y-scroll">
        <Formik
          initialValues={{
            siteURL: "https://dashboard.turbo-boost.io/",
            siteName: "Turboboost", 
            sitePlatform: "",
            subscription: "",
          }}
          validationSchema={validationSchema}
          style={{ fontSize: "16px" }} // Set font size to 16px
          // onSubmit={handleFormSubmit}
        >
          {({ isValid }) => (
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
                <div className="mt-4">
                  <FormikInput
                    inputLabel="Site Name"
                    inputName="siteName"
                    inputType="text"
                    style={{ fontSize: "16px" }}
                    inputStyle={{ fontSize: '16px' }} // Set input font size to 16px
                  />
                </div>

                <div className="mt-4">
                  <label className="site-platform">Site Platform</label>
                  <Field
                    as="select"
                    id="sitePlatform"
                    name="sitePlatform"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" disabled>
                      Select a platform
                    </option>
                    <option value="WordPress text-black">WordPress</option>
                  </Field>
                  <ErrorMessage
                    name="sitePlatform"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label className="site-platform">
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
                              Great for starters, comes with a badge on your
                              site.
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
                              Standard features, 10k shared page views.
                            </p>
                            <p className="text-xs text-gray-500">
                              Great for starters, comes with a badge on your
                              site.
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
                              Standard features, 15k shared page views.
                            </p>
                            <p className="text-xs text-gray-500">
                              Great for starters, comes with a badge on your
                              site.
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
                              Standard features, 20k shared page views.
                            </p>
                            <p className="text-xs text-gray-500">
                              Great for starters, comes with a badge on your
                              site.
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
                              Great for starters, comes with a badge on your
                              site.
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
                              Standard features, 10k shared page views.
                            </p>
                            <p className="text-xs text-gray-500">
                              Great for starters, comes with a badge on your
                              site.
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
                </div>

                {selectedPlan === "free" ? (
                  <button
                    type="button"
                    onClick={makePayment}
                    disabled={!isValid} // Disable the button if the form is not valid
                    className="h-10 text-[#000] w-full font-medium cursor-pointer font-medium flex items-center justify-center px-4 mt-4 inter text-[12px] bg-[#38F8AC] rounded-sm mb-4"
                  >
                    <span className="translate-y-[1.5px] text-[16px]">Add</span>
                  </button>
                ) : (
                  // Make Payment button
                  <button
                    type="button"
                    onClick={makePayment}
                    disabled={!isValid} // Disable the button if the form is not valid
                    className="h-10 text-[#000] w-full font-medium cursor-pointer font-medium flex items-center justify-center px-4 mt-4 inter text-[12px] bg-[#38F8AC] rounded-sm mb-4"
                  >
                    <span className="translate-y-[1.5px] text-[16px]">
                      Make Payment
                    </span>
                  </button>
                )}
                {/* <p className="flex justify-center">
                You are logged in as {loggedInUserEmail}
                </p> */}
                {/* <p className="flex justify-center">Switch account</p> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ConnectSiteNitro;
