import { Flex, Hide } from "@chakra-ui/react";
import { UserDashboardDetails, UserDashboardOverview, UserActivities, UserDashboardPayments } from "../../../../components/dashboards/user-dashboard";
import { DashboardTable } from "../../../../components/dashboards/dashboard-table";
import { BreadCrumb } from "../../../../shared/ui/bread-crumb";

export const Overview = () => {
  const items = [{ url: "/user-dashboard/overview", text: "Home", isCurrentPage: true }];

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
        <Flex w={"100%"} h={"100%"} flexDir={{ base: "column", xl: "row" }} gap={"1rem"}>
          <Flex w={"100%"} flexDir={"column"} gap={"1rem"} order={{ base: 2, lg: 1 }}>
            <UserDashboardOverview />
            <DashboardTable />
          </Flex>
          <Flex w={{ base: "100%", xl: "40%" }} flexDir={"column"} gap={"1rem"} order={{ base: 1, lg: 2 }}>
            <UserDashboardDetails />
            <UserDashboardPayments />
            <Hide below={"sm"}>
              <UserActivities />
            </Hide>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
