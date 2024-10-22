import React from "react";
import axios from "axios";

import { Flex, Text, Textarea, TabPanel, TabPanels } from "@chakra-ui/react";
import { PButton } from "../../../shared/ui/buttons";
import useCustomToast from "../../../shared/hooks/useCustomToast";
import { useRef } from "react";
import { Formik, Form } from "formik";
import { initialValues } from "../../../shared/form";

interface MessagesProps {
  id: number;
  message_text: string;
}

export const DashboardMessagesTabPanels = () => {
  const showToast = useCustomToast();
  const [data, setData] = React.useState<MessagesProps | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = React.useState<string>("");

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  React.useEffect(() => {
    const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/messages";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data || null);
        console.log("Tab panel:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  // sender_id
  const sendResponse = async (values: any) => {
    console.log("textareaRef", values);

    // const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/messages/respond";

    // try {
    //   const response = await axios.post(
    //     url,
    //     { parent_id: data.id, message_text: values.message },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );sender_id
    //showToast("success", "Message sent successfully")
    //   console.log("Read all message:", response.data);
    // } catch (error) {
    //   if (axios.isAxiosError(error) && error.response) {
    //     showToast("error", error.response.data.message);
    //     console.error("Error:", error.response.data);
    //     console.error("Status code:", error.response.status);
    //   } else {
    //     console.error("Unexpected error:", error);
    //   }
    // }
  };

  return (
    <TabPanels w={{ base: "100%", lg: "60%" }} h={"100%"} bg={"#35363d"} borderRadius={"8px"} p={4} display={{ base: "none", lg: "block" }} overflow={"auto"}>
      {Array.isArray(data) &&
        data?.map((item, i) => {
          return (
            <TabPanel key={i} color={"#fff"} fontSize={"14px"} p={0}>
              <Formik onSubmit={sendResponse} initialValues={{ message: "" }}>
                {(formik) => {
                  console.log(formik.values);
                  return (
                    <Form>
                      <Flex flexDir={"column"} gap={4}>
                        <Text>{item.message_text}</Text>
                        <Textarea w={"100%"} h={"100%"} minH={"100px"} name="message" placeholder="Send response" />
                        <PButton type="submit">Send</PButton>
                      </Flex>
                    </Form>
                  );
                }}
              </Formik>
            </TabPanel>
          );
        })}
    </TabPanels>
  );
};
