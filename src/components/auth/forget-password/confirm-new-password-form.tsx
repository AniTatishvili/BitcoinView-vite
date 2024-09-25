import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { confirmNewPasswordSchema } from "../../../shared/form";

import { confirmNewPasswordValues } from "../../../shared/form/FormikValues";
import { ConfirmNewPasswordFormFields } from "./confirm-new-password-form-fields";
import useCustomToast from "../../../shared/hooks/useCustomToast";

interface ConfirmNewPasswordProps {
  password: string;
  password_confirmation: string;
}

export const ConfirmNewPassword = () => {
  const navigate = useNavigate();
  const showToast = useCustomToast();
  const [searchParams] = useSearchParams();

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/password/reset";

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const sendNewPasswordConfirmation = async (values: ConfirmNewPasswordProps) => {
    const sendNewPasswordConfirmationFormData = {
      token,
      email,
      ...values,
    };

    console.log(sendNewPasswordConfirmationFormData, "sendNewPasswordConfirmationFormData");

    // const form_data = new FormData();
    // for (const i in sendNewPasswordConfirmationFormData) {
    //   form_data.append(i, sendNewPasswordConfirmationFormData[i]);
    // }

    try {
      const response = await axios.post(url, sendNewPasswordConfirmationFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const msg = "Password is updated Successfully!";
      showToast("success", msg);

      navigate("/login");

      console.log("Updated successfully:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        showToast("error", error.response.data.message);
        console.error("Error updating profile:", error.response.data);
        console.error("Status code:", error.response.status);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };
  return (
    <>
      <Flex flexDir="column" align="center">
        <Formik initialValues={confirmNewPasswordValues} validationSchema={confirmNewPasswordSchema} validateOnMount onSubmit={sendNewPasswordConfirmation}>
          {(formik) => {
            return (
              <Form style={{ width: "100%" }}>
                <ConfirmNewPasswordFormFields
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
      </Flex>
    </>
  );
};
