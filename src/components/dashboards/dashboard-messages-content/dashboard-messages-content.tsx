import { Box, Flex, Tabs } from "@chakra-ui/react";

import { DashboardMessagesTabLists } from "./dashboard-messages-tablists";
import { DashboardMessagesTabPanels } from "./dashboard-messages-tabpanels";

export const DashboardMessagesContent = () => {
  const activeTabIndex = JSON.parse(window.localStorage.getItem("ACTIVE_MESSAGE_INDEX") || "0");

  return (
    <Flex backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"}>
      <Tabs w={"100%"} h={"calc(100vh - 250px)"} display={"flex"} flexDir={{ base: "column", lg: "row" }} gap={4} defaultIndex={activeTabIndex}>
        <Box
          w={{ base: "100%", lg: "40%" }}
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
          <Box pr={2}>
            <DashboardMessagesTabLists />
          </Box>
        </Box>
        <DashboardMessagesTabPanels />
      </Tabs>
    </Flex>
  );
};
