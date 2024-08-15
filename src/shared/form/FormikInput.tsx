import React from "react";
import { Field, ErrorMessage } from "formik";
import { Flex } from "@chakra-ui/react";

// import { FormikIcon } from "./FormikIcon";

interface FormikInputProps {
  type: string;
  placeholder: string;
  name: string;
  icon?: React.ReactNode;
}

export const FormikInput: React.FC<FormikInputProps> = ({ type, placeholder, name }) => {
  return (
    <Flex w={"100%"} flexDir={"column"} gap={2}>
      {/* {icon && <FormikIcon icon={icon} />}  */}
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        style={{
          background: "#35363D",
          color: "#fff",
          fontSize: "16px",
          lineHeight: 1,
          border: 0,
          borderRadius: "8px",
          padding: "0.75rem 1rem",
          width: "100%",
          boxSizing: "border-box",
          outline: 0,
        }}
      />
      <ErrorMessage name={name}>{(msg) => <div style={{ color: "red", fontSize: "0.875rem" }}>{msg}</div>}</ErrorMessage>
    </Flex>
  );
};
