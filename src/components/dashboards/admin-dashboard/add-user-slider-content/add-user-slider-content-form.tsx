// import axios from "axios";

import { Form, Formik } from "formik";
import { addUserSliderValues } from "../../../../shared/form";
// import useCustomToast from "../../../../shared/hooks/useCustomToast";
import { AddUserSliderContentFormFields } from "./add-user-slider-content-form-fields";

interface AddUserSliderContentFormValues {
  title: string;
  description: string;
  external_link: string;
  video_url: string;
  image_url: string;
}

export const AddUserSliderContentForm = () => {
  //   const showToast = useCustomToast();

  const addSliderFormSubmit = (values: AddUserSliderContentFormValues) => {
    console.log(values, "values");
  };

  return (
    <>
      <Formik
        initialValues={addUserSliderValues}
        validateOnMount
        enableReinitialize
        onSubmit={(values) => {
          addSliderFormSubmit(values);
        }}>
        {(formik) => {
          return (
            <Form style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <AddUserSliderContentFormFields
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
