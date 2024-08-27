import { NavLink } from "react-router-dom";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { DashboardSideMenuProps } from "../../../utils/types/dashboard-types";

import { useUserDashboardStore } from "../../../store/dashboard/user-dashboard-store";

export const DashboardMenuList: React.FC<DashboardSideMenuProps> = ({ data }) => {
  const { user_dashboard_menu_visibility } = useUserDashboardStore();
  console.log(data, 555);
  return (
    <Flex flexDir={"column"} className="side-menu">
      {data.map((item, i) => (
        <NavLink key={i} to={item.link} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
          <Flex h={"44px"} color={"#fff"} align={"center"} gap={4} p={3}>
            <Flex fontSize={"18px"}>
              <Icon as={item.icon} />
            </Flex>
            <Text>{user_dashboard_menu_visibility ? item.name : null}</Text>
          </Flex>
        </NavLink>
      ))}
    </Flex>
  );
};
