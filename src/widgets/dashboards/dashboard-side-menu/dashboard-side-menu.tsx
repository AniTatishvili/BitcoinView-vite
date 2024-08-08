import { useSelector } from "react-redux";

import { Flex } from "@chakra-ui/react";

import { DashboardSideMenuList } from "./dashboard-side-menu-list";
import { DashboardSideMenuCollapseBtn } from "./dashboard-side-menu-collapse-btn";

export const DashboardSideMenu = () => {
  const { user_dashboard_menu_visibility } = useSelector((state: any) => state.user_dashboard_slice);

  return (
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
      <DashboardSideMenuList />

      <DashboardSideMenuCollapseBtn />
    </Flex>
  );
};
