import React from "react";
import axios from "axios";

import useCustomToast from "../hooks/useCustomToast";
import { Flex, Textarea } from "@chakra-ui/react";
import { PButton } from "../ui/buttons";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SendResponseForm = (data: any) => {
  const showToast = useCustomToast();
  const [text, setText] = React.useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const sendResponse = async () => {
    const mgsIndex = JSON.parse(window.localStorage.getItem("ACTIVE_MESSAGE_INDEX") ?? "0");
    console.log(data.data[mgsIndex]?.id, " data[mgsIndex]?.id");

    const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
    const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/messages/respond";

    const values = { parent_id: data.data[mgsIndex]?.id, message_text: text };

    try {
      const response = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setText("");
      showToast("success", "Message sent successfully");
      console.log("Read all message:", response.data);
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
    <Flex flexDir={"column"} gap={4}>
      <Textarea w={"100%"} h={"100%"} minH={"100px"} name="message" placeholder="Send response" value={text} onChange={handleChange} />
      <PButton onClick={sendResponse}>Send</PButton>
    </Flex>
  );
};
