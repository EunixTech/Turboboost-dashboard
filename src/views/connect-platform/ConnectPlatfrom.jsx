import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { planMockData, planDetail } from "../../utils/constant";
import FormikInput from "../../components/forms/FormikInput";
import appURLs from '../../appURL';
import axios from "axios"

const validationSchema = Yup.object().shape({
  siteURL: Yup.string()
    .url("Invalid URL format")
    .required("Site URL is required"),
  siteName: Yup.string().required("Site Name is required"),
  sitePlatform: Yup.string().required("Site Platform is required"),
  subscription: Yup.string().required("Subscription option is required"),
});


const ConnectPlatfrom = () => {
  const [selected, setSelected] = useState(0);
  const [showPlanCount, updateShowPlanCount] = useState(2);
  const [showAllPlans, setShowAllPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [websiteName, setWebsiteName] = useState("");
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(""); // State to store logged-in user's email
  const location = useLocation();

  const appURL = appURLs();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get("http://localhost/turbo-boost");
    const name = searchParams.get("turboboost");
    if (url && name) { setWebsiteName(name) }

  }, [location]);


  const handleFormSubmit = async (value) => {
    const { siteURL, siteName, subscription, sitePlatform } = value;
    const planDataObj = planDetail[subscription];

    const stripe = await loadStripe("pk_test_51OpD6QSJz8rbJBHZieagAHv6P9mHF2YYSKtNdsQDkpxnOFkNHzCzVLxeWWyqG2M0KzSogYIOOIdQBmXgHUlFOwI500eI4vY8u8");

    // Example usage of the makePayment function with a sample values object
    const dataObj = {
      Plan: [planDataObj],
      siteURL: siteURL,
      siteName: siteName,
      sitePlatform: sitePlatform,
    };

    // console.log("sagdjhagsdjhags")
    // const endPoint = "api/wordpress/auth/create-checkout-session";
    // const data = await PostAxiosConfig(endPoint, dataObj);
    // console.log("data*********",data)
    // if (data.status === 200) {  
    //   const session = await response.json();
    //   const result = await stripe.redirectToCheckout({
    //     sessionId: session.id,
    //   });
    // } else return toast.error(data?.message)

    // Call the makePayment function with the values object
    const headers = { "Content-Type": "application/json" };

    // const response = await fetch(`http://localhost:8000/v1/api/wordpress/auth/create-checkout-session`, {
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify(dataObj),
    // });
    const appURL = appURLs();
    const token = localStorage.getItem("authToken");
    const redirectUrl = localStorage.getItem("siteUrl");
    const response = await axios.post(`${appURL}/api/wordpress/auth/create-checkout-session?redirectUrl=${redirectUrl}`,
      dataObj,
      { 
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log("response",response)

    const session = await response.data;
    console.log(session?.id)
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  }

  return (
    <div className="flex items-center justify-center h-screen m-[10px]">
      <div className="w-full max-w-lg h-[80vh] overflow-y-scroll">
        <Formik
          initialValues={{
            siteURL: localStorage.getItem("siteUrl") ? `${localStorage.getItem("siteUrl")}/` : "http://localhost/turbo-boost/",
            siteName: localStorage.getItem("siteName") ?  localStorage.getItem("siteName"): "turbo-boost",
            sitePlatform: "",
            subscription: "",
          }}
          validationSchema={validationSchema}
          style={{ fontSize: "16px" }} // Set font size to 16px
          onSubmit={handleFormSubmit}
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

                  {
                    planMockData?.slice(0, showPlanCount).map((item, index) => {
                      return <div className="bg-gray-100 rounded-md p-4 mt-4">
                        <label className="flex items-center">
                          <Field
                            type="radio"
                            name="subscription"
                            value={item?.name}
                            className="mr-2 h-4 w-4 border-gray-300 rounded"
                            onClick={() => setSelectedPlan(item?.name)}
                          />
                          <div>
                            <p className="text-sm text-gray-600">	{item?.name} {selected === 0
                              ? `$${item?.monthlyPrice}`
                              : `$${item?.annuallyPrice}`}
                              <span className="text-sm text-gray-600">
                                {" "}
                                /{selected === 0 ? "month" : "year"}
                              </span></p>
                            <p
                              style={{
                                color: "#0a0a187e",
                              }}
                              className="text-sm text-gray-600"
                            >
                              <span className="text-sm text-gray-600">{item?.pageViews}</span> page
                              views/mo
                            </p>

                            <p className="text-xs text-gray-500">
                              {item?.desc}
                              site.
                            </p>
                          </div>
                        </label>
                      </div>
                    })

                  }
                  {!showAllPlans && (
                    <button
                      type="button"
                      onClick={() => updateShowPlanCount(10)}
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
                  <span className="translate-y-[1.5px] text-[16px]">{selectedPlan === "Basic" ? "Add" : "Make Payment"}</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ConnectPlatfrom;
