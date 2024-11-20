import axios from "axios";

import { Form, Formik } from "formik";
import { AdminPackagesContentFormFields } from "./admin-packages-content-form-fields";
import { packageSchema, packageValues } from "../../../../shared/form";
import useCustomToast from "../../../../shared/hooks/useCustomToast";

export const AdminPackagesContentForm = () => {
  const showToast = useCustomToast();

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/package";

  const packageFormSubmit = () => {
    console.log(11);

    axios
      .post(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response, "response");
        showToast("success", "Package deleted successfully");
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error deleting package:", error);
      });
  };

  return (
    <>
      <Formik initialValues={packageValues} validationSchema={packageSchema} validateOnMount onSubmit={packageFormSubmit}>
        {(formik) => {
          return (
            <Form style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <AdminPackagesContentFormFields
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
