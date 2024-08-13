import axios from "axios";

// import { useSelector } from "react-redux";

import { Form, Formik } from "formik";

import { useNavigate } from "react-router-dom";

import { SignupFields } from "./signup-fields";
import { initialValues } from "../../../shared/formik/FormikValues";
import { validationSchema } from "../../../shared/formik/yup";
import useCustomToast from "../../../shared/hooks/useCustomToast";
import { signup } from "../../../services";
import { useMutation } from "@tanstack/react-query";

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  phone_number: string;
}

export const SignupForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const { data } = useSelector((state: any) => state.signup);
  const navigate = useNavigate();

  const showToast = useCustomToast();

  //FIXME
  const d = "";
  const digits = Object.values(d);
  const tel = `+${digits.join("")}`;

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2NvaW5zZXJ2aWNlIiwiaWF0IjoxNzIzMDUyMDAyLCJuYmYiOjE3MjMwNTIwMDIsImV4cCI6MTcyMzY1NjgwMiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.ri2KrvAqeFZET8v0hem3ISkcDbkPpHV0dpmg74scG0E";

  const mutation = useMutation({
    mutationFn: async (formData: SignUpFormValues) => {
      const response = await signup(formData);
      return response;
    },
    onSuccess: (data) => {
      console.log(data, 555);

      navigate("/Login");
    },
    onError: (error: any) => {
      showToast(error.message || "Login failed!");
    },
  });

  const onFormSubmit = async (values: SignUpFormValues) => {
    console.log(values, 111);
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      phone_number: tel,
    };

    // const form_data = new FormData();
    // Object.entries(newUser).forEach(([key, value]) => {
    //   form_data.append(key, value);
    // });

    mutation.mutate(newUser);
    // try {
    //   await axios.post(`http://localhost/coinservice/wp-json/myplugin/v1/register`, form_data, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   console.log("form_data", form_data);
    //   console.log("User registered successfully.");
    //   showToast("User registered successfully.");

    //   navigate("/Login");
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     showToast(error.response?.data?.message || error.message);
    //     console.error("Registration failed:", error.response?.data?.message || error.message);
    //   } else {
    //     showToast((error as Error).message);
    //     console.error("Unexpected error:", (error as Error).message);
    //   }
    // }
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnMount onSubmit={onFormSubmit}>
        {(formik) => {
          const { isSubmitting, isValid, dirty } = formik;
          console.log(formik);
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
