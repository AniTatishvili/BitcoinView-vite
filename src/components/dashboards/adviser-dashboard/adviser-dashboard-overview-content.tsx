import { Flex, Text } from "@chakra-ui/react";
import { PaymentTable } from "../../../shared/ui/payment-table/payment-table";

export const AdviserDashboardOverviewContent = () => {
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
          <Flex flexDir={"column"} justify={"center"} align={"center"} gap={4}>
            <Flex fontSize={"22px"} fontWeight={500}>
              11
            </Flex>
            <Flex>Advice/User</Flex>
          </Flex>
        </Flex>
        <Flex
          w={{ base: "100%", md: "40%" }}
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
          <Flex>User Submit</Flex>
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
          <Flex>Active Account</Flex>
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
      <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
        <Text>Latest Users</Text>
        <PaymentTable />
      </Flex>
    </Flex>
  );
};
