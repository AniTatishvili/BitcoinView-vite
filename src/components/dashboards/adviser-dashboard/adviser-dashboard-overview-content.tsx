import React from "react";
import axios from "axios";

import { Flex, Text } from "@chakra-ui/react";
import { CustomTable } from "../../../shared/ui/custom-table";

interface AdviserDashboardOverviewContentProps {
  active_users_count: number;
  assigned_users_count: number;
  deposits_today_count: number;
}
export const AdviserDashboardOverviewContent = () => {
  const [infoData, setInfoData] = React.useState<AdviserDashboardOverviewContentProps>({
    active_users_count: 0,
    assigned_users_count: 0,
    deposits_today_count: 0,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [adviserUserListData, setAdviserUserListData] = React.useState<any>([]);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  React.useEffect(() => {
    adviserInfo();
    adviserUserList();
  }, []);

  const adviserInfo = async () => {
    const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/adviser-dashboard-info";

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setInfoData(response.data);
        console.log("Adviser dashboard info:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const adviserUserList = async () => {
    const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/adviser-assigned-users-info";

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAdviserUserListData(response.data);
        console.log("Adviser dashboard info:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  return (
    <Flex flexDir={"column"} gap={4}>
      {/* <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} gap={4}>
        <Flex
          w={{ base: "100%", md: "100%" }}
          h={"fit-content"}
          flexDir={"column"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          pos={"relative"}
          p={"1rem"}
          gap={4}>
          <Text pos={"absolute"} top={4} left={4}>
            Date
          </Text>
          <Flex flexDir={"column"} justify={"center"} align={"center"} gap={4}>
            <Flex fontSize={"22px"} fontWeight={500}>
              {infoData?.active_users_count}
            </Flex>
            <Flex>Advice/User</Flex>
          </Flex>
        </Flex>
        <Flex
          w={{ base: "100%", md: "40%" }}
          h={"fit-content"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          p={"1rem"}
          gap={4}>
          <Flex fontSize={"22px"} fontWeight={500}>
            {infoData?.active_users_count}
          </Flex>
          <Flex>User Submit</Flex>
        </Flex>
      </Flex> */}

      <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} gap={4}>
        <Flex
          w={{ base: "100%", md: "33%" }}
          h={"fit-content"}
          flexDir={"column"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          pos={"relative"}
          p={"1rem"}
          gap={4}>
          <Text pos={"absolute"} top={4} left={4}>
            Date
          </Text>
          <Flex flexDir={"column"} justify={"center"} align={"center"} gap={4}>
            <Flex fontSize={"22px"} fontWeight={500}>
              {infoData?.active_users_count}
            </Flex>
            <Flex>Advice/User</Flex>
          </Flex>
        </Flex>
        <Flex
          w={{ base: "100%", md: "33%" }}
          h={"fit-content"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          p={"1rem"}
          gap={4}>
          <Flex fontSize={"22px"} fontWeight={500}>
            {infoData?.assigned_users_count}
          </Flex>
          <Flex>Depost Today</Flex>
        </Flex>
        <Flex
          w={{ base: "100%", md: "33%" }}
          h={"fit-content"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          p={"1rem"}
          gap={4}>
          <Flex fontSize={"22px"} fontWeight={500}>
            {infoData?.deposits_today_count}
          </Flex>
          <Flex>Active Account</Flex>
        </Flex>
        {/* <Flex
          w={{ base: "100%", md: "33%" }}
          h={"fit-content"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          backgroundColor={"#1F2027"}
          borderRadius={"8px"}
          p={"1rem"}
          gap={4}>
          <Flex fontSize={"22px"} fontWeight={500}>
            3
          </Flex>
          <Flex>Call</Flex>
        </Flex> */}
      </Flex>
      <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
        <Text>Latest Users</Text>
        <CustomTable data={adviserUserListData} />
      </Flex>
    </Flex>
  );
};
