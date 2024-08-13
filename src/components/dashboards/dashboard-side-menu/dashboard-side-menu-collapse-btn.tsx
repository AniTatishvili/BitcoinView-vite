import React from "react";

import { useUserDashboardStore } from "../../../store/dashboard/user-dashboard-store";

import { Box } from "@chakra-ui/react";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

export const DashboardSideMenuCollapseBtn: React.FC = () => {
  const { update_user_dashboard_menu_visibility, user_dashboard_menu_visibility } = useUserDashboardStore();

  const [tabStatus, setTabStatus] = React.useState<boolean | null>(() => {
    const status = window.localStorage.getItem("user_dashboard_menu_status");
    return status ? JSON.parse(status) : null;
  });

  const handleHiddingTabsTitle = () => {
    setTabStatus((prev) => {
      const newStatus = !prev;
      window.localStorage.setItem("user_dashboard_menu_status", JSON.stringify(newStatus));
      return newStatus;
    });
  };

  React.useEffect(() => {
    if (tabStatus === null) {
      window.localStorage.setItem("user_dashboard_menu_status", JSON.stringify(true));
      update_user_dashboard_menu_visibility(true);
    } else {
      update_user_dashboard_menu_visibility(tabStatus);
    }
  }, [tabStatus]);

  return (
    <Box pos={"absolute"} bottom={"20px"} color={"#fff"} fontSize={"28px"} onClick={handleHiddingTabsTitle}>
      <Box>{user_dashboard_menu_visibility ? <BsFillArrowLeftSquareFill rotate="180deg" /> : <BsFillArrowRightSquareFill />}</Box>
    </Box>
  );
};
