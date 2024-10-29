import React from "react";
import { Field, ErrorMessage, useField } from "formik";
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
  const [field] = useField(name);
  const [referralLink, setReferralLink] = React.useState<string>("");
  const params = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    if (params.has("referralLink")) {
      setReferralLink(params.get("referralLink") || "");
    } else {
      setReferralLink("");
    }
  }, []);

  return (
    <Flex w={"100%"} flexDir={"column"} gap={2}>
      {name === "account_status" ? (
        <InputGroup display={"flex"} flexDir={"column"} gap={1}>
          <FormikLabel>{placeholder}</FormikLabel>
          <Field
            name={name}
            type="text"
            placeholder={placeholder}
            value={field.value === 1 ? "Active" : "Deactive"}
            disabled={true}
            style={{
              height: "40px",
              background: "#35363D",
              color: "#fff",
              fontSize: "16px",
              textTransform: "none",
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
      ) : name === "referer_code" ? (
        <InputGroup display={"flex"} flexDir={"column"} gap={1}>
          <FormikLabel>{placeholder}</FormikLabel>
          <Field
            name={name}
            type="text"
            placeholder={placeholder}
            value={referralLink}
            disabled={true}
            style={{
              height: "40px",
              background: "#35363D",
              color: "#fff",
              fontSize: "16px",
              textTransform: "none",
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
      ) : type === "password" ? (
        <Flex flexDir={"column"} gap={1}>
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
        </Flex>
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
              textTransform: "none",
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
