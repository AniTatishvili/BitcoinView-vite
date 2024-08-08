import { Flex } from "@chakra-ui/react";
import { UserDashboardDetails, UserDashboardOverview, UserDashboardTradingView } from "../../../../widgets/dashboards/user-dashboard";
import { DashboardTable } from "../../../../widgets/dashboards/dashboard-table";

export const UserDashboardHome = () => {
  return (
    <Flex
      w={"100%"}
      h={"calc(100vh - 80px)"}
      overflowY={"scroll"}
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
      <Flex flexDir={"column"} gap={"1rem"}>
        <UserDashboardOverview />
        <UserDashboardTradingView />
        <DashboardTable />
      </Flex>
      <Flex w={"100%"} flexDir={"column"} gap={"1rem"}>
        <UserDashboardDetails />
        <UserDashboardDetails />
        <UserDashboardDetails />
      </Flex>
    </Flex>
  );
};
