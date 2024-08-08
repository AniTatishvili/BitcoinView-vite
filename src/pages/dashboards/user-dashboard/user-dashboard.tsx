import { Flex } from "@chakra-ui/react";
import { DashboardHeader } from "../../../widgets/dashboards/dashboard-header";
import { DashboardSideMenu } from "../../../widgets/dashboards/dashboard-side-menu";

import { Outlet } from "react-router-dom";

export const UserDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <Flex flexDir={"row"}>
        <DashboardSideMenu />
        <Outlet />
      </Flex>
    </>
  );
};
