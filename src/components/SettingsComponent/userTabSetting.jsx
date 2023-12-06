import React from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import FormikInput from "../forms/FormikInput";
import SaveButton from "../button/SaveButton";
import FormikSelectInput from "./FormikSelectInput";
const UserTabSettings = ({ onUpdate }) => {
  const dark = useSelector((state) => state.home.dark);
  const initialValues = {
    firstName: "",
    lastName: "",
    country: "",
    phoneNumber: "",
    businessType: "Small or Medium Business",
    email: "",
  };
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    country: Yup.string().required("Country is required"),
    phone_number: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Phone number is required"),
    business_type: Yup.string().required("Business Type is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });


  const onSubmit = async (values, { setSubmitting }) => {
  
    try {
      const response = await fetch("http://localhost:3000/v1/user/update-account/6520095c29371858a78fb1ec", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), 
      });

      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message || "Failed to update user information");
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
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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

            <FormikSelectInput label="Country" name="country">
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
                  inputName="email"
                  inputType="email"
                />
              </div>

            
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>

    </>
  );
};

export default UserTabSettings;
