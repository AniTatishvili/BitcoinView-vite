import { Box, Flex, Text } from "@chakra-ui/react";
import { FaBtc } from "react-icons/fa";

export const UserActivities = () => {
  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Text as="h2" color="#fff" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
        Activities
      </Text>
      <Flex flexDir={"column"} gap={"10px"}>
        <Flex w={"100%"} justify={"space-between"} align={"center"} backgroundColor={"#141316"} borderRadius={"8px"} p={"10px"}>
          <Flex align={"center"} gap={4}>
            <FaBtc color={"#fff"} fontSize={"24px"} />
            <Box lineHeight={1}>
              <Box color={"#fff"}>Ethereum</Box>
              <Box color={"#999"}>Sold</Box>
            </Box>
          </Flex>
          <Box lineHeight={1}>
            <Box color={"#fff"}>-25.29 ETH</Box>
            <Box color={"#999"}>Today, 03:15PM</Box>
          </Box>
        </Flex>
        <Flex w={"100%"} justify={"space-between"} align={"center"} backgroundColor={"#141316"} borderRadius={"8px"} p={"10px"}>
          <Flex align={"center"} gap={4}>
            <FaBtc color={"#fff"} fontSize={"24px"} />
            <Box lineHeight={1}>
              <Box color={"#fff"}>Ethereum</Box>
              <Box color={"#999"}>Sold</Box>
            </Box>
          </Flex>
          <Box lineHeight={1}>
            <Box color={"#fff"}>-25.29 ETH</Box>
            <Box color={"#999"}>Today, 03:15PM</Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
