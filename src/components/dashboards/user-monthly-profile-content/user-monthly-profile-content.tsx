import React from "react";
import axios from "axios";

import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { FAQ } from "../../../shared/FAQ";
import useCustomToast from "../../../shared/hooks/useCustomToast";

interface UserMonthlyProfileProps {
  descrription: string;
  profit: string;
  data_time: string;
  id: number;
}

export const UserMonthlyProfileContent = () => {
  const showToast = useCustomToast();
  const [data, setData] = React.useState<UserMonthlyProfileProps | null>(null);
  const [requestStatus, setRequestStatus] = React.useState("Claim");

  const linksArr = [
    { link: "/", text: "What’s next step after Claim ?" },
    { link: "/", text: "What’s Duration time of claimed ?" },
    { link: "/", text: "How I can get more claimes ?" },
  ];

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/profits";
  const claimUrl = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/profits/claim";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.profits);
        console.log("User monthly profit:", response.data);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  }, []);
  console.log(data, 44);
  const handleClaimProfit = async () => {
    try {
      const response = await axios.post(
        claimUrl,
        { profit_id: Array.isArray(data) && data[0].id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRequestStatus("Receive");
      console.log("Package cancelled successfully:", response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setRequestStatus("Pending");
      showToast("error", error.response.data.message);
      console.error("Error canceling avatar:", error);
    }
  };

  return (
    <Flex flexDir={"column"} gap={10}>
      <Flex
        maxH={"calc(100vh - 150px)"}
        overflowY={"scroll"}
        css={{
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            width: "10px",
            background: "#7C7C7C",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#f7931a",
            borderRadius: "8px",
          },
        }}>
        <Flex w={"100%"} h={"fit-content"} flexDir={"column"} mr={"20px"} gap={4}>
          {Array.isArray(data) &&
            data.map((item, i) => (
              <Flex
                key={i}
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
                <Flex
                  minW={{ base: "470px", md: "70%" }}
                  w={"70%"}
                  justify={"space-between"}
                  align={"center"}
                  bg={"#1f2027"}
                  borderRadius={"8px"}
                  px={4}
                  py={2}
                  gap={4}>
                  <Flex w={"fit-content"} justify={"space-between"} gap={{ base: 3, md: 8 }} fontSize={{ base: "16px", md: "20px" }}>
                    <Box color={"#767474"} fontSize={{ base: "50px", sm: "70px", md: "86px" }} lineHeight={1}>
                      {i + 1}
                    </Box>
                    <Flex w={"fit-content"} flexDir={{ base: "column", lg: "row" }} justify={"space-between"} gap={{ base: 0, lg: 8 }}>
                      <Flex flexDir={{ base: "row", lg: "column" }} gap={{ base: "10px", lg: "0" }}>
                        <Text color={"#f7931a"}>Description</Text>
                        <Text>{item.description}</Text>
                      </Flex>
                      <Flex flexDir={{ base: "row", lg: "column" }} gap={{ base: "10px", lg: "0" }}>
                        <Text color={"#f7931a"}>Description</Text>
                        <Text>{item.profit}</Text>
                      </Flex>
                      <Flex flexDir={{ base: "row", lg: "column" }} gap={{ base: "10px", lg: "0" }}>
                        <Text color={"#f7931a"}>Description</Text>
                        <Text>{item.date_time}</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Button bg={"#3AAB41"} onClick={handleClaimProfit}>
                    {requestStatus}
                  </Button>
                </Flex>
              </Flex>
            ))}
        </Flex>
      </Flex>
      <FAQ linksArr={linksArr} />
    </Flex>
  );
};
