import React from "react";
import axios from "axios";

import { Box, Button, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { PercentageDoughnut } from "../ui/charts";
import { FaCircle } from "react-icons/fa";
import useCustomToast from "../hooks/useCustomToast";
import { CurrentPackageCancelModal } from "../ui/modal";

interface CurrentPackageProps {
  package_name: string;
  start_time: string;
  expire_time: string;
  remaining_time: string;
  monthly_profit: string;
  status: string;
}

export const CurrentPackage = () => {
  const showToast = useCustomToast();
  const [data, setData] = React.useState<CurrentPackageProps[]>([]);
  const [loading, setLoading] = React.useState(true);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/purchase/active";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // if (Array.isArray(response.data.active_purchase)) {
        setData(response.data.active_purchase);
        setLoading(false);
        // }
        console.log("User package data:", response.data.active_purchase);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  }, []);

  console.log(typeof data, 23);
  return (
    <Box>
      <Flex justify={"space-between"} align={"center"} gap={10}>
        <Flex align={"center"} gap={"8px"}>
          <Text>Current Package</Text>
          <Button h={"30px"} bg={"#0E4534"} color={"#218B3D"} p={"4px"} cursor={"revert"}>
            Active
          </Button>
        </Flex>
        <PercentageDoughnut />
      </Flex>
      <Flex flexDir={"column"} gap={4}>
        {loading ? (
          data.map((item, i) => {
            console.log(222);
            console.log(item, 9999);
            return (
              <Flex flexDir={"column"} gap={4} key={i}>
                <Text fontWeight={"600"}>Package: {item.package_name}</Text>
                <List>
                  <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
                    <ListIcon as={FaCircle} color="#44B96B" />
                    <Text>Start Time: {item.start_time}</Text>
                  </ListItem>
                  <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
                    <ListIcon as={FaCircle} color="#C05768" />
                    <Box>
                      <Text>Expire Time: {item.expire_time}</Text>
                      <Text>Profit/ Monthly: {item.monthly_profit}</Text>
                      <Text>Reamining Time: {item.remaining_time}</Text>
                    </Box>
                  </ListItem>
                </List>
              </Flex>
            );
          })
        ) : (
          <Text>Loading</Text>
        )}
        <Flex justify={"space-between"}>
          <Button bg={"#3AAB41"}>Claims</Button>
          <CurrentPackageCancelModal />
        </Flex>
      </Flex>
    </Box>
  );
};
