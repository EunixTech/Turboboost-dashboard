import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import FormikInput from "../forms/FormikInput";
import SaveButton from "../button/SaveButton";
import FormikSelectInput from "./FormikSelectInput";
import ChangeEmail from "./ChangeEmail";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import getFetchConfig from "../../utils/getFetchConfig";
import standardFetchHandlers from "../../utils/standardFetchHandlers";
import handleFetchErrors from "../../utils/handleFetchErrors";
import appURLs from "../../appURL";
import { setUserProfile } from "../../slice/profileSlice";
import axios from "axios";
const UserTabSettings = ({ onUpdate, onSubmit, registrationData }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const fetchConfig = getFetchConfig(),
    appURL = appURLs();

    const [userData, updateUserData] = useState({
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    country: user.country || "",
    phone_number: user.phone_number || "",
    business_type: user.business_type || "",
    email_address: user.email_address || "",
  });

  useEffect(() => {
    // Fetch user profile data and dispatch the action to set it in the store
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${appURL}/user/user-profile`,
          fetchConfig
        );
        const userData = response?.acccount?.user_info || {};
        dispatch(setUserProfile(userData));
      } catch (error) {
        // Handle error
      }
    };

    fetchUserProfile();
  }, [dispatch]);
  const [isChangeEmailModalOpen, setChangeEmailModalOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

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
      .matches(/^\d{10}$/, "Invalid phone number")
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
  return (
    <>
      <Formik
        initialValues={{
          first_name: user?.first_name || "",
          last_name: user?.last_name || "",
          email_address: user?.email_address || "",
          country: user?.country || "",
          phone_number: user?.phone_number || "",
          business_type: user?.business_type || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          onSubmit(values, (error) => {
            setSubmitting(false);
            if (error) {
              notifyError(error.message || "An error occurred");
            } else {
              notifySuccess();
              dispatch(setUserProfile(values));
            }
          });
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
                inputValue={userData?.first_name}
              />
              {isSubmitting && (
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>

            <div className="w-[100%]">
              <FormikInput
                inputLabel="Last Name"
                inputName="last_name"
                inputType="text"
              />
              {isSubmitting && (
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-red-500"
                />
              )}
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
            {isSubmitting && (
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500"
              />
            )}

            <FormikInput
              inputLabel="Phone Number"
              inputName="phone_number"
              inputType="tel"
            />
            {isSubmitting && (
              <ErrorMessage
                name="phone_number"
                component="div"
                className="text-red-500"
              />
            )}

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
              <div className="w-[63%]">
                <FormikInput
                  inputLabel="Email"
                  inputName="email_address"
                  inputType="email"
                />
                {isSubmitting && (
                  <ErrorMessage
                    name="email_address"
                    component="div"
                    className="text-red-500"
                  />
                )}
              </div>

              <div className="w-[35%]">
                <button
                  onClick={handleOpenChangeEmailModal}
                  className="variant-btn"
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
            {/* <SaveButton btnText="Submit" type="submit" />
             */}
            <button type="submit" className="variant-btn">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default UserTabSettings;
