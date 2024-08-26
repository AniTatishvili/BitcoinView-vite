import { Flex } from "@chakra-ui/react";
import { DashboardHeader } from "../../../components/dashboards/dashboard-header";
import { DashboardSideMenu } from "../../../components/dashboards/dashboard-side-menu";

import { Outlet } from "react-router-dom";

export const AdminDashboard = () => {
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
