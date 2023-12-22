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
import PhoneInput from "react-phone-number-input";
import {
  isValidNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
const UserTabSettings = ({ onUpdate, onSubmit, registrationData }) => {
  const [value, setValue] = useState();
  const [phoneNumberValue, setPhoneNumberValue] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const fetchConfig = getFetchConfig();
  const appURL = appURLs();

  const [isChangeEmailModalOpen, setChangeEmailModalOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const [formValues, setFormValues] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email_address: user?.email_address || "",
    country: user?.country || "",
    phone_number: user?.phone_number || "",
    business_type: user?.business_type || "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${appURL}/user/user-profile`,
          fetchConfig
        );
        const userData = response?.acccount?.user_info || {};
        dispatch(setUserProfile(userData));
      } catch (error) {}
    };

    fetchUserProfile();
  }, [dispatch]);

  useEffect(() => {
    setPhoneNumberValue(formValues.phone_number);
  }, [formValues.phone_number]);

  const handleOpenChangeEmailModal = () => setChangeEmailModalOpen(true);
  const handleCloseChangeEmailModal = () => setChangeEmailModalOpen(false);

  const count = useSelector((state) => state?.userProfile?.userProfile);
  const userProfile = count;

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

  const handleInputChange = (fieldName, value, { setFieldValue }) => {
    setFieldValue(fieldName, value);
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
    if (fieldName === "phone_number") {
      setPhoneNumberValue(value);
    }

  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);

    console.log("data", values);
    try {
      // Dispatch action to update Redux store
      await dispatch(setUserProfile(values));

      // Notify success
      notifySuccess();
    } catch (error) {
      // Notify error
      notifyError(error.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={formValues}
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
                  handleInputChange={handleInputChange}
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
                  handleInputChange={handleInputChange}
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
            defaultValue={userProfile?.country || ""}
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

          <FormikSelectInput label="Business" name="business_type">
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
                <div className="w-[63%]">
                  <FormikInput
                    inputLabel="Email"
                    inputName="email_address"
                    inputType="email"
                    field={field}
                    form={Form}
                    handleInputChange={handleInputChange}
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

            <div className="w-[35%]">
              <button
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
        </div>

        <div className="w-[35%]">
          <button type="submit" className="variant-txt-color">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default UserTabSettings;
