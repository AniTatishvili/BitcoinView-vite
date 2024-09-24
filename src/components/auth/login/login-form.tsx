import { useMutation } from "@tanstack/react-query";
import { login } from "../../../services";

import { Form, Formik } from "formik";

import { authorizationValues } from "../../../shared/form/FormikValues";
import { authorizationValidationSchema } from "../../../shared/form/yup";
import { LoginFields } from "./login-fields";
import useCustomToast from "../../../shared/hooks/useCustomToast";
import { useNavigate } from "react-router-dom";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";

interface LoginFormValues {
  login: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const { updateUserFields } = useUserSignupStore();

  const showToast = useCustomToast();

  const mutation = useMutation({
    mutationFn: async (formData: LoginFormValues) => {
      const response = await login(formData);
      // console.log(response, 122);
      return response;
    },

    onSuccess: (data) => {
      console.log("data", data);

      const msg = "Login Successful!";
      showToast("success", msg);

      window.localStorage.setItem("USER_AUTH", JSON.stringify(data.token));
      window.localStorage.setItem("LOGGED_IN", JSON.stringify(true));
      window.localStorage.setItem("UID", JSON.stringify(data.user.user_id));

      updateUserFields({
        username: data.user.username,
        role_name: data.user.role_name,
      });

      redirectUserByRole(data.user.role_name);
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

  const redirectUserByRole = (role: string) => {
    if (role === "admin") {
      navigate("/admin-dashboard/admin-dashboard-overview");
    } else if (role === "advisor") {
      navigate("/adviser-dashboard/adviser-dashboard-overview");
    } else if (role === "subscriber") {
      navigate("/user-dashboard/overview");
    } else {
      navigate("/login");
    }
  };

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
