import { Flex, Box, Button, VStack } from "@chakra-ui/react";
import React from "react";

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

  return (
    <VStack w={"100%"} p={"1rem"} gap={20}>
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
  );
};
