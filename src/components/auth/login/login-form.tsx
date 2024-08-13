import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
// import { login } from "../../../app/api/authapi";
import { authorizationValues } from "../../../shared/formik/FormikValues";
import { authorizationValidationSchema } from "../../../shared/formik/yup";
import { LoginFields } from "./login-fields";
import useCustomToast from "../../../shared/hooks/useCustomToast";
// import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../services";

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();

  const showToast = useCustomToast();

  const mutation = useMutation({
    mutationFn: async (formData: LoginFormValues) => {
      const response = await login(formData);
      console.log(response, 122);
      return response;
    },
    onSuccess: (data) => {
      console.log(data, 555);
      localStorage.setItem("token", data.token);
      navigate("/user-dashboard");
    },
    onError: (error: any) => {
      showToast(error.message || "Login failed!");
    },
  });

  const signinFormSubmit = async (values: LoginFormValues) => {
    mutation.mutate(values);
  };

  // if (isLoading) return <Loader />;

  return (
    <>
      <Formik initialValues={authorizationValues} validationSchema={authorizationValidationSchema} validateOnMount onSubmit={signinFormSubmit}>
        {(formik) => {
          return (
            <Form style={{ width: "100%" }}>
              <LoginFields
                formik={{
                  loading: false,
                  isValid: false,
                  dirty: false,
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
