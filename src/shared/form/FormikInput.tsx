import React from "react";
import { Field, ErrorMessage } from "formik";
import { Box, Button, Flex, InputGroup, InputRightElement } from "@chakra-ui/react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormikLabel } from "./FormikLabel";

// import { FormikIcon } from "./FormikIcon";

interface FormikInputProps {
  type: string;
  placeholder: string;
  name: string;
  disabled?: boolean;
}

export const FormikInput: React.FC<FormikInputProps> = ({ type, placeholder, name, disabled }) => {
  const [show, setShow] = React.useState(false);

  return (
    <Flex w={"100%"} flexDir={"column"} gap={2}>
      {type === "password" ? (
        <InputGroup display={"flex"} flexDir={"column"} gap={1}>
          <FormikLabel>{placeholder}</FormikLabel>
          <InputGroup>
            <Field
              name={name}
              type={show ? "text" : "password"}
              placeholder={placeholder}
              style={{
                height: "40px",
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
            <InputRightElement width="4.5rem">
              <Button
                variant={"ghost"}
                h="1.75rem"
                size="sm"
                onClick={() => setShow(!show)}
                color={"#fff"}
                _hover={{ backgound: "none", color: "#f7931a", opacity: "0.8" }}
                _focus={{ boxShadow: "none", background: "none" }}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </InputGroup>
      ) : (
        <InputGroup display={"flex"} flexDir={"column"} gap={1}>
          <FormikLabel>{placeholder}</FormikLabel>
          <Field
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            style={{
              height: "40px",
              background: "#35363D",
              color: "#fff",
              fontSize: "16px",
              textTransform: "capitalize",
              lineHeight: 1,
              border: 0,
              borderRadius: "8px",
              padding: "0.75rem 1rem",
              width: "100%",
              boxSizing: "border-box",
              outline: 0,
            }}
          />
        </InputGroup>
      )}
      <ErrorMessage name={name}>{(msg) => <Box style={{ color: "red", fontSize: "0.875rem" }}>{msg}</Box>}</ErrorMessage>
    </Flex>
  );
};
