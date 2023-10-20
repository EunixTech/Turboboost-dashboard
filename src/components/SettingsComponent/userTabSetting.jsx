import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SaveButton from "./saveButton";

  const  UserTabSettings = () => {
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
    // Your submission logic here
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  const countriesData = ["Country1", "Country2", "Country3"];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="grid mt-[10px] laptop:grid-cols-2 gap-x-[15px] gap-y-[10px]">
          <div className="InputFields">
            <label
              htmlFor="firstName"
              className="block font-bold text-lg text-gray-700 mb-2"
            >
              First Name
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="rounded-md border border-gray-300 p-2 w-full"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error text-red-600"
            />
          </div>
          <div className="InputFields">
            <label
              htmlFor="lastName"
              className="block font-bold text-lg text-gray-700 mb-2"
            >
              Last Name
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="rounded-md border border-gray-300 p-2 w-full"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="error text-red-600"
            />
          </div>
          <div className="InputFields">
            <label
              htmlFor="country"
              className="block font-bold text-lg text-gray-700 mb-2"
            >
              Country
            </label>
            <Field
              as="select"
              id="country"
              name="country"
              className="rounded-md border border-gray-300 p-2 w-full"
            >
              {countriesData.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="country"
              component="div"
              className="error text-red-600"
            />
          </div>
          <div className="InputFields">
            <label
              htmlFor="phoneNumber"
              className="block font-bold text-lg text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <Field
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="rounded-md border border-gray-300 p-2 w-full"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="error text-red-600"
            />
          </div>
          <div className="InputFields">
            <label
              htmlFor="businessType"
              className="block font-bold text-lg text-gray-700 mb-2"
            >
              Business Type
            </label>
            <Field
              as="select"
              id="businessType"
              name="businessType"
              className="rounded-md border border-gray-300 p-2 w-full"
            >
              <option value="Small or Medium Business">
                Small or Medium Business
              </option>
              <option value="India">India</option>
            </Field>
            <ErrorMessage
              name="businessType"
              component="div"
              className="error text-red-600"
            />
          </div>
          <div className="flex justify-between items-end h-[]">
            <div className="InputFields">
              <label
                htmlFor="email"
                className="block font-bold text-lg text-gray-700 mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="rounded-md border border-gray-300 p-2 w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error text-red-600"
              />
            </div>
            <SaveButton btnText="Change Email" />
          </div>
        </div>
        <button
          type="submit"
          className="submit-button bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default UserTabSettings