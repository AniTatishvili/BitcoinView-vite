import React from "react";
import { Flex, Box, Button, VStack } from "@chakra-ui/react";
import { BreadCrumb } from "../../../shared/ui/bread-crumb";

interface MessagesProps {
  text: string;
}
const messagesArr: MessagesProps[] = [
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
  },
];

export const Messages = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleClick = (i: number) => {
    setOpenIndex((prevIndex) => (prevIndex === i ? null : i));
  };

  const items = [
    { url: "/user-dashboard/overview", text: "Home", isCurrentPage: false },
    { url: "/user-dashboard/messages", text: "Messages", isCurrentPage: true },
  ];

  return (
    <Flex w={"100%"} h={"calc(100vh - 90px)"} overflow={"hidden"} pb={"1rem"}>
      <Flex
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        flexDir={"column"}
        // flexWrap={"wrap"}
        p={"1rem"}
        gap={"1rem"}
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
        <BreadCrumb items={items} />
        <VStack w={"100%"} gap={2}>
          {messagesArr.map((item, i) => {
            return (
              <Flex key={i} w={"100%"} h={"fit-content"} flexDir={"column"} align={"flex-start"} color={"#fff"}>
                <Button
                  w={"100%"}
                  backgroundColor={openIndex === i ? "#f7931a" : "#1F2027"}
                  textAlign={"start"}
                  borderRadius={openIndex === i ? "8px 8px 0 0" : "8px"}
                  borderLeft={"2px solid #f7931a"}
                  p={"15px 10px"}
                  onClick={() => handleClick(i)}>
                  show
                </Button>
                {openIndex === i && (
                  <Box w={"100%"} h={"fit-content"} backgroundColor={"#79797D"} borderRadius={"0 0 8px 8px"} p={"1rem"}>
                    {item.text}
                  </Box>
                )}
              </Flex>
            );
          })}
        </VStack>
      </Flex>
    </Flex>
  );
};
