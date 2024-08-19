import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
// import { login } from "../../../app/api/authapi";
import { authorizationValues } from "../../../shared/form/FormikValues";
import { authorizationValidationSchema } from "../../../shared/form/yup";
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

      const msg = "Login Successful!";
      showToast("success", msg);

      const { user_id } = data;
      window.localStorage.setItem("UID", JSON.stringify(user_id));
      window.localStorage.setItem("LOGGED_IN", JSON.stringify(true));

      navigate("/user-dashboard/overview");
      // window.location.href = "https://bitcoinview.org";
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const uid = window.localStorage.getItem("UID");
      if (uid && JSON.parse(uid)) {
        window.localStorage.removeItem("UID");
      }

      const msg = "You have entered an invalid username or password.";
      showToast("error", msg || "Login failed!");

      console.log(error);
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
            <Form style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
