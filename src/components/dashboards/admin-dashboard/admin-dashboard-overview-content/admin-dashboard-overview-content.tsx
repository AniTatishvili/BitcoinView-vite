import { Flex, Text, Image, Box } from "@chakra-ui/react";
import img from "../../../../assets/images/cards.png";

export const AdminDashboardOverviewContent = () => {
  const agentsArr = [
    { url: img, title: "title", desc: "Lorem ipsums", time: "9:20 AM" },
    { url: img, title: "title", desc: "Lorem ipsums", time: "9:20 AM" },
    { url: img, title: "title", desc: "Lorem ipsums", time: "9:20 AM" },
    { url: img, title: "title", desc: "Lorem ipsums", time: "9:20 AM" },
  ];
  return (
    <Flex flexDir={"column"} gap={4}>
      <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} gap={4}>
        <Flex
          w={{ base: "100%", md: "60%" }}
          h={"fit-content"}
          flexDir={"column"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          pos={"relative"}
          p={"1rem"}
          gap={4}>
          <Text pos={"absolute"} top={4} left={4}>
            Date
          </Text>
          <Flex flexDir={{ base: "column", lg: "row" }} justify={{ base: "center", lg: "space-around" }} gap={4}>
            <Flex flexDir={"column"} justify={"center"} align={"center"} gap={4}>
              <Flex fontSize={"22px"} fontWeight={500} mt={{ base: 4, lg: 0 }}>
                257500 USD/USDT
              </Flex>
              <Flex>Balance</Flex>
            </Flex>
            <Box>
              <Box color={"green"} textAlign={"center"}>
                Up $3000
              </Box>
              <Box color={"red"} textAlign={"center"}>
                Loss $240
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Flex
          w={{ base: "100%", md: "40%" }}
          h={"100%"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          p={"1rem"}
          gap={4}>
          <Flex fontSize={"22px"} fontWeight={500}>
            3
          </Flex>
          <Flex>Users</Flex>
        </Flex>
      </Flex>

      <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} gap={4}>
        <Flex
          w={{ base: "100%", md: "33%" }}
          h={"fit-content"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          p={"1rem"}
          gap={4}>
          <Flex fontSize={"22px"} fontWeight={500}>
            5
          </Flex>
          <Flex>Depost Today</Flex>
        </Flex>
        <Flex
          w={{ base: "100%", md: "33%" }}
          h={"fit-content"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          p={"1rem"}
          gap={4}>
          <Flex fontSize={"22px"} fontWeight={500}>
            3
          </Flex>
          <Flex>Register Today</Flex>
        </Flex>
        <Flex
          w={{ base: "100%", md: "33%" }}
          h={"fit-content"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          p={"1rem"}
          gap={4}>
          <Flex fontSize={"22px"} fontWeight={500}>
            3
          </Flex>
          <Flex>Call</Flex>
        </Flex>
      </Flex>
      <Flex w={"100%"} h={"370px"} flexDir={{ base: "column", md: "row" }} gap={4}>
        <Flex
          w={{ base: "100%", md: "50%" }}
          h={"fit-content"}
          flexDir={"column"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          p={"1rem"}
          gap={2}
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
          <Text>Agents List</Text>
          {agentsArr.map((item, i) => (
            <Flex key={i} w={"100%"} bg={"#35363d"} justify={"space-between"} align={"center"} borderRadius={"8px"} p={2}>
              <Flex gap={4}>
                <Image src={item.url} alt="image" w={"38px"} h={"38px"} objectFit={"cover"} borderRadius={"8px"} />
                <Flex flexDir={"column"} gap={"5px"}>
                  <Text fontWeight={600} lineHeight={1}>
                    {item.title}
                  </Text>
                  <Text lineHeight={1}>{item.desc}</Text>
                </Flex>
              </Flex>
              <Text>{item.time}</Text>
            </Flex>
          ))}
        </Flex>
        <Flex w={{ base: "100%", md: "50%" }} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={2}>
          <Text>Logs</Text>
          {agentsArr.map((item, i) => (
            <Flex key={i} w={"100%"} bg={"#35363d"} justify={"space-between"} align={"center"} borderRadius={"8px"} p={2}>
              <Flex gap={4}>
                <Image src={item.url} alt="image" w={"38px"} h={"38px"} objectFit={"cover"} borderRadius={"8px"} />
                <Flex flexDir={"column"} gap={"5px"}>
                  <Text fontWeight={600} lineHeight={1}>
                    {item.title}
                  </Text>
                  <Text lineHeight={1}>{item.desc}</Text>
                </Flex>
              </Flex>
              <Text>{item.time}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
