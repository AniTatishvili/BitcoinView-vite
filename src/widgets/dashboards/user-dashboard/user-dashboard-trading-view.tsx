import { Flex, Text } from "@chakra-ui/react";
import { TradingViewChart } from "../../../shared/charts";

export const UserDashboardTradingView = () => {
  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Text as="h2" color="#fff" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
        Trading view
      </Text>
      <TradingViewChart />
    </Flex>
  );
};
