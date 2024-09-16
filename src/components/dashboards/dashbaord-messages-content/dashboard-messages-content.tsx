import React from "react";
import { Box, Button, Flex, Text, Textarea, Tab, TabList, TabPanel, TabPanels, Tabs, Icon } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { PButton } from "../../../shared/ui/buttons";

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

export const DashboardMessagesContent = () => {
  const [hoveredTabIndex, setHoveredTabIndex] = React.useState(-1);

  const handleClick = () => {
    console.log("clicked");
  };

  const handleMouseOver = (indx: number) => {
    setHoveredTabIndex(indx);
  };

  const handleMouseOut = () => {
    setHoveredTabIndex(-1);
  };

  return (
    <Flex backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"}>
      <Tabs w={"100%"} h={"calc(100vh - 150px)"} display={"flex"} gap={4}>
        <Box
          w={"40%"}
          overflowY={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#f7931a",
              borderRadius: "24px",
            },
          }}>
          <Box pr={2}>
            <TabList w={"100%"} display={"flex"} flexDir={"column"} alignItems={"center"} gap={4} mb={"10px"} color={"#fff"} borderBottom={0}>
              {messagesArr.map((item, i) => {
                return (
                  <Tab
                    key={i}
                    w={"100%"}
                    display={"inline-block"}
                    bg={"#79797D"}
                    textAlign={"start"}
                    borderLeft={"2px solid red"}
                    borderBottom={0}
                    borderColor={"#f7931a"}
                    borderRadius={"8px"}
                    p={2}
                    onMouseOver={() => handleMouseOver(i)}
                    onMouseOut={handleMouseOut}>
                    <Box>
                      <Flex align={"center"} gap={2}>
                        <Text w={"100%"} color={"#fff"} fontSize={"14px"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
                          {item.text}
                        </Text>
                        <Button w={"14px"} h={"28px"} color={"red"} p={1} opacity={hoveredTabIndex === i ? 1 : 0} onClick={handleClick}>
                          <Box>
                            <Icon as={MdDelete} />
                          </Box>
                        </Button>
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
          </Box>
        </Box>
        <TabPanels w={"60%"} bg={"#35363d"} borderRadius={"8px"} p={4}>
          {messagesArr.map((item, i) => {
            return (
              <TabPanel key={i} color={"#fff"} fontSize={"14px"} p={0}>
                <Flex flexDir={"column"} gap={4}>
                  <Text>{item.text}</Text>
                  <Textarea w={"100%"} h={"100%"} minH={"100px"} placeholder="Send response" />
                  <PButton>Send</PButton>
                </Flex>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
