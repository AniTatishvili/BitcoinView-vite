import { Flex } from "@chakra-ui/react";
import { UserDashboardDetails, UserDashboardOverview, UserActivities, UserDashboardPayments } from "../../../../components/dashboards/user-dashboard";
import { DashboardTable } from "../../../../components/dashboards/dashboard-table";

export const Overview = () => {
  return (
    <Flex w={"100%"} h={"calc(100vh - 90px)"} overflow={"hidden"} pb={"1rem"}>
      <Flex
        w={"100%"}
        h={"calc(100vh - 80px)"}
        overflowY={"scroll"}
        flexDir={{ base: "column", xl: "row" }}
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
        <Flex w={"100%"} flexDir={"column"} gap={"1rem"}>
          <UserDashboardOverview />
          <DashboardTable />
        </Flex>
        <Flex w={{ base: "100%", xl: "40%" }} flexDir={"column"} gap={"1rem"}>
          <UserDashboardDetails />
          <UserDashboardPayments />
          <UserActivities />
        </Flex>
      </Flex>
    </Flex>
  );
};
