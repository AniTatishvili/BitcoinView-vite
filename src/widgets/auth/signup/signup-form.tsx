import axios from "axios";

import { Form, Formik } from "formik";

import { useNavigate } from "react-router-dom";
import { SignupFields } from "./signup-fields";
import { initialValues } from "../../../shared/formik/FormikValues";
import { validationSchema } from "../../../shared/formik/yup";

export const SignupForm = () => {
  const navigate = useNavigate();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2NvaW5zZXJ2aWNlIiwiaWF0IjoxNzIyODkzMTI3LCJuYmYiOjE3MjI4OTMxMjcsImV4cCI6MTcyMzQ5NzkyNywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.B9_3WSejRrZipQSMLT2gTTSrfC6sgPWj__Qn9TKL1f0";

  const onFormSubmit = async (values: any) => {
    console.log(values);
    const newUser = {
      username: values.username,
      email: values.email,
      phone: values.phone,
      password: values.password,
    };

    try {
      await axios.post(`http://localhost/coinservice/wp-json/wp/v2/users`, newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User registered successfully.");
      navigate("/Login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Registration failed:", error.response?.data?.message || error.message);
      } else {
        console.error("Unexpected error:", (error as Error).message);
      }
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnMount onSubmit={onFormSubmit}>
      {(formik) => {
        const { isSubmitting, isValid, dirty } = formik;

        return (
          <Form style={{ width: "100%" }}>
            <SignupFields
              formik={{
                loading: isSubmitting,
                isValid: isValid,
                dirty: dirty,
                isSubmitting: isSubmitting,
              }}
              {...formik}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
