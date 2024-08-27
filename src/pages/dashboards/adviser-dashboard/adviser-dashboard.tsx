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

export const AdviserDashboard = () => {
  const data: MenuItem[] = [
    { link: "/adviser-dashboard/adviser-dashboard-overview", name: "Home", icon: TiHome },
    { link: "/adviser-dashboard/messages", name: "Messages", icon: FaFacebookMessenger },
    { link: "/adviser-dashboard/profile", name: "Profile", icon: FaUserAlt },
    { link: "/adviser-dashboard/asset", name: "Asset", icon: MdWebAsset },
    { link: "/adviser-dashboard/chart", name: "Chart", icon: FaChartArea },
    { link: "/adviser-dashboard/user-list", name: "User list", icon: PiUserListFill },
  ];

  return (
    <>
      <DashboardHeader  data={data}/>
      <Flex flexDir={"row"}>
        <DashboardSideMenu data={data} />
        <Outlet />
      </Flex>
    </>
  );
};
