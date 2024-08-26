import { Form, Formik } from "formik";
import { PaymentMethodFormFields } from "./payment-method-form-fields";
import { paymentMethodSchema, paymentMethodValues } from "../../../shared/form";

export const PaymentMethod = () => {
  const onFormSubmit = () => {};
  return (
    <Formik initialValues={paymentMethodValues} validationSchema={paymentMethodSchema} validateOnMount onSubmit={onFormSubmit}>
      {(formik) => {
        const { isSubmitting, isValid, dirty } = formik;

        return (
          <Form>
            <PaymentMethodFormFields
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
  );
};
