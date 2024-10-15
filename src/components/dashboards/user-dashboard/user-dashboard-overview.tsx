import React from "react";
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { TradingViewChart, UserDashboardChart } from "../../../shared/ui/charts";

export const UserDashboardOverview = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Text as="h2" color="#fff" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
        Overview
      </Text>

      <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
        <TabList display={"flex"} alignItems={"center"} gap={4} mb={"10px"} color={"#fff"} borderBottom={0}>
          <Tab color={"#fff"} fontSize={"14px"} p={0}>
            Overview
          </Tab>
          {"/"}
          <Tab color={"#fff"} fontSize={"14px"} p={0}>
            Tradingview
          </Tab>
        </TabList>

        <TabPanels
          overflowX={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
              height: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#f7931a",
              borderRadius: "24px",
            },
          }}>
          <TabPanel minW={"500px"}>
            <UserDashboardChart />
          </TabPanel>
          <TabPanel minW={"500px"}>
            <TradingViewChart />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
