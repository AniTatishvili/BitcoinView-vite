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
        className="bg-[#35363D] text-[#fff] rounded-[8px] focus-visible:outline-0"
        style={{
          padding: icon ? "0.5rem 2rem 0.5rem 2.5rem" : "0.5rem 1rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      <ErrorMessage name={name}>{(msg) => <div style={{ color: "red", fontSize: "0.875rem" }}>{msg}</div>}</ErrorMessage>
    </div>
  );
};
