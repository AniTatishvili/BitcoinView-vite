import React from "react";
import axios from "axios";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { FAQ } from "../../../shared/FAQ";
import useCustomToast from "../../../shared/hooks/useCustomToast";
import { CurrentPackage } from "../../../shared/current-package";

interface UserMonthlyProfileProps {
  description: string;
  profit: string;
  date_time: string;
  id: number;
}

export const UserMonthlyProfileContent = () => {
  const showToast = useCustomToast();
  const [data, setData] = React.useState<UserMonthlyProfileProps[] | null>(null);
  const [requestStatus, setRequestStatus] = React.useState<string[]>([]);

  const linksArr = [
    { link: "https://bitcoinview.org/faq/whats-next-step-after-claim/", text: "What’s next step after Claim?" },
    { link: "https://bitcoinview.org/faq/whats-duration-time-of-claimed/", text: "What’s Duration time of claimed?" },
    { link: "https://bitcoinview.org/faq/how-can-i-get-more-claims/", text: "How can I get more claims?" },
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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const initialStatuses = response.data.profits.map((profit: { status: any }) => profit.status || "Claim");
        setRequestStatus(initialStatuses);
        console.log("User monthly profit:", response.data);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleClaimProfit = async (i: number) => {
    try {
      const response = await axios.post(
        claimUrl,
        { profit_id: Array.isArray(data) && data[i].id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequestStatus((prevStatuses) => {
        const newStatuses = [...prevStatuses];
        newStatuses[i] = response.data.status === "unclaimed" ? "Claim" : response.data.status;
        return newStatuses;
      });

      console.log("Profit claimed successfully:", response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showToast("error", error.response.data.message);
      console.error("Error claiming profit:", error);
    }
  };

  return (
    <Flex flexDir={"column"} gap={10}>
      <Flex flexDir={{ base: "column", xl: "row" }} gap={4}>
        {data === null || data.length === 0 ? (
          <Flex w={{ base: "100%", xl: "800px" }} justify={"center"} align={"center"}>
            <Text>You don't have any profit yet</Text>
          </Flex>
        ) : (
          <Flex
            maxH={"calc(100vh - 150px)"}
            overflowY={"scroll"}
            overflowX={"hidden"}
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
            <Flex w={{ base: "100%", xl: "800px" }} h={"fit-content"} flexDir={"column"} mr={"20px"} gap={4}>
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
                      minW={{ base: "470px", md: "100%" }}
                      w={"100%"}
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
                            <Text color={"#f7931a"}>Profit</Text>
                            <Text>{item.profit}</Text>
                          </Flex>
                          <Flex flexDir={{ base: "row", lg: "column" }} gap={{ base: "10px", lg: "0" }}>
                            <Text color={"#f7931a"}>Date/Time</Text>
                            <Text whiteSpace={"nowrap"}>{item.date_time}</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Button
                        bg={requestStatus[i] === "Claimed" ? "#7A7B7A" : requestStatus[i] === "Pending Approval" ? "#F7931A" : "#3AAB41"}
                        onClick={() => handleClaimProfit(i)}>
                        {requestStatus[i]}
                      </Button>
                    </Flex>
                  </Flex>
                ))}
            </Flex>
          </Flex>
        )}
        <Flex w={{ base: "100%", xl: "fit-content" }} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
          <CurrentPackage />
        </Flex>
      </Flex>
      <FAQ linksArr={linksArr} />
    </Flex>
  );
};
