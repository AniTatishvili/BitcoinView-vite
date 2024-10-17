import React from "react";

import { Link } from "react-router-dom";

import { Flex, Box, Text } from "@chakra-ui/react";
import { BreadCrumb } from "../../../../shared/ui/bread-crumb";
import { DashboardDepositSteps } from "../../../../components/dashboards/dashboard-deposit-steps";
import { DashboardPaymentMethods } from "../../../../components/dashboards/dashboard-payment-methods";
import { MoneyTransferDetailsTable } from "../money-transfer-details-table";

export const Deposit: React.FC = () => {
  const items = [
    { url: "/user-dashboard/overview", text: "Home", isCurrentPage: false },
    { url: "/user-dashboard/wallet", text: "Wallet", isCurrentPage: false },
    { url: "/user-dashboard/deposit", text: "Deposit", isCurrentPage: true },
  ];

  return (
    <Flex w={"100%"} h={"calc(100vh - 90px)"} overflow={"hidden"} pb={"1rem"}>
      <Flex
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        flexDir={{ base: "column", xl: "row" }}
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
        <Flex w={"100%"} flexDir={"column"} gap={4}>
          <BreadCrumb items={items} />
          <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
            <Text as="h3">Cards & Payment method</Text>
            <Flex w={"100%"} flexDir={{ base: "column", lg: "row" }} justify={"space-between"} gap={4}>
              <DashboardDepositSteps amount_usd={undefined} is_purchase={false} purchase_id={0} />
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
            <MoneyTransferDetailsTable />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
