/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import axios from "axios";

// import { updateUserProfile, updateUserProfileSchema } from "../../../../shared/form";
import { useUserSignupStore } from "../../../../store/dashboard/user-auth";
import { Form, Formik } from "formik";
import { ProfileFormFields } from "./profile-form-fields";
import { ProfileAvatarPicture } from "../profile-avatar-edit/profile-avatar-picture";

export const ProfileForm = () => {
  const token = JSON.parse(localStorage.getItem("USER_AUTH") || "{}");
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user-information";

  const { updateUserFields } = useUserSignupStore();
  const userData = useUserSignupStore();

  const [initialValues, setInitialValues] = React.useState({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFormSubmit = async (values: any) => {
    const filteredValues = Object.fromEntries(Object.entries(values).filter(([_, value]) => value !== ""));

    console.log("Filtered values:", filteredValues);

    try {
      const response = await axios.post(url, filteredValues, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      updateUserFields(filteredValues);
      console.log("Profile updated successfully:", response.data, filteredValues);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error updating profile:", error.response.data);
        console.error("Status code:", error.response.status);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  React.useEffect(() => {
    if (userData) {
      console.log(userData, "data");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updateUserProfile: { [key: string]: any } = {};
      Object.entries(userData).forEach(([key, value]) => {
        updateUserProfile[key] = value;
      });
      setInitialValues(updateUserProfile);
    }
  }, [userData]);

  return (
    <>
      <ProfileAvatarPicture />
      <Formik initialValues={initialValues} validateOnMount enableReinitialize onSubmit={onFormSubmit}>
        {(formik) => {
          const { isSubmitting, isValid, dirty } = formik;
          // console.log(formik.values);
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
