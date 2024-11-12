import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { DashboardHeader } from "../../../components/dashboards/dashboard-header";
import { DashboardSideMenu } from "../../../components/dashboards/dashboard-side-menu";

import { TiHome } from "react-icons/ti";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import { MdRequestPage } from "react-icons/md";
import { FaCalculator } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { MenuItem } from "../../../utils/types/dashboard-types";

export const AdminDashboard = () => {
  const data: MenuItem[] = [
    { link: "/admin-dashboard/admin-dashboard-overview", name: "Home", icon: TiHome },
    { link: "/admin-dashboard/user-requests", name: "user requests", icon: MdRequestPage },
    { link: "/admin-dashboard/messages", name: "Messages", icon: FaFacebookMessenger },
    { link: "/admin-dashboard/profile", name: "Profile", icon: FaUserAlt },
    { link: "/admin-dashboard/user-list", name: "User list", icon: PiUserListFill },
    { link: "/adviser-dashboard/accounting", name: "Accounting", icon: FaCalculator },
    { link: "/adviser-dashboard/push-notifications", name: "Push notifications", icon: BsFillSendFill },
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
