import { Link } from "react-router-dom";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { PaymentTable } from "../../../../shared/ui/payment-table/payment-table";
import { TableFilter } from "../../../../shared/ui/table-filter";

import card_img from "../../../../assets/images/cards.png";
import { BreadCrumb } from "../../../../shared/ui/bread-crumb";

export const Deposit = () => {
  const items = [
    { url: "/app/user-dashboard/overview", text: "Home", isCurrentPage: false },
    { url: "/app/user-dashboard/overview", text: "Deposit", isCurrentPage: true },
  ];
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
            <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} justify={"space-between"} align={"center"} gap={4}>
              <Box w={"50%"} borderRadius={"8px"} overflow={"hidden"}>
                <Image src={card_img} alt="cards" w={"100%"} h={"100%"} objectFit={"cover"} />
              </Box>
              <Flex flexDir={{ base: "column", lg: "row" }} fontSize={"14px"} gap={4}>
                <Box bg={"#3C3C3C"} borderRadius={"8px"} p={"5px"}>
                  <Link to="/user-dashboard/transaction-history">Transactions history</Link>
                </Box>
                <Box bg={"#3C3C3C"} borderRadius={"8px"} p={"5px"}>
                  <Link to="/user-dashboard/add-payment-method">Add new payment method</Link>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
            <Text as="h3">Recent Transactions</Text>
            <TableFilter />
            <PaymentTable />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
