import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { PercentageDoughnut } from "../ui/charts";
import { FaCircle } from "react-icons/fa";
import useCustomToast from "../hooks/useCustomToast";
import { CurrentPackageCancelModal } from "../ui/modal";
import { useUserPackageNameStore } from "../../store/dashboard/user-package-name-store";
import { useUserSignupStore } from "../../store/dashboard/user-auth";

interface CurrentPackageProps {
  package_name: string;
  start_time: string;
  expire_time: string;
  remaining_time: string;
  monthly_profit: string;
  status: string;
  time_left_percentage: number;
  id: number;
}

export const CurrentPackage = () => {
  const navigate = useNavigate();
  const showToast = useCustomToast();
  const { setUserPackageNameData } = useUserPackageNameStore();
  const { updateUserFields } = useUserSignupStore();
  const [data, setData] = React.useState<CurrentPackageProps | null>(null);

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
        setData(response.data.active_purchase || null);
        setUserPackageNameData(response.data.active_purchase.package_name);
        updateUserFields({ active_package: response.data.active_purchase.package_id });
        // console.log("User package data:", response.data.active_purchase);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <Box>
      <Flex justify={"space-between"} align={"center"} gap={10}>
        <Flex align={"center"} gap={"8px"}>
          <Text>Current Package</Text>
          <Button h={"30px"} bg={"#0E4534"} color={"#218B3D"} p={"4px"} cursor={"revert"}>
            {data?.status ?? ""}
          </Button>
        </Flex>
        <PercentageDoughnut percentage={data?.time_left_percentage ?? 0} />
      </Flex>
      <Flex flexDir={"column"} gap={4}>
        {data ? (
          <>
            <Text fontWeight={"600"}>Package: {data.package_name}</Text>
            <List>
              <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
                <ListIcon as={FaCircle} color="#44B96B" />
                <Text>Start Time: {data.start_time}</Text>
              </ListItem>
              <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
                <ListIcon as={FaCircle} color="#C05768" />
                <Box>
                  <Text>Expire Time: {data.expire_time}</Text>
                  <Text>Profit/ Monthly: {data.monthly_profit}</Text>
                  <Text>Remaining Time: {data.remaining_time}</Text>
                </Box>
              </ListItem>
            </List>
          </>
        ) : (
          <Text>No active packages found.</Text>
        )}
        <Flex justify={"space-between"}>
          <Button bg={"#3AAB41"} onClick={() => navigate("/user-dashboard/user-monthly-profile")}>
            Claims
          </Button>
          <CurrentPackageCancelModal purchase_id={data?.id ?? 0} />
        </Flex>
      </Flex>
    </Box>
  );
};
