import { Flex, Text } from "@chakra-ui/react";
import { PaymentTable } from "../../../shared/ui/payment-table/payment-table";
import { BreadCrumb } from "../../../shared/ui/bread-crumb";

export const UserList = () => {
  const items = [
    { url: "/admin-dashboard/admin-dashboard-overview", text: "Home", isCurrentPage: false },
    { url: "/admin-dashboard/user-list", text: "User List", isCurrentPage: false },
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
        <Flex w={"100%"} flexDir={"column"} gap={4}>
          <BreadCrumb items={items} />
          <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
            <Text as="h2">Latest Users</Text>
            <PaymentTable />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
