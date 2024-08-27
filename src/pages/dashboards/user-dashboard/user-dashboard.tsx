import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { DashboardHeader } from "../../../components/dashboards/dashboard-header";
import { DashboardSideMenu } from "../../../components/dashboards/dashboard-side-menu";

import { TiHome } from "react-icons/ti";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUserAlt, FaWallet } from "react-icons/fa";

export const UserDashboard = () => {
  const data = [
    { link: "/user-dashboard/overview", name: "Home", icon: TiHome },
    { link: "/user-dashboard/messages", name: "Messages", icon: FaFacebookMessenger },
    { link: "/user-dashboard/profile", name: "Profile", icon: FaUserAlt },
    { link: "/user-dashboard/wallet", name: "Wallet", icon: FaWallet },
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
