import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input";
import { GetAxiosConfig, PatchAxiosConfig, PostAxiosConfig } from "../../utils/axiosConfig.js";
import AnimatedLoader from "../loader/AnimatedLoader.jsx";
import FeatureCard from "../FeatureCard.jsx";
import FormikInput from "../forms/FormikInput";
import FormikSelectInput from "./FormikSelectInput";
import ChangeEmail from "./ChangeEmail";

const UserTabSettings = () => {

  const [phoneNumberValue, setPhoneNumberValue] = useState();

  const [isChangeEmailModalOpen, setChangeEmailModalOpen] = useState(false);
  const [loading, toggoleLoading] = useState(false);
  const [emailPreferences, updateEmailPreferences] = useState({});
  const [userData, updateUserData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    country: "",
    phone_number: "",
    business_type: "",
  })

  const handleOpenChangeEmailModal = () => setChangeEmailModalOpen(true);
  const handleCloseChangeEmailModal = () => setChangeEmailModalOpen(false);

  const dark = useSelector((state) => state.home.dark);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    country: Yup.string().required("Country is required"),
    phone_number: Yup.string()
      .transform((value, originalValue) => {
        // Remove non-numeric characters from the input value
        return originalValue.replace(/[^\d]/g, "");
      })
      .test("valid-phone-number", "Invalid phone number", function (value) {
        const { country } = this.parent;
        if (country && value) {
          try {
            const phoneNumber = parsePhoneNumberFromString(
              `+${value}`,
              country
            );
            return phoneNumber ? phoneNumber.isValid() : false;
          } catch (error) {
            console.error("Error parsing phone number:", error);
            return false;
          }
        }
        return true; // Return true if either country or phone number is not provided
      })
      .required("Phone number is required"),
    business_type: Yup.string().required("Business Type is required"),
    email_address: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const countriesData = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Japan",
    "Australia",
    "Brazil",
    "India",
  ];

  const businessTypeData = ["Solopreneur", "Dropshipper", "SMB", "Large", "Enterprise"];

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      toggoleLoading(true);
      const res = await PatchAxiosConfig(`user/update-account`, values)

      const resJSON = await res.data;

      if (resJSON?.status === 200) {
        toggoleLoading(false);
        return toast.success(resJSON.message);

      } else {
        toggoleLoading(false);
        return toast.success(resJSON.message);
      }

    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
    }

  };

  const fetchProfileData = async () => {
    toggoleLoading(true);
    try {
      const res = await GetAxiosConfig(`user/user-profile`)

      const resJSON = await res.data;

      if (resJSON?.status === 200) {
        const user = resJSON?.acccount;
        console.log("user,user", user)

        const dataObj = {
          first_name: user?.user_info?.first_name,
          last_name: user?.user_info?.last_name,
          email_address: user?.user_info?.email_address,
          country: user?.user_basic_info?.country,
          phone_number: user?.user_info?.phone_number || "",
          business_type: user?.user_basic_info?.business_type || "",
        };
        updateEmailPreferences(user?.email_preferences)
        updateUserData(dataObj);
        setPhoneNumberValue(user?.user_info?.phone_number || "");
        toggoleLoading(false);
      } else if (resJSON.status === 403) {

        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');

      }
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
      console.error("Error fetching user profile data:", error);
    }
  };


  useEffect(() => {
   
    fetchProfileData();
  }, []);

  const toggleEssentialEmailPreferences = async () => {
    toggoleLoading(true);
    const res = await PostAxiosConfig(`user/email-preferences-handler`, {
      preferences: {
        "essential": emailPreferences?.essential ? 2 : 1
      }
    })
    const resData =  res.data;

    if (resData.status === 200) {
      fetchProfileData();
    } else return toast.error(resData?.message)

  }
  const togglePromotionsSpecialPreferences = async () => {
    toggoleLoading(true);
    const res = await PostAxiosConfig(`user/email-preferences-handler`, {
      preferences: {
        "promotions_offers": emailPreferences?.promotions_offers ? 2 : 1
      }
    })
    const resData =  res.data;

    if (resData.status === 200) {
      fetchProfileData();
    } else return toast.error(resData?.message);
  }
  const togglefeaturesPreferences = async () => {
    toggoleLoading(true);
    const res = await PostAxiosConfig(`user/email-preferences-handler`, {
      preferences: {
        "features_articles_company": emailPreferences?.features_articles_company ? 2 : 1
      }
    })
    const resData =  res.data;

    if (resData.status === 200) {
      fetchProfileData();
    } else return toast.error(resData?.message);
  }

  return (
    loading ? <AnimatedLoader /> :
      <>
        <Formik
          initialValues={{
            first_name: userData?.first_name || "",
            last_name: userData?.last_name || "",
            email_address: userData?.email_address || "",
            country: userData?.country || "",
            phone_number: userData?.phone_number || "",
            business_type: userData?.business_type || "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="border-[1px] border-[#EBEBEB] rounded-[8px] laptop:grid-cols-2 gap-x-[15px] gap-y-[10px] p-4 mb-5"
            >
              <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[20px] mb-[10px] font-bold tracking-wide "
              >
                Details
              </h1>
              <div className="user_tab_card" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px"
              }}>
                <Field name="first_name">
                  {({ field }) => (
                    <>
                      <FormikInput
                        inputLabel="First Name"
                        inputName="first_name"
                        inputType="text"
                        field={field}
                        form={Form}
                      />
                      {false && (
                        <ErrorMessage
                          name="first_name"
                          component="div"
                          className="text-red-500"
                        />
                      )}
                    </>
                  )}
                </Field>

                <Field name="last_name">
                  {({ field }) => (
                    <div className="w-[100%]">
                      <FormikInput
                        inputLabel="Last Name"
                        inputName="last_name"
                        inputType="text"
                        field={field}
                        form={Form}
                      />
                      {false && (
                        <ErrorMessage
                          name="last_name"
                          component="div"
                          className="text-red-500"
                        />
                      )}
                    </div>
                  )}
                </Field>

                <FormikSelectInput
                  label="Country"
                  name="country"
                  defaultValue={userData?.country || ""}
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {countriesData.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </FormikSelectInput>
                {false && (
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500"
                  />
                )}

                <Field className={dark ? "dark_color" : "white_color"} name="phone_number">

                  {({ field, form }) => (
                    <div className="w-[100%]">

                      <label style={{
                        color: dark ? "#ffffff74" : "#0a0a187e",
                      }} htmlFor="Phone Number " className="text-[14px] font-bold tracking-wide  text-[#0a0a187a]">
                        Phone Number
                      </label>
                      <PhoneInput
                        style={{
                          backgroundColor: dark ? "#ffffff74" : "#0a0a187e",
                        }}
                        placeholder="Enter phone number"
                        value={phoneNumberValue}
                        onChange={(formattedValue) => {
                          setPhoneNumberValue(formattedValue);
                          form.setFieldValue("phone_number", formattedValue);
                        }}
                      />
                      {form.touched.phone_number && form.errors.phone_number && (
                        <ErrorMessage
                          name="phone_number"
                          component="div"
                          className="text-red-500"
                        />
                      )}
                    </div>
                  )}
                </Field>

                <FormikSelectInput
                  label="Business"
                  name="business_type"
                  defaultValue={userData?.business_type || ""}
                >
                  <option value="" disabled>
                    Select Business
                  </option>
                  {businessTypeData.map((business) => (
                    <option key={business} value={business}>
                      {business}
                    </option>
                  ))}
                </FormikSelectInput>
                {false && (
                  <ErrorMessage
                    name="business_type"
                    component="div"
                    className="text-red-500"
                  />
                )}

                <div className="flex justify-between items-end mb-[10px]">
                  <Field name="email_address">
                    {({ field }) => (
                      <div className="w-[100%] mr-[10px]">
                        <FormikInput
                          inputLabel="Email"
                          inputName="email_address"
                          inputType="email"
                          field={field}
                          form={Form}

                        />
                        {false && (
                          <ErrorMessage
                            name="email_address"
                            component="div"
                            className="text-red-500"
                          />
                        )}
                      </div>
                    )}
                  </Field>

                  <div
                    onClick={handleOpenChangeEmailModal}
                    className={` w-[150px] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"} h-[38px] mt-[20px] mb-[-4px] ml-[10px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
                  >
                    <p
                      className={`text-[${true ? "#fff" : "#000"}]   f2 text-[12px]   ${dark ? "bg-[#000]" : "bg-[#000]"
                        } rounded-[4px] active:translate-y-[0px] hover:bg-[#333345] active:border-0 translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
                    >
                      Change Email
                    </p>
                  </div>
                  <ChangeEmail
                    isOpen={isChangeEmailModalOpen}
                    onClose={handleCloseChangeEmailModal}
                  />
                </div>

              </div>
            </div>

          </Form>
        </Formik>

        <div
          style={{
            backgroundColor: dark ? "#111317" : "#fff",
            borderColor: dark ? "#1F2329" : "#ebebeb",
          }}
          className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[12px] mb-[30px] rounded-[8px] w-[100%]"
        >
          <h1
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[20px] px-[15px] mb-[12px]  font-bold tracking-wide "
          >
            E-mail Notification Preferences
          </h1>

          <FeatureCard
            handlingToggle={toggleEssentialEmailPreferences}
            toggleValue={emailPreferences?.essential}
            title="Essential emails"
            description="Important emails about your TurboBoost account billing, resource usage
            and other account activity related events. These notifications are
            always on because they are directly related to us delivering the
            TurboBoost service to you."
            h={"80px"}
          />

          <FeatureCard
            handlingToggle={togglefeaturesPreferences}
            toggleValue={emailPreferences?.features_articles_company}
            title="New features, tips and tricks articles, and company news"
            description="Our newsletters, surveys, and other helpful content."
            h={"80px"}
          />
          <FeatureCard
            handlingToggle={togglePromotionsSpecialPreferences}
            toggleValue={emailPreferences?.promotions_offers}
            title="Promotions and special offers"
            description="Our seasonal offers and exclusive upgrade deals."
            h={"80px"}
          />

        </div>
      </>
  );
};

export default UserTabSettings;
