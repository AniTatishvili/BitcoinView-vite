import { Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { TiHome } from "react-icons/ti";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUserAlt, FaWallet } from "react-icons/fa";

import { useUserDashboardStore } from "../../../store/dashboard/user-dashboard-store";

export const DashboardSideMenuList = () => {
  const { user_dashboard_menu_visibility } = useUserDashboardStore();

  return (
    <Flex flexDir={"column"} className="side-menu">
      <NavLink to="/user-dashboard/overview" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        <Flex h={"44px"} color={"#fff"} align={"center"} gap={4} p={3}>
          <Text fontSize={"18px"}>
            <TiHome />
          </Text>
          <Text>{user_dashboard_menu_visibility ? "Home" : null}</Text>
        </Flex>
      </NavLink>
      <NavLink to="/user-dashboard/messages" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        <Flex h={"44px"} color={"#fff"} align={"center"} gap={4} p={3}>
          <Text fontSize={"18px"}>
            <FaFacebookMessenger />
          </Text>
          <Text>{user_dashboard_menu_visibility ? "Messages" : null}</Text>
        </Flex>
      </NavLink>
      <NavLink to="/user-dashboard/profile" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        <Flex h={"44px"} color={"#fff"} align={"center"} gap={4} p={3}>
          <Text fontSize={"18px"}>
            <FaUserAlt />
          </Text>
          <Text>{user_dashboard_menu_visibility ? "Profile" : null}</Text>
        </Flex>
      </NavLink>
      <NavLink to="/user-dashboard/wallet" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        <Flex h={"44px"} color={"#fff"} align={"center"} gap={4} p={3}>
          <Text fontSize={"18px"}>
            <FaWallet />
          </Text>
          <Text>{user_dashboard_menu_visibility ? "Wallet" : null}</Text>
        </Flex>
      </NavLink>
    </Flex>
  );
};
