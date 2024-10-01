import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/react";
import { PaymentTable } from "../../../../shared/ui/payment-table/payment-table";
import { TableFilter } from "../../../../shared/ui/table-filter";

// import card_img from "../../../../assets/images/cards.png";
import { BreadCrumb } from "../../../../shared/ui/bread-crumb";
import { DashboardDepositSteps } from "../../../../components/dashboards/dashboard-deposit-steps";
import { DashboardPaymentMethods } from "../../../../components/dashboards/dashboard-payment-methods";

export const Deposit = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const items = [
    { url: "/user-dashboard/overview", text: "Home", isCurrentPage: false },
    { url: "/user-dashboard/wallet", text: "Wallet", isCurrentPage: false },
    { url: "/user-dashboard/deposit", text: "Deposit", isCurrentPage: true },
  ];

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/transactions";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        console.log("User data:", response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <Flex w={"100%"} h={"calc(100vh - 90px)"} overflow={"hidden"} pb={"1rem"}>
      <Flex
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        flexDir={{ base: "column", xl: "row" }}
        // flexWrap={"wrap"}
        p={"1rem"}
        gap={"1rem"}
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
        <Flex flexDir={"column"} gap={4}>
          <BreadCrumb items={items} />
          <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
            <Text as="h3">Cards & Payment method</Text>
            <Flex w={"100%"} flexDir={{ base: "column", lg: "row" }} justify={"space-between"} gap={4}>
              {/* <Box w={"50%"} borderRadius={"8px"} overflow={"hidden"}>
                <Image src={card_img} alt="cards" w={"100%"} h={"100%"} objectFit={"cover"} />
              </Box> */}
              <DashboardDepositSteps amount_usd={undefined} />
              <Box>
                <Flex flexDir={{ base: "column", lg: "row" }} fontSize={"14px"} gap={4} mb={"1rem"}>
                  <Box bg={"#3C3C3C"} borderRadius={"8px"} p={"5px"}>
                    <Link to="/user-dashboard/transaction-history">Transactions history</Link>
                  </Box>
                  <Box bg={"#3C3C3C"} borderRadius={"8px"} p={"5px"}>
                    <Link to="/user-dashboard/add-payment-method">Add new payment method</Link>
                  </Box>
                </Flex>
                <DashboardPaymentMethods />
              </Box>
            </Flex>
          </Flex>
          <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
            <Text as="h3">Recent Transactions</Text>
            <TableFilter />
            {isLoading ? (
              <Flex justify={"center"} align={"center"} h={"100%"}>
                <div>Loading..</div>
              </Flex>
            ) : (
              data && (
                <Flex
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
                  <PaymentTable data={data} />
                </Flex>
              )
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
