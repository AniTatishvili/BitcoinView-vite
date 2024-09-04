import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { FAQ } from "../../../shared/FAQ";

export const UserMonthlyProfileContent = () => {
  const data = [
    { descrription: "Monthly Profit", profit: "$1000", date_time: "23/03/2024 14:43" },
    { descrription: "Monthly Profit", profit: "$1000", date_time: "23/03/2024 10:03" },
    { descrription: "Monthly Profit", profit: "$1000", date_time: "23/03/2024 15:43" },
    { descrription: "Monthly Profit", profit: "$1000", date_time: "23/03/2024 14:43" },
    { descrription: "Monthly Profit", profit: "$1000", date_time: "23/03/2024 08:03" },
  ];

  const linksArr = [
    { link: "/", text: "What’s next step after Claim ?" },
    { link: "/", text: "What’s Duration time of claimed ?" },
    { link: "/", text: "How I can get more claimes ?" },
  ];

  return (
    <Flex flexDir={"column"} gap={10}>
      <Flex
        maxH={"calc(100vh - 150px)"}
        overflowY={"scroll"}
        css={{
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            width: "10px",
            background: "#7C7C7C",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#f7931a",
            borderRadius: "8px",
          },
        }}>
        <Flex w={"100%"} h={"fit-content"} flexDir={"column"} mr={"20px"} gap={4}>
          {data.map((item, i) => (
            <Flex
              key={i}
              overflowX={"scroll"}
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                  height: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#f7931a",
                  borderRadius: "24px",
                },
              }}>
              <Flex
                minW={{ base: "470px", md: "100%" }}
                w={"100%"}
                justify={"space-between"}
                align={"center"}
                bg={"#1f2027"}
                borderRadius={"8px"}
                p={4}
                gap={4}>
                <Flex w={"fit-content"} justify={"space-between"} gap={{ base: 3, md: 8 }} fontSize={{ base: "16px", md: "20px" }}>
                  <Box color={"#767474"} fontSize={{ base: "50px", sm: "70px", md: "96px" }} lineHeight={1}>
                    {i + 1}
                  </Box>
                  <Flex w={"fit-content"} flexDir={{ base: "column", lg: "row" }} justify={"space-between"} gap={{ base: 0, lg: 8 }}>
                    <Flex flexDir={{ base: "row", lg: "column" }} gap={{ base: "10px", lg: "0" }}>
                      <Text color={"#f7931a"}>Description</Text>
                      <Text>{item.descrription}</Text>
                    </Flex>
                    <Flex flexDir={{ base: "row", lg: "column" }} gap={{ base: "10px", lg: "0" }}>
                      <Text color={"#f7931a"}>Description</Text>
                      <Text>{item.profit}</Text>
                    </Flex>
                    <Flex flexDir={{ base: "row", lg: "column" }} gap={{ base: "10px", lg: "0" }}>
                      <Text color={"#f7931a"}>Description</Text>
                      <Text>{item.date_time}</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Button bg={"#3AAB41"}>Claim</Button>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <FAQ linksArr={linksArr} />
    </Flex>
  );
};
