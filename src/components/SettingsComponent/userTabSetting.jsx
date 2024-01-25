import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import FormikInput from "../forms/FormikInput";
import FormikSelectInput from "./FormikSelectInput";
import ChangeEmail from "./ChangeEmail";
import { toast } from "react-toastify";
import getFetchConfig from "../../utils/getFetchConfig";
import appURLs from "../../appURL";
import { setUserProfile } from "../../slice/profileSlice";
import axios from "axios";
import "react-phone-number-input/style.css";
import standardFetchHandlers from '../../utils/standardFetchHandlers';
import handleFetchErrors from '../../utils/handleFetchErrors';
import PhoneInput from "react-phone-number-input";
import { GetAxiosConfig, PatchAxiosConfig } from "../../utils/axiosConfig.js";
import AnimatedLoader from "../loader/AnimatedLoader.jsx";
import {
  isValidNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
const UserTabSettings = ({ onUpdate, onSubmit, registrationData }) => {

  const [phoneNumberValue, setPhoneNumberValue] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const fetchConfig = getFetchConfig();
  const appURL = appURLs();

  const [isChangeEmailModalOpen, setChangeEmailModalOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [loading, toggoleLoading] = useState(false);
  const [userData, updateUserData] = useState({
    first_name:  "",
    last_name:  "",
    email_address:  "",
    country:  "",
    phone_number: "",
    business_type: "",
  })

  // useEffect(() => {
  //   setPhoneNumberValue(formValues.phone_number);
  // }, [formValues.phone_number]);

  const handleOpenChangeEmailModal = () => setChangeEmailModalOpen(true);
  const handleCloseChangeEmailModal = () => setChangeEmailModalOpen(false);

  // const count = useSelector((state) => state?.userProfile?.userProfile);
  // const userProfile = count;

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
  const businessTypeData = ["Small", "Large"];
  const notifySuccess = () =>
    toast.success("User profile updated successfully!");
  const notifyError = (errorMessage) =>
    toast.error(`Failed to update user profile: ${errorMessage}`);

  
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      toggoleLoading(true);
      const res = await PatchAxiosConfig(`user/update-account`,values)
         
      const resJSON = await res.data;

      if (resJSON?.status === 200) {
        toggoleLoading(false);
        return toast.success(resJSON.message);
        
      }else {
        toggoleLoading(false);
        return toast.success(resJSON.message);
      }
      
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
    }

    

    // console.log("working")
    //     fetch(`${appURL}/user/update-account`, {
    //       ...fetchConfig,
    //       method: "PATCH",
    //       body: JSON.stringify(values)
    //     })
    //   .then(handleFetchErrors)
    //   .then((resJSON) => {
    //     if (resJSON?.status === 200) {
    //       return  toast.success(resJSON.message)
    //     }
    //     else return toast.error(resJSON.message)
    
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      toggoleLoading(true);
      try {
        const res = await GetAxiosConfig(`user/user-profile`)
         
          
        
        const resJSON = await res.data;

        if (resJSON?.status === 200) {
          const user = resJSON?.acccount;

          const dataObj = {
            first_name: user?.user_info?.first_name,
            last_name: user?.user_info?.last_name,
            email_address: user?.user_info?.email_address,
            country: user?.user_basic_info?.country,
            phone_number: user?.user_info?.phone_number || "", 
            business_type: user?.user_basic_info?.business_type || "small",
          };
          updateUserData(dataObj);
          setPhoneNumberValue(user?.user_info?.phone_number || ""); 
          toggoleLoading(false);
       
        }else if(resJSON.status === 403){
     
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

    fetchProfileData();
  }, []);

  const Loader = () => {
    return (
      <div className="w-[100%] h-[100vh]  flex items-center justify-center top-0 left-0">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#ccc"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill={"#04c09c"}
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };


  return (
    loading ? <AnimatedLoader />:
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
          className="border-[1px] border-[#EBEBEB] rounded-[8px] grid mt-[10px] laptop:grid-cols-2 gap-x-[15px] gap-y-[10px] p-4 mb-5"
        >
          <Field name="first_name">
            {({ field }) => (
              <div className="w-[100%]">
                <FormikInput
                  inputLabel="First Name"
                  inputName="first_name"
                  inputType="text"
                  field={field}
                  form={Form}
                />
                {isSubmitting && (
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-500"
                  />
                )}
              </div>
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
                {isSubmitting && (
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
          {isSubmitting && (
            <ErrorMessage
              name="country"
              component="div"
              className="text-red-500"
            />
          )}

          <Field name="phone_number">
            {({ field, form }) => (
              <div className="w-[100%]">
                <PhoneInput
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
          {isSubmitting && (
            <ErrorMessage
              name="business_type"
              component="div"
              className="text-red-500"
            />
          )}

          <div className="flex justify-between items-end h-[]">
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
                  {isSubmitting && (
                    <ErrorMessage
                      name="email_address"
                      component="div"
                      className="text-red-500"
                    />
                  )}
                </div>
              )}
            </Field>

            <div style={{marginBottom:"10px"}} className="w-[35%]">
              <button
                type="button" 
                onClick={handleOpenChangeEmailModal}
                className="variant-txt-color"
              >
                Change Email
              </button>
            </div>
            <ChangeEmail
              isOpen={isChangeEmailModalOpen}
              onClose={handleCloseChangeEmailModal}
            />
          </div>

          <div className="w-[35%]">
          <button type="submit" className="variant-txt-color">
            Submit
          </button>
        </div>
        </div>

       
      </Form>
    </Formik>
                  
  );
};

export default UserTabSettings;