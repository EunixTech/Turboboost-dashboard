import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import FormikInput from "../forms/FormikInput";
import SaveButton from "../button/SaveButton";
import FormikSelectInput from "./FormikSelectInput";
import ChangeEmail from "./ChangeEmail";
import { Button } from "@mui/material";

const UserTabSettings = ({ onUpdate, registrationData }) => {
  const [isChangeEmailModalOpen, setChangeEmailModalOpen] = useState(false);

  const handleOpenChangeEmailModal = () => setChangeEmailModalOpen(true);
  const handleCloseChangeEmailModal = () => setChangeEmailModalOpen(false);

  const dispatch = useDispatch();
  const count = useSelector((state) => state?.userProfile?.userProfile);
  const userProfile = count;
  console.log("userProfile", userProfile);
  const dark = useSelector((state) => state.home.dark);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    country: Yup.string().required("Country is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Phone number is required"),
    businessType: Yup.string().required("Business Type is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(
        "http://localhost:8000/v1/user/update-account/6520095c29371858a78fb1ec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to update user information"
        );
      }

      const updatedUserData = await response.json();
      console.log("User information updated:", updatedUserData);

      onUpdate(updatedUserData);

      setSubmitting(false);
    } catch (error) {
      console.error("Error updating user information:", error.message);
      setSubmitting(false);
    }
  };

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

  return (
    <>
      <Formik
        initialValues={{
          first_name: userProfile?.first_name,
          last_name: userProfile?.last_name,
          email_address: userProfile?.email_address,
          country: userProfile?.country,
          phoneNumber: "empty",
          businessType: userProfile?.businessType,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission
          console.log("Form submitted with values:", values);
        }}
      >
        <Form>
          <div
            style={{
              backgroundColor: dark ? "#111317" : "#fff",
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="border-[1px] border-[#EBEBEB] rounded-[8px] grid mt-[10px] laptop:grid-cols-2 gap-x-[15px] gap-y-[10px] p-4 mb-5"
          >
            <div className="w-[100%]">
              <FormikInput
                inputLabel="First Name"
                inputName="first_name"
                inputType="text"
              />
            </div>

            <div className="w-[100%]">
              <FormikInput
                inputLabel="Last Name"
                inputName="last_name"
                inputType="text"
              />
            </div>

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

            <FormikInput
              inputLabel="Phone Number"
              inputName="phone_number"
              inputType="tel"
            />

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

            <div className="flex justify-between items-end h-[]">
              <div className="w-[63%]">
                <FormikInput
                  inputLabel="Email"
                  inputName="email_address"
                  inputType="email"
                />
              </div>

              {/* Use the submit button from the first file */}
              <div className="w-[35%]">
                <button
                  onClick={handleOpenChangeEmailModal}
                  className="variant-btn"
                >
                  Change Email
                </button>
                {/* <SaveButton onClick={handleOpenChangeEmailModal} btnText="Change Email" /> */}
              </div>
              <ChangeEmail
                isOpen={isChangeEmailModalOpen}
                onClose={handleCloseChangeEmailModal}
              />
            </div>
          </div>

          {/* Submit button inside the form */}
          <div className="w-[35%]">
            <SaveButton btnText="Submit" />
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default UserTabSettings;
