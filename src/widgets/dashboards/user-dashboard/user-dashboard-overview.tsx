import { Flex, Text } from "@chakra-ui/react";
import { UserDashboardChart } from "../../../shared/charts";

export const UserDashboardOverview = () => {
  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Text as="h2" color="#fff" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
        Overview
      </Text>
      <UserDashboardChart />
    </Flex>
  );
};
