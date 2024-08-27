import { Flex, Hide } from "@chakra-ui/react";
import { useUserDashboardStore } from "../../../store/dashboard/user-dashboard-store";

import { DashboardMenuList } from "../dashboard-menu-list/dashboard-menu-list";
import { DashboardSideMenuCollapseBtn } from "./dashboard-side-menu-collapse-btn";
import { DashboardSideMenuProps } from "../../../utils/types/dashboard-types";

export const DashboardSideMenu: React.FC<DashboardSideMenuProps> = ({ data }) => {
  const { user_dashboard_menu_visibility } = useUserDashboardStore();

  return (
    <Hide below="md">
      <Flex
        maxW={user_dashboard_menu_visibility ? "200px" : "90px"}
        w={"100%"}
        h={"calc(100vh - 80px)"}
        backgroundColor={"#1F2027"}
        flexDir={"column"}
        align={"baseline"}
        px={"30px"}
        py={"20px"}
        pos={"relative"}
        overflow={"hidden"}
        transition={"all 150ms ease"}
        // _before={{
        //   content: '""',
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   height: "100%",
        //   width: "70px",
        //   color: "#f2f2f2",
        //   zIndex: 1,
        // }}
      >
        <DashboardMenuList data={data} />

        <DashboardSideMenuCollapseBtn />
      </Flex>
    </Hide>
  );
};
