import { Form, Formik } from "formik";

import { useNavigate } from "react-router-dom";

import { SignupFields } from "./signup-fields";
import { initialValues } from "../../../shared/form/FormikValues";
import { validationSchema } from "../../../shared/form/yup";
import useCustomToast from "../../../shared/hooks/useCustomToast";
import { signup } from "../../../services";
import { useMutation } from "@tanstack/react-query";
// import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
// import { FormContent } from "../../../shared/form";

// import { validationSchema, signupSchema } from "../../../shared/form/zod";
// import { zodResolver } from "@hookform/resolvers/zod";

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  phone_number: string;
}

export const SignupForm = () => {
  const navigate = useNavigate();

  const showToast = useCustomToast();

  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2NvaW5zZXJ2aWNlIiwiaWF0IjoxNzIzMDUyMDAyLCJuYmYiOjE3MjMwNTIwMDIsImV4cCI6MTcyMzY1NjgwMiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.ri2KrvAqeFZET8v0hem3ISkcDbkPpHV0dpmg74scG0E";

  // const form = useForm<signupSchema>({
  //   resolver: zodResolver(validationSchema),
  //   // defaultValues: ,
  // });

  const mutation = useMutation({
    mutationFn: async (formData: SignUpFormValues) => {
      const response = await signup(formData);
      return response;
    },
    onSuccess: (data) => {
      console.log(data, 555);

      navigate("/Login");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      phone_number: values.phone_number,
    };

    mutation.mutate(newUser);
  };

  // const onSubmit = async (data) => {
  //   console.log(data);

  //   // mutation.mutate(data);
  // };

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

      {/* <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <SignupFields />
        </Form>
      </FormProvider> */}
    </>
  );
};
