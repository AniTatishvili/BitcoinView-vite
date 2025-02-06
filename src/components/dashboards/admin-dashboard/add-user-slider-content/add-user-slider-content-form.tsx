import React from "react";
import axios from "axios";

import { Form, Formik } from "formik";
import { addUserSliderValues } from "../../../../shared/form";
import useCustomToast from "../../../../shared/hooks/useCustomToast";
import { AddUserSliderContentFormFields } from "./add-user-slider-content-form-fields";
import { PButton } from "../../../../shared/ui/buttons";
import { Input } from "@chakra-ui/react";
import { useAdminUpdateStore } from "../../../../store/dashboard/admin-data-update-store";

interface AddUserSliderContentFormValues {
  title: string;
  description: string;
  external_link: string;
  video_url: string;
}

interface AddUserSliderContentFormProps {
  editingPackage?: AddUserSliderContentFormValues | null;
  onClose?: () => void;
  id?: number;
}

export const AddUserSliderContentForm: React.FC<AddUserSliderContentFormProps> = ({ editingPackage, id }) => {
  const { save_admin_add_event_id } = useAdminUpdateStore();
  const showToast = useCustomToast();

  const initialValues = editingPackage
    ? {
        title: editingPackage.title || "",
        description: editingPackage.description || "",
        external_link: editingPackage.external_link || "",
        video_url: editingPackage.video_url || "",
        // image_url: editingPackage.image_url || "",
      }
    : addUserSliderValues;

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addSliderFormSubmit = (values: AddUserSliderContentFormValues, actions: any) => {
    console.log(values, "values");

    const formData = new FormData();

    for (const key in values) {
      formData.append(key, values[key as keyof AddUserSliderContentFormValues]);
    }

    const url = editingPackage
      ? `https://phplaravel-1309375-4888543.cloudwaysapps.com/api/event/${id}`
      : "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/add-event";

    if (!editingPackage) {
      axios
        .post(url, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response, "response");
          showToast("success", "Event added successfully");
          actions.resetForm();
          actions.setTouched({});
          save_admin_add_event_id(1);
        })
        .catch((error) => {
          showToast("error", error.response.data.message);
          console.error("Error deleting event:", error);
        });
    } else {
      axios
        .put(url, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          showToast("success", response.data.message);
          save_admin_add_event_id(1);
          // onClose();
        })
        .catch((error) => {
          showToast("error", error.response.data.message);
          console.error("Error creating event:", error);
        });
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnMount
        enableReinitialize
        onSubmit={(values, actions) => {
          addSliderFormSubmit(values, actions);
        }}>
        {({ setFieldValue, values }) => (
          <Form style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }}>
            <AddUserSliderContentFormFields
              formik={{
                loading: false,
                isValid: false,
                dirty: false,
              }}
              {...{ values, setFieldValue }}
            />
            <Input
              h={"40px"}
              bg={"rgb(53, 54, 61)"}
              borderRadius={"8px"}
              border={"0"}
              p={"0.3rem 1rem"}
              name="image_url"
              type="file"
              placeholder="Upload Event Image"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                  setFieldValue("image", file);
                }
              }}
            />
            <PButton type="submit" w={"fit-content"}>
              Claims
            </PButton>
          </Form>
        )}
      </Formik>
    </>
  );
};
