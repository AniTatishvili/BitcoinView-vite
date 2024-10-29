import { Form, Formik } from "formik";

import { useNavigate } from "react-router-dom";

import { SignupFields } from "./signup-fields";
import { initialValues } from "../../../shared/form/FormikValues";
import { validationSchema } from "../../../shared/form/yup";
import useCustomToast from "../../../shared/hooks/useCustomToast";
import { signup } from "../../../services";
import { useMutation } from "@tanstack/react-query";
// import { useUserSignupStore } from "../../../store/dashboard/user-auth";
// import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
// import { FormContent } from "../../../shared/form";

// import { validationSchema, signupSchema } from "../../../shared/form/zod";
// import { zodResolver } from "@hookform/resolvers/zod";

interface SignUpFormValues {
  username: string;
  password: string;
  password_confirmation: string;
  email: string;
  mobile: string;
  referer_code: string;
}

export const SignupForm = () => {
  const navigate = useNavigate();

  const showToast = useCustomToast();

  // const { updateUserFields } = useUserSignupStore();

  // const form = useForm<signupSchema>({
  //   resolver: zodResolver(validationSchema),
  //   // defaultValues: ,
  // });

  const mutation = useMutation({
    mutationFn: async (formData: SignUpFormValues) => {
      const response = await signup(formData);
      // const mondayResponse = await signupMonday(formData);

      return { response };
    },
    onSuccess: async (data) => {
      const { response } = data;
      console.log("Signup response:", response);
      // console.log("Monday API response:", mondayResponse);

      const msg = "Signup Successful!";
      showToast("success", msg);

      navigate("/login");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      showToast("error", error.response.data.message || "Sign up failed!");
      console.log(error.response.data);
    },
  });

  const onFormSubmit = async (values: SignUpFormValues) => {
    const params = new URLSearchParams(window.location.search);
    const referralCode = params.get("referralLink") || "";

    const newUser = {
      ...values,
      referer_code: referralCode,
    };

    mutation.mutate(newUser);

    // updateUserFields(newUser);
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnMount onSubmit={onFormSubmit}>
        {(formik) => {
          const { isSubmitting, isValid, dirty } = formik;

          return (
            <Form style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
