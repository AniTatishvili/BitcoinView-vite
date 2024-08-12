import React from "react";
import { Field, ErrorMessage } from "formik";
// import { FormikIcon } from "./FormikIcon";

interface FormikInputProps {
  type: string;
  placeholder: string;
  name: string;
  icon?: React.ReactNode;
}

export const FormikInput: React.FC<FormikInputProps> = ({ type, placeholder, name, icon }) => {
  return (
    <div style={{ position: "relative" }}>
      {/* {icon && <FormikIcon icon={icon} />}  */}
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        style={{
          background: "#35363D",
          color: "#fff",
          borderRadius: "8px",
          padding: icon ? "0.5rem 2rem 0.5rem 2.5rem" : "0.5rem 1rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      <ErrorMessage name={name}>{(msg) => <div style={{ color: "red", fontSize: "0.875rem" }}>{msg}</div>}</ErrorMessage>
    </div>
  );
};
