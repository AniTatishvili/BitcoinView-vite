import { Form, Formik } from "formik";
import { ProfileFormFields } from "./profile-form-fields";
import { updateUserProfile, updateUserProfileSchema } from "../../../../shared/form";

export const ProfileForm = () => {
  const onFormSubmit = () => {};

  return (
    <>
      <Formik initialValues={updateUserProfile} validationSchema={updateUserProfileSchema} validateOnMount onSubmit={onFormSubmit}>
        {(formik) => {
          const { isSubmitting, isValid, dirty } = formik;

          return (
            <Form>
              <ProfileFormFields
                formik={{
                  loading: isSubmitting,
                  isValid: isValid,
                  dirty: dirty,
                  isSubmitting: isSubmitting,
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
