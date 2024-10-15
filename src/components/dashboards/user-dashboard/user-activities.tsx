import React from "react";
import axios from "axios";

import { Box, Flex, Text } from "@chakra-ui/react";
// import { FaBtc } from "react-icons/fa";

interface UserActivitiesProps {
  description: string;
  date: string;
}

export const UserActivities = () => {
  const [data, setData] = React.useState<UserActivitiesProps | null>(null);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/activities";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.activities || null);
        console.log("User chart data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Text as="h2" color="#fff" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
        Activities
      </Text>
      <Flex flexDir={"column"} gap={"10px"}>
        {Array.isArray(data) &&
          data.slice(-2).map((item, i) => {
            return (
              <Flex key={i} w={"100%"} justify={"space-between"} align={"center"} backgroundColor={"#141316"} borderRadius={"8px"} p={"10px"}>
                <Flex align={"center"} gap={4}>
                  <Box color={"#fff"} fontSize={"24px"}>
                    {i}
                  </Box>
                  <Box lineHeight={1}>
                    <Box color={"#fff"}>{item.description}</Box>
                    {/* <Box color={"#999"}>Sold</Box> */}
                  </Box>
                </Flex>
                <Box lineHeight={1}>
                  {/* <Box color={"#fff"}>-25.29 ETH</Box> */}
                  <Box color={"#999"}>{item.date}</Box>
                </Box>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};
