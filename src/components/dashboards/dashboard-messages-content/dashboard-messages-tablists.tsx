import React from "react";
import { Box, Flex, Text, Tab, TabList, Hide, Show, Textarea, Button } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";
import { PButton } from "../../../shared/ui/buttons/PButton";

interface MessagesProps {
  text: string;
  date: string;
}

const messagesArr: MessagesProps[] = [
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident89.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
];

export const DashboardMessagesTabLists = () => {
  const storedReadMessageIndexes = window.localStorage.getItem("READ_MESSAGE_INDEX");
  let initialReadMessageIndexes = [];

  try {
    if (storedReadMessageIndexes) {
      initialReadMessageIndexes = JSON.parse(storedReadMessageIndexes);
      if (!Array.isArray(initialReadMessageIndexes)) {
        initialReadMessageIndexes = [];
      }
    }
  } catch (e) {
    console.error("Failed to parse READ_MESSAGE_INDEX from localStorage", e);
  }

  const [messageIndex, setMessageIndex] = React.useState<number[]>(initialReadMessageIndexes);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [showTabPanel, setShowTabPanel] = React.useState<boolean>(false);

  const readMessage = (indx: number) => {
    const newReadMessageIndexes = [...messageIndex, indx];
    setMessageIndex(newReadMessageIndexes);
    setShowTabPanel(true);
    setSelectedTab(indx);
    window.localStorage.setItem("READ_MESSAGE_INDEX", JSON.stringify(newReadMessageIndexes));
    window.localStorage.setItem("ACTIVE_MESSAGE_INDEX", JSON.stringify(indx));
  };

  return (
    <>
      <Hide below="lg">
        <TabList w={"100%"} display={"flex"} flexDir={"column"} alignItems={"center"} gap={4} mb={"10px"} color={"#fff"} borderBottom={0}>
          {messagesArr.map((item, i) => {
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
                      {item.text}
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={1}>
                    <FaCalendar />
                    <Text lineHeight={1}>{item.date}</Text>
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
              {messagesArr.map((item, i) => (
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
                      {item.text}
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={1}>
                    <FaCalendar />
                    <Text lineHeight={1}>{item.date}</Text>
                  </Flex>
                </Tab>
              ))}
            </TabList>
          )}
          {showTabPanel && selectedTab !== null && (
            <Flex flexDir={"column"} gap={4} pt={"40px"} pos={"relative"}>
              <Button w={"fit-content"} pos={"absolute"} top={0} right={0} p={0} onClick={() => setShowTabPanel(false)}>
                X
              </Button>
              <Text mt={4}>{messagesArr[selectedTab].text}</Text>
              <Textarea w={"100%"} h={"100%"} minH={"100px"} placeholder="Send response" />
              <PButton>Send</PButton>
            </Flex>
          )}
        </Box>
      </Show>
    </>
  );
};
