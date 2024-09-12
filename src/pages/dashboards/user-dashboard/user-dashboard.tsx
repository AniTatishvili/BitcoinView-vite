import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { DashboardHeader } from "../../../components/dashboards/dashboard-header";
import { DashboardSideMenu } from "../../../components/dashboards/dashboard-side-menu";

import { TiHome } from "react-icons/ti";
import { FaUserAlt, FaWallet, FaFacebookMessenger } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";

export const UserDashboard = () => {
  const data = [
    { link: "/user-dashboard/overview", name: "Home", icon: TiHome },
    { link: "/user-dashboard/messages", name: "Messages", icon: FaFacebookMessenger },
    { link: "/user-dashboard/profile", name: "Profile", icon: FaUserAlt },
    { link: "/user-dashboard/wallet", name: "Wallet", icon: FaWallet },
    { link: "/user-dashboard/user-monthly-profile", name: "Monthly Profile", icon: MdCalendarMonth },
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
