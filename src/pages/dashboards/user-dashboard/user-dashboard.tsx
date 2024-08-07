import { Tab, Tabs, Text } from "@chakra-ui/react";

import { TiHome } from "react-icons/ti";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUserAlt, FaWallet } from "react-icons/fa";

import { DashboardHeader } from "../../../widgets/dashboards/dashboard-header";
import { DashboardSideMenu, DashboardSideMenuList } from "../../../widgets/dashboards/dashboard-side-menu";
import { UserDashboardMessages, UserDashboardOverview, UserDashboardProfile, UserDashboardWallet } from "../../../widgets/dashboards/user-dashboard";

export const UserDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <Tabs variant={"unstyled"} display={"flex"} flexDir={"row"}>
        <DashboardSideMenu>
          <Tab display={"flex"} px={"20px"} gap={"16px"}>
            <TiHome />
            <Text>Home</Text>
          </Tab>
          <Tab display={"flex"} px={"20px"} gap={"16px"}>
            <FaFacebookMessenger />
            <Text>Overiew</Text>
          </Tab>
          <Tab display={"flex"} px={"20px"} gap={"16px"}>
            <FaUserAlt />
            <Text>Profile</Text>
          </Tab>
          <Tab display={"flex"} px={"20px"} gap={"10px"}>
            <FaWallet />
            <Text>Wallet</Text>
          </Tab>
        </DashboardSideMenu>
        <DashboardSideMenuList>
          <UserDashboardOverview />
          <UserDashboardMessages />
          <UserDashboardProfile />
          <UserDashboardWallet />
        </DashboardSideMenuList>
      </Tabs>
    </>
  );
};
