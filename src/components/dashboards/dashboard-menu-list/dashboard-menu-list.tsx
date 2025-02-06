import { NavLink } from "react-router-dom";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { DashboardSideMenuProps } from "../../../utils/types/dashboard-types";

import { useUserDashboardStore } from "../../../store/dashboard/user-dashboard-store";

export const DashboardMenuList: React.FC<DashboardSideMenuProps> = ({ data }) => {
  const { user_dashboard_menu_visibility } = useUserDashboardStore();

  return (
    <Flex
      maxH={"calc(100vh - 160px)"}
      overflowY={"scroll"}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#f7931a",
          borderRadius: "24px",
        },
      }}>
      <Flex flexDir={"column"} mr={2} className="side-menu">
        {data.map((item, i) => (
          <NavLink key={i} to={item.link} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
            <Flex h={"40px"} color={"#fff"} align={"center"} gap={3}>
              <Flex fontSize={"18px"}>
                <Icon as={item.icon} />
              </Flex>
              <Text fontSize={"15px"} whiteSpace={"nowrap"}>
                {user_dashboard_menu_visibility ? item.name : null}
              </Text>
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};
