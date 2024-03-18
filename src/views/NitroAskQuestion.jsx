import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  country: Yup.string().required('Country is required'),
  businessType: Yup.string().required('Business Type is required'),
});

const NitroAskQuestion = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          country: '',
          businessType: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <Field type="text" id="country" name="country" />
              <ErrorMessage name="country" component="div" />
            </div>
            <div>
              <label htmlFor="businessType">Business Type</label>
              <Field type="text" id="businessType" name="businessType" />
              <ErrorMessage name="businessType" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NitroAskQuestion;
