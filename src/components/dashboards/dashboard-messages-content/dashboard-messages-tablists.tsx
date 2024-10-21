import React from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";
import { Box, Flex, Text, Tab, TabList, Hide, Show, Textarea, Button } from "@chakra-ui/react";
import useCustomToast from "../../../shared/hooks/useCustomToast";
import { FaCalendar } from "react-icons/fa";
import { PButton } from "../../../shared/ui/buttons/PButton";

interface MessagesProps {
  id: number;
  message_text: string;
  created_at: string;
  status: string;
}

export const DashboardMessagesTabLists = () => {
  const showToast = useCustomToast();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialTab = params.get("tab");

  const [messageIndex, setMessageIndex] = React.useState<number[]>([]);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [showTabPanel, setShowTabPanel] = React.useState<boolean>(false);

  const [data, setData] = React.useState<MessagesProps[] | null>(null);
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
        if (Array.isArray(response.data)) {
          const readIndexes = response.data.map((message, index) => (message.status === "read" ? index : null)).filter((index) => index !== null);
          setMessageIndex(readIndexes);
        }
        // console.log("User messages data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  React.useEffect(() => {
    if (initialTab) {
      const tabIndex = Number(initialTab);
      if (Array.isArray(data) && tabIndex >= 0 && tabIndex < data.length) {
        const fetchMessage = async () => {
          await readMessage(tabIndex);
        };
        fetchMessage();
      }
    }
  }, [initialTab, data]);

  const readMessage = async (indx: number) => {
    if (data && data[indx].status === "read") {
      return;
    }

    setShowTabPanel(true);

    const newReadMessageIndexes = [...messageIndex, indx];
    setMessageIndex(newReadMessageIndexes);

    const newSelectedTab = indx + 1;
    setSelectedTab(newSelectedTab);
    window.localStorage.setItem("ACTIVE_MESSAGE_INDEX", newSelectedTab.toString());
    let readUrl = "";
    if (data) {
      readUrl = `https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/messages/${data[indx].id}/read`;
    }
    try {
      const response = await axios.post(
        readUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Read message:", response.data);
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
    <>
      <Hide below="lg">
        <TabList w={"100%"} display={"flex"} flexDir={"column"} alignItems={"center"} gap={4} mb={"10px"} color={"#fff"} borderBottom={0}>
          {Array.isArray(data) &&
            data?.map((item, i) => {
              const date = new Date(item.created_at);
              const formatted = date.toISOString().slice(0, 16).replace("T", " ");

              return (
                <Tab
                  key={i}
                  w={"100%"}
                  display={"inline-block"}
                  bg={"#79797D"}
                  color={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
                  textAlign={"start"}
                  borderLeft={"2px solid red"}
                  borderBottom={0}
                  borderColor={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
                  borderRadius={"8px"}
                  opacity={messageIndex.includes(i) ? "0.8" : 1}
                  p={2}
                  _selected={{ color: "#f7931a" }}
                  onClick={() => readMessage(i)}>
                  <Box>
                    <Flex align={"center"} gap={2}>
                      <Text w={"100%"} color={"#fff"} fontSize={"14px"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
                        {item.message_text}
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap={1}>
                      <FaCalendar />
                      <Text lineHeight={1}>{formatted}</Text>
                    </Flex>
                  </Box>
                </Tab>
              );
            })}
        </TabList>
      </Hide>
      <Show below="lg">
        <Box w={"100%"}>
          {!showTabPanel && (
            <TabList w={"100%"} display={"flex"} flexDir={"column"} alignItems={"center"} gap={4} mb={"10px"} color={"#fff"} borderBottom={0}>
              {Array.isArray(data) &&
                data?.map((item, i) => {
                  const date = new Date(item.created_at);
                  const formatted = date.toISOString().slice(0, 16).replace("T", " ");

                  return (
                    <Tab
                      key={i}
                      w={"100%"}
                      display={"inline-block"}
                      bg={"#79797D"}
                      color={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
                      textAlign={"start"}
                      borderLeft={"2px solid red"}
                      borderColor={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
                      borderRadius={"8px"}
                      opacity={messageIndex.includes(i) ? "0.8" : 1}
                      p={2}
                      _selected={{ color: "#f7931a" }}
                      onClick={() => {
                        readMessage(i);
                      }}>
                      <Flex align={"center"} gap={2}>
                        <Text w={"100%"} color={"#fff"} fontSize={"14px"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
                          {item.message_text}
                        </Text>
                      </Flex>
                      <Flex alignItems={"center"} gap={1}>
                        <FaCalendar />
                        <Text lineHeight={1}>{formatted}</Text>
                      </Flex>
                    </Tab>
                  );
                })}
            </TabList>
          )}
          {showTabPanel && selectedTab !== null && (
            <Flex flexDir={"column"} gap={4} pt={"40px"} pos={"relative"}>
              <Button w={"fit-content"} pos={"absolute"} top={0} right={0} p={0} onClick={() => setShowTabPanel(false)}>
                X
              </Button>
              <Text mt={4}>(data as MessagesProps[])[selectedTab].message_text</Text>
              <Textarea w={"100%"} h={"100%"} minH={"100px"} placeholder="Send response" />
              <PButton>Send</PButton>
            </Flex>
          )}
        </Box>
      </Show>
    </>
  );
};
