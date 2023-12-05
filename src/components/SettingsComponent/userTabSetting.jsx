import React from "react";
import { Formik, Form } from "formik";
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
  const onSubmit = (values, { setSubmitting }) => {
    // Submission logic
    onUpdate(values);
    setSubmitting(false);
  };

  const countriesData = [
    "Country1",
    "Country2",
    "Country3",
    "Country4",
    "Country5",
    "Country6",
    "Country7",
    "Country8",
    "Country9",
    "Country10",
  ];
  const businessTypeData = Array.from({ length: 123 }, (_, i) =>
    (i + 1).toString()
  );

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
              inputName="phoneNumber"
              inputType="tel"
            />

     <FormikSelectInput label="Business" name="country">
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

              <div className="w-[35%]">
                <SaveButton btnText="Change Email" />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default UserTabSettings;
