import React from "react";
import axios from "axios";

import { Form, Formik } from "formik";
import { ProfileFormFields } from "./profile-form-fields";
import { updateUserProfile, updateUserProfileSchema } from "../../../../shared/form";

interface UpdateUserProfile {
  first_name: string;
  last_name: string;
  surname: string;
  email: string;
  mobile: string;
  avatar: string;
  employee: string;
  country: string;
  currency: string;
  resources: string;
  retention_status: string;
  customer_status: string;
  password: string;
  deposit_notifications: string;
  chat_notifications: string;
  other_notifications: string;
  show_ftd: string;
  tp_account_groups: string;
  time_zone: string;
}

export const ProfileForm = () => {
  const token = JSON.parse(localStorage.getItem("USER_AUTH") || "{}");
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user-information";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        for (const key in response.data) {
          if (key in updateUserProfile) {
            updateUserProfile[key as keyof UpdateUserProfile] = response.data[key];
            console.log(updateUserProfile[key as keyof UpdateUserProfile], response.data[key]);
          }
        }
        console.log(response.data, response.data.id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onFormSubmit = () => {};

  return (
    <>
      <Formik initialValues={updateUserProfile} validationSchema={updateUserProfileSchema} validateOnMount onSubmit={onFormSubmit}>
        {(formik) => {
          const { isSubmitting, isValid, dirty } = formik;
          console.log(formik.values);
          return (
            <Form>
              <ProfileFormFields
                formik={{
                  loading: isSubmitting,
                  isValid: isValid,
                  dirty: dirty,
                  isSubmitting: isSubmitting,
                  // values: values,
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
