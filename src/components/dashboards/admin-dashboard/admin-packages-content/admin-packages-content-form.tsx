import axios from "axios";

import { Form, Formik } from "formik";
import { AdminPackagesContentFormFields } from "./admin-packages-content-form-fields";
import { packageValues } from "../../../../shared/form";
import useCustomToast from "../../../../shared/hooks/useCustomToast";
// packageSchema,
interface AdminPackagesContentFormValues {
  package_name: string;
  amount: string;
  monthly_profit: string;
  duration_time: string;
  sort_order_id: number;
  condition_1: string;
  condition_2: string;
  condition_3: string;
  descriptions: string;
  cancellation_fee: number;
  package_status: number;
}

interface AdminPackagesContentFormProps {
  editingPackage?: AdminPackagesContentFormValues | null;
  onClose?: () => void;
  id?: number;
}

export const AdminPackagesContentForm: React.FC<AdminPackagesContentFormProps> = ({ editingPackage, id }) => {
  const showToast = useCustomToast();

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  console.log(editingPackage, "editingPackage");
  const initialValues = editingPackage
    ? {
        package_name: editingPackage.package_name || "",
        amount: editingPackage.amount || "",
        monthly_profit: editingPackage.monthly_profit || "",
        duration_time: editingPackage.duration_time || "",
        sort_order_id: editingPackage.sort_order_id || 0,
        condition_1: editingPackage.condition_1 || "",
        condition_2: editingPackage.condition_2 || "",
        condition_3: editingPackage.condition_3 || "",
        descriptions: editingPackage.descriptions || "",
        cancellation_fee: editingPackage.cancellation_fee || 0,
        package_status: editingPackage.package_status ? 1 : 0,
      }
    : packageValues;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const packageFormSubmit = (values: AdminPackagesContentFormValues) => {
    console.log(values, "values");
    if (!editingPackage) {
      console.log(82);
      const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/package";

      axios
        .post(url, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response, "response");
          showToast("success", "Package added successfully");
        })
        .catch((error) => {
          showToast("error", error.response.data.message);
          console.error("Error deleting package:", error);
        });
    } else {
      console.log(12);
      const url = `https://phplaravel-1309375-4888543.cloudwaysapps.com/api/package/${id}`;

      axios
        .put(url, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // setData((prevData) => [...prevData, response.data.package]);
          showToast("success", response.data.message);
          // onClose();
        })
        .catch((error) => {
          showToast("error", error.response.data.message);
          console.error("Error creating package:", error);
        });
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={null}
        validateOnMount
        enableReinitialize
        onSubmit={(values) => {
          console.log("Formik onSubmit called with values:", values);
          packageFormSubmit(values);
        }}>
        {(formik) => {
          // console.log(formik);
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
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
