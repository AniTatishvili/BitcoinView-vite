import React from "react";

import axios from "axios";

import { useSelector } from "react-redux";

import { Form, Formik } from "formik";

import { useNavigate } from "react-router-dom";

import { SignupFields } from "./signup-fields";
import { initialValues } from "../../../shared/formik/FormikValues";
import { validationSchema } from "../../../shared/formik/yup";
import { CustomToast } from "../../../shared/hooks/customToast";

export const SignupForm = () => {
  const { data } = useSelector((state: any) => state.signup);
  const navigate = useNavigate();

  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const digits = Object.values(data);
  const tel = `+${digits.join("")}`;

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2NvaW5zZXJ2aWNlIiwiaWF0IjoxNzIyODkzMTI3LCJuYmYiOjE3MjI4OTMxMjcsImV4cCI6MTcyMzQ5NzkyNywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.B9_3WSejRrZipQSMLT2gTTSrfC6sgPWj__Qn9TKL1f0";

  const onFormSubmit = async (values: any) => {
    console.log(values);
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      phone_number: tel,
      ...values,
    };

    const form_data = new FormData();
    for (const i in newUser) {
      form_data.append(i, newUser[i]);
    }

    try {
      await axios.post(`http://localhost/coinservice/wp-json/wp/v2/users`, form_data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("form_data", form_data);
      console.log("User registered successfully.");
      setToastMessage("User registered successfully.");
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
    <>
      {toastMessage && <CustomToast message={toastMessage} />}
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
    </>
  );
};
