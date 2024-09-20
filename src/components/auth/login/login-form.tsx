import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";

import { authorizationValues } from "../../../shared/form/FormikValues";
import { authorizationValidationSchema } from "../../../shared/form/yup";
import { LoginFields } from "./login-fields";
import useCustomToast from "../../../shared/hooks/useCustomToast";

import { useMutation } from "@tanstack/react-query";
import { login } from "../../../services";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";

interface LoginFormValues {
  login: string;
  password: string;
}

type UserRole = "admin" | "adviser" | "subscriber" | string;

export const LoginForm = () => {
  const { username, role }: { username: string; role: UserRole[] } = useUserSignupStore((state) => ({
    username: state.username,
    role: state.role,
  }));

  const navigate = useNavigate();

  const showToast = useCustomToast();

  const auth = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  //const uid = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("UID") || "null") : null;
  const logged_in = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("LOGGED_IN") || "null") : null;

  const isUserLoggedIn = !!logged_in && auth;

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

      // const { user_id } = data;
      window.localStorage.setItem("USER_AUTH", JSON.stringify(data.token));
      window.localStorage.setItem("LOGGED_IN", JSON.stringify(true));
      console.log("role", role);
      if (isUserLoggedIn && username) {
        console.log(12334444);
        if (role.includes("admin")) {
          navigate("/admin-dashboard/admin-dashboard-overview");
        } else if (role.includes("advisor")) {
          navigate("/adviser-dashboard/adviser-dashboard-overview");
        } else if (role.includes("subscriber")) {
          console.log(111116666);
          navigate("/user-dashboard/overview");
        } else {
          console.log(111);
          navigate("/login");
        }
      }

      // navigate("/user-dashboard/overview");
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
