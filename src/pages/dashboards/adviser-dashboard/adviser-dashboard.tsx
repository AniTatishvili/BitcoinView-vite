import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { DashboardHeader } from "../../../components/dashboards/dashboard-header";
import { DashboardSideMenu } from "../../../components/dashboards/dashboard-side-menu";

import { TiHome } from "react-icons/ti";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import { FaCalculator } from "react-icons/fa";
import { MenuItem } from "../../../utils/types/dashboard-types";

export const AdviserDashboard = () => {
  const data: MenuItem[] = [
    { link: "/adviser-dashboard/adviser-dashboard-overview", name: "Home", icon: TiHome },
    { link: "/adviser-dashboard/messages", name: "Messages", icon: FaFacebookMessenger },
    { link: "/adviser-dashboard/profile", name: "Profile", icon: FaUserAlt },
    { link: "/adviser-dashboard/user-list", name: "User list", icon: PiUserListFill },
    { link: "/adviser-dashboard/accounting", name: "Accounting", icon: FaCalculator },
  ];

  return (
    <>
      <DashboardHeader data={data} />
      <Flex flexDir={"row"}>
        <DashboardSideMenu data={data} />
        <Outlet />
      </Flex>
    </>
  );
};
