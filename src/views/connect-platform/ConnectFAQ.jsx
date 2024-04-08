import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify"; 
import { useNavigate } from "react-router-dom";
import FormikInput from "../../components/forms/FormikInput";
import FormikSelectInput from "../../components/SettingsComponent/FormikSelectInput";
import {PostAxiosConfig}  from "../../utils/axiosConfig";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  country: Yup.string().required("Country is required"),
  businessType: Yup.string().required("Business Type is required"),
});

const ConnectFAQ = () => {
  const navigate = useNavigate();
  const handleSubmit = async(values) => {
    console.log("Form values:", values);
    let endPoint = "api/wordpress/auth/update-account";
    const data = await PostAxiosConfig(endPoint, values);
    console.log("data*********",data)
    if (data.status === 200) {  
      navigate("/connector/website-connect");
    } else return toast.error(data?.message)
   
  };
  const businessTypeData = [
    "Solopreneur",
    "Dropshipper",
    "SMB",
    "Large",
    "Enterprise",
  ];
  const countryData = [
    "USA",
    "Canada",
    "UK",
    "Australia",
    "Germany",
    "France",
  ];

  return (
    <div className="flex items-center justify-center h-screen m-[10px]">
      <div className="w-full max-w-md">
        <img src="/logo-b.png" className="w-[150px] mx-auto" alt="" />

        <h1 className="text-[20px] mt-4 font-bold text-center">
          Ask a Question
        </h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            country: "",
            businessType: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="mt-6">
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full px-2 mb-2 sm:w-1/2">
                  <FormikInput
                    inputLabel="First Name"
                    inputName="firstName"
                    inputType="text"
                  />
                </div>
                <div className="w-full px-2 mb-2 sm:w-1/2">
                  <FormikInput
                    inputLabel="Last Name"
                    inputName="lastName"
                    inputType="text"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-2">
                <div className="w-full px-2 mb-2 sm:w-1/2">
                  {/* Updated to use FormikSelectInput for Country */}
                  <FormikSelectInput label="Country" name="country">
                    <option value="" disabled>
                      Select Country
                    </option>
                    {countryData.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </FormikSelectInput>
                </div>
                <div className="w-full px-2 mb-2 sm:w-1/2">
                  <FormikSelectInput label="Business" name="businessType">
                    <option value="" disabled>
                      Select Business
                    </option>
                    {businessTypeData.map((business) => (
                      <option key={business} value={business}>
                        {business}
                      </option>
                    ))}
                  </FormikSelectInput>
                </div>
              </div>

              <button
                type="submit"
                className="h-10 text-[#000] w-full font-medium cursor-pointer font-medium flex items-center justify-center px-4 mt-4 inter text-[12px] bg-[#38F8AC] rounded-sm mb-4"
              >
                <span className="translate-y-[1.5px] text-[16px]">
                  Continue -{">"}
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ConnectFAQ;