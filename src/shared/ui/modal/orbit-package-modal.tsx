import React from "react";
import axios from "axios";

import useCustomToast from "../../hooks/useCustomToast";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Flex, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { PButton } from "../buttons";

interface OrbitPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrbitPackageModal: React.FC<OrbitPackageModalProps> = ({ isOpen, onClose }) => {
  const showToast = useCustomToast();

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendAmount = async (values: any) => {
    console.log(values, "rrrr");
    const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/messages/send-admin";

    try {
      const response = await axios.post(
        url,
        { message_text: values.message_text.toString() },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      showToast("success", response.data.success);
      console.log("Amount sent:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        showToast("error", error.response.data.message);
        console.error("Error:", error.response.data);
        console.error("Status code:", error.response.status);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <Modal size={"sm"} isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"} pb={0}>
          Subject
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bg={"#1F2027"} borderRadius={"0 0 8px 8px"} pb={6}>
          <Flex w={"fit-content"} flexDir={"column"} justify={"center"} m={"auto"}>
            <Flex align="center" color={"#3AAB41"} fontSize={"14px"} pb={1}>
              Request for orbit package
            </Flex>
            <Formik initialValues={{ message_text: "" }} enableReinitialize={true} onSubmit={sendAmount}>
              {() => {
                return (
                  <Form>
                    <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
                      <InputGroup>
                        <InputLeftElement pointerEvents={"none"} color={"##fff"} fontSize={"1.2em"}>
                          $
                        </InputLeftElement>
                        <Field
                          type="number"
                          name="message_text"
                          placeholder="Type amount"
                          style={{
                            width: "229px",
                            height: "40px",
                            background: "transparent",
                            color: "#fff",
                            fontSize: "16px",
                            lineHeight: 1,
                            border: "1px solid rgb(118, 118, 118)",
                            borderRadius: "8px",
                            padding: "0.75rem 1rem 0.75rem 1.8rem",
                            boxSizing: "border-box",
                            outline: 0,
                          }}
                        />
                      </InputGroup>

                      <PButton type="submit">Apply</PButton>
                    </Flex>
                  </Form>
                );
              }}
            </Formik>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
