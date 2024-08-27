import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { DashboardHeader } from "../../../components/dashboards/dashboard-header";
import { DashboardSideMenu } from "../../../components/dashboards/dashboard-side-menu";

import { TiHome } from "react-icons/ti";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { MenuItem } from "../../../utils/types/dashboard-types";

export const AdminDashboard = () => {
  const data: MenuItem[] = [
    { link: "/admin-dashboard/admin-dashboard-overview", name: "Home", icon: TiHome },
    { link: "/admin-dashboard/messages", name: "Messages", icon: FaFacebookMessenger },
    { link: "/admin-dashboard/profile", name: "Profile", icon: FaUserAlt },
    { link: "/admin-dashboard/asset", name: "Asset", icon: MdWebAsset },
    { link: "/admin-dashboard/chart", name: "Chart", icon: FaChartArea },
    { link: "/admin-dashboard/user-list", name: "User list", icon: PiUserListFill },
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
