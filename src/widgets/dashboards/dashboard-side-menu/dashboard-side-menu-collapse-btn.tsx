import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDashboardMenuVisibilityStatus } from "../../../app/providers/store/slice/dashboard/user-dashboard-slice";
import { Box } from "@chakra-ui/react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface RootState {
  user_dashboard_slice: {
    user_dashboard_menu_visibility: boolean;
  };
}

export const DashboardSideMenuCollapseBtn: React.FC = () => {
  const dispatch = useDispatch();
  const { user_dashboard_menu_visibility } = useSelector((state: RootState) => state.user_dashboard_slice);

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
      dispatch(userDashboardMenuVisibilityStatus(true));
    } else {
      dispatch(userDashboardMenuVisibilityStatus(tabStatus));
    }
  }, [dispatch, tabStatus]);

  return (
    <Box pos={"absolute"} bottom={"20px"} color={"#fff"} fontSize={"28px"} onClick={handleHiddingTabsTitle}>
      <Box>{user_dashboard_menu_visibility ? <FaAngleDoubleLeft rotate="180deg" /> : <FaAngleDoubleRight />}</Box>
    </Box>
  );
};
