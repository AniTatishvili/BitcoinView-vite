import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Form, Formik } from "formik";
import { forgotPasswordValidate, forgotPasswordValues } from "../../../shared/form";

import { ForgetPasswordWithEmailFormFields } from "./forget-password-with-email-form-fields";
import useCustomToast from "../../../shared/hooks/useCustomToast";

interface ForgetPasswordFormValues {
  email: string;
}

export const ForgetPasswordWithEmailForm = () => {
  const navigate = useNavigate();
  const showToast = useCustomToast();

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/password/email";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const forgetPasswordFormSubmit = async (values: ForgetPasswordFormValues, actions: any) => {
    try {
      const response = await axios.post(url, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      actions.resetForm();

      const msg = "Email is sent Successfully! Check your inbox!";
      showToast("success", msg);

      navigate("/login");

      console.log("Updated successfully:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        showToast("success", error.response.data.message);

        console.error("Error updating profile:", error.response.data);
        console.error("Status code:", error.response.status);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <>
      <Formik initialValues={forgotPasswordValues} validationSchema={forgotPasswordValidate} validateOnMount onSubmit={forgetPasswordFormSubmit}>
        {(formik) => {
          return (
            <Form style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <ForgetPasswordWithEmailFormFields
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
