import React from "react";
import axios from "axios";

import { Flex, Text, Textarea, TabPanel, TabPanels } from "@chakra-ui/react";
import { PButton } from "../../../shared/ui/buttons";

interface MessagesProps {
  id: number;
  message_text: string;
}

export const DashboardMessagesTabPanels = () => {
  const [data, setData] = React.useState<MessagesProps | null>(null);
  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/messages";

  React.useEffect(() => {
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

  return (
    <TabPanels w={{ base: "100%", lg: "60%" }} h={"100%"} bg={"#35363d"} borderRadius={"8px"} p={4} display={{ base: "none", lg: "block" }} overflow={"auto"}>
      {Array.isArray(data) &&
        data?.map((item, i) => {
          return (
            <TabPanel key={i} color={"#fff"} fontSize={"14px"} p={0}>
              <Flex flexDir={"column"} gap={4}>
                <Text>{item.message_text}</Text>
                <Textarea w={"100%"} h={"100%"} minH={"100px"} placeholder="Send response" />
                <PButton>Send</PButton>
              </Flex>
            </TabPanel>
          );
        })}
    </TabPanels>
  );
};
