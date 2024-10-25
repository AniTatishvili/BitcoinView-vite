import React from "react";
import axios from "axios";

import { Flex, Text, Textarea, TabPanel, TabPanels } from "@chakra-ui/react";
import { PButton } from "../../../shared/ui/buttons";
import useCustomToast from "../../../shared/hooks/useCustomToast";

// interface MessagesProps {
//   id: number;
//   message_text: string;
// }

export const DashboardMessagesTabPanels = () => {
  const showToast = useCustomToast();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = React.useState<any>(null);

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
        setData(response.data);
        // console.log("Tab panel:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const sendResponse = async () => {
    const mgsIndex = JSON.parse(window.localStorage.getItem("ACTIVE_MESSAGE_INDEX") ?? "0");

    const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/messages/respond";

    const values = { parent_id: data[mgsIndex]?.id, message_text: text };

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
    <TabPanels w={{ base: "100%", lg: "60%" }} h={"100%"} bg={"#35363d"} borderRadius={"8px"} p={4} display={{ base: "none", lg: "block" }} overflow={"auto"}>
      {Array.isArray(data) &&
        data?.map((item, i) => {
          return (
            <TabPanel key={i} color={"#fff"} fontSize={"14px"} p={0}>
              {/* {sender_id?show then} */}
              <Flex flexDir={"column"} gap={4}>
                <Text>{item.message_text}</Text>
                {item.sender_id && (
                  <Flex flexDir={"column"} gap={4}>
                    <Textarea w={"100%"} h={"100%"} minH={"100px"} name="message" placeholder="Send response" value={text} onChange={handleChange} />
                    <PButton onClick={sendResponse}>Send</PButton>
                  </Flex>
                )}
              </Flex>
            </TabPanel>
          );
        })}
    </TabPanels>
  );
};
