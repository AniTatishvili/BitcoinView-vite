import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
// import { login } from "../../../app/api/authapi";
import { authorizationValues } from "../../../shared/formik/FormikValues";
import { authorizationValidationSchema } from "../../../shared/formik/yup";
import { LoginFields } from "./login-fields";
import useCustomToast from "../../../shared/hooks/useCustomToast";
import axios from "axios";

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();

  const showToast = useCustomToast();

  const signinFormSubmit = async (values: LoginFormValues) => {
    try {
      const res = await axios.post("http://localhost/coinservice/wp-json/jwt-auth/v1/token", {
        username: values.username,
        password: values.password,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/user-dashboard");

      return res.data.token;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        showToast(error.response?.data?.message || error.message);
        // setError("Login failed: " + (error.response?.data?.message || error.message));
      } else {
        console.log("An unexpected error occurred: ");
        showToast((error as Error).message);
        // setError("An unexpected error occurred: " + (error as Error).message);
      }
      return null;
    }
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
