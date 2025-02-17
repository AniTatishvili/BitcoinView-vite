import { Outlet } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { DashboardHeader } from "../../../components/dashboards/dashboard-header";
import { DashboardSideMenu } from "../../../components/dashboards/dashboard-side-menu";

import { TiHome } from "react-icons/ti";
import { FaUserAlt, FaWallet, FaFacebookMessenger } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { MdCalendarMonth } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";

export const UserDashboard = () => {
  const data = [
    { link: "/user-dashboard/overview", name: "Home", icon: TiHome },
    { link: "/user-dashboard/messages", name: "Messages", icon: FaFacebookMessenger },
    { link: "/user-dashboard/profile", name: "Profile", icon: FaUserAlt },
    { link: "/user-dashboard/wallet", name: "Wallet", icon: FaWallet },
    { link: "/user-dashboard/package-selection", name: "Select Package", icon: FiPackage },
    { link: "/user-dashboard/user-monthly-profile", name: "Monthly Profile", icon: MdCalendarMonth },
    { link: "/user-dashboard/host-reffer", name: "Host Reffer", icon: PiUserListFill },
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
