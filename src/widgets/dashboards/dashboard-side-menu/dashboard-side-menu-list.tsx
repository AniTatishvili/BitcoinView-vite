import { Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { TiHome } from "react-icons/ti";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUserAlt, FaWallet } from "react-icons/fa";
import { useSelector } from "react-redux";

export const DashboardSideMenuList = () => {
  const { user_dashboard_menu_visibility } = useSelector((state: any) => state.user_dashboard_slice);

  return (
    <Flex flexDir={"column"} className="side-menu">
      <NavLink to="/user-dashboard/user-dashboard-home" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        <Flex h={"44px"} color={"#fff"} align={"center"} gap={10} p={10}>
          <TiHome />
          <Text>{user_dashboard_menu_visibility ? "Home" : null}</Text>
        </Flex>
      </NavLink>
      <NavLink to="/user-dashboard/messages" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        <Flex h={"44px"} color={"#fff"} align={"center"} gap={10} p={10}>
          <FaFacebookMessenger />
          <Text>{user_dashboard_menu_visibility ? "Messages" : null}</Text>
        </Flex>
      </NavLink>
      <NavLink to="/user-dashboard/profile" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        <Flex h={"44px"} color={"#fff"} align={"center"} gap={10} p={10}>
          <FaUserAlt />
          <Text>{user_dashboard_menu_visibility ? "Profile" : null}</Text>
        </Flex>
      </NavLink>
      <NavLink to="/user-dashboard/wallet" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
        <Flex h={"44px"} color={"#fff"} align={"center"} gap={10} p={10}>
          <FaWallet />
          <Text>{user_dashboard_menu_visibility ? "Wallet" : null}</Text>
        </Flex>
      </NavLink>
    </Flex>
  );
};
