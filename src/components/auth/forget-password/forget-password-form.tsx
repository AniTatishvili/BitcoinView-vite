import { Form, Formik } from "formik";
import { forgotPasswordValidate, forgotPasswordValues, FormInput } from "../../../shared/form";
import { PButton } from "../../../shared/ui/buttons";

interface ForgetPasswordFormValues {
  email: string;
}

export const ForgetPasswordForm = () => {
  const signinFormSubmit = (values: ForgetPasswordFormValues) => {
    console.log(values, 878787);
  };

  return (
    <>
      <Formik initialValues={forgotPasswordValues} validationSchema={forgotPasswordValidate} validateOnMount onSubmit={signinFormSubmit}>
        {() => {
          return (
            <Form style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <FormInput inputName={""} />
              <PButton>Submit</PButton>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
