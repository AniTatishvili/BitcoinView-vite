import React from "react";
import axios from "axios";

import { updateUserProfile, updateUserProfileSchema } from "../../../../shared/form";
import { useUserSignupStore } from "../../../../store/dashboard/user-auth";
import { Form, Formik } from "formik";
import { ProfileFormFields } from "./profile-form-fields";
import { ProfileAvatarPicture } from "../profile-avatar-edit/profile-avatar-picture";

export const ProfileForm = () => {
  const token = JSON.parse(localStorage.getItem("USER_AUTH") || "{}");
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user-information";

  const userData = useUserSignupStore();

  const [initialValues, setInitialValues] = React.useState({});

  React.useEffect(() => {
    if (userData) {
      const updateUserProfile: { [key: string]: any } = {};
      Object.entries(userData).forEach(([key, value]) => {
        updateUserProfile[key] = value;
      });
      setInitialValues(updateUserProfile);
    }
  }, [userData]);

  // const { updateUserFields } = useUserSignupStore();

  // React.useEffect(() => {
  //   const userData = useUserSignupStore.getState(); // Get current user data
  //   setInitialValues(userData);
  // }, []);
  const onFormSubmit = async (values: any) => {
    console.log("vla", values);
    try {
      const response = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  console.log(initialValues);
  return (
    <>
      <ProfileAvatarPicture />
      <Formik initialValues={initialValues} validateOnMount enableReinitialize onSubmit={onFormSubmit}>
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
