import { Form, Formik } from "formik";
// import { login } from "../../../app/api/authapi";
import { authorizationValues } from "../../../shared/formik/FormikValues";
import { authorizationValidationSchema } from "../../../shared/formik/yup";

import { LoginFields } from "./login-fields";
import axios from "axios";
// interface LoginFormValues {
//   username: string;
//   password: string;
// }

export const LoginForm = () => {
  const signinFormSubmit = async (values: any) => {
    // try {
    //   console.log(values);
    //   const credentials = { username: values.username, password: values.password };
    //   const result = await login(credentials);
    //   console.log("Login successful:", result);
    // } catch (err) {
    //   // setError(err.message);
    //   console.log("err:", err);
    // }

    try {
      const res = await axios.post("http://localhost/coinservice/wp-json/jwt-auth/v1/token", {
        username: values.username,
        password: values.password,
      });
      return res.data.token;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        // setError("Login failed: " + (error.response?.data?.message || error.message));
      } else {
        console.log("An unexpected error occurred: ");
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
