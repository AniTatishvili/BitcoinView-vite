import axios from "axios";

import { Form, Formik } from "formik";
import { AdminPackagesContentFormFields } from "./admin-packages-content-form-fields";
import { packageValues } from "../../../../shared/form";
import useCustomToast from "../../../../shared/hooks/useCustomToast";
import { useAdminUpdateStore } from "../../../../store/dashboard/admin-data-update-store";
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
  const { save_admin_add_package_id } = useAdminUpdateStore();
  const showToast = useCustomToast();

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

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
  const packageFormSubmit = (values: AdminPackagesContentFormValues, actions: any) => {
    console.log(values, "values");
    if (!editingPackage) {
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
          actions.resetForm();
          actions.setTouched({});
          save_admin_add_package_id(1);
        })
        .catch((error) => {
          showToast("error", error.response.data.message);
          console.error("Error deleting package:", error);
        });
    } else {
      const url = `https://phplaravel-1309375-4888543.cloudwaysapps.com/api/package/${id}`;

      axios
        .put(url, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          showToast("success", response.data.message);
          save_admin_add_package_id(1);
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
        onSubmit={(values, actions) => {
          packageFormSubmit(values, actions);
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
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
