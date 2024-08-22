import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

import { PaymentTable } from "../../../../shared/ui/payment-table/payment-table";
import { TableFilter } from "../../../../shared/ui/table-filter";
import { DashboardWithdrawSteps } from "../../../../components/dashboards/dashboard-withdraw-steps";

export const Withdraw = () => {
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
        <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
          <Text as="h3">Recent Transactions</Text>
          <DashboardWithdrawSteps />
          <TableFilter />
          <Box color={"#f7931a"} fontSize={"14px"} textDecoration={"underline"}>
            <Link to="/">Deposit hasn't arrived?</Link>
          </Box>
          <Box>
            <PaymentTable />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
