import { Flex, Text } from "@chakra-ui/react";
import { BreadCrumb } from "../../../shared/ui/bread-crumb";
import { AccountingContent } from "../../../components/dashboards/accounting-content";

export const Accounting = () => {
  const items = [
    { url: "/user-dashboard/overview", text: "Home", isCurrentPage: false },
    { url: "/user-dashboard/accounting", text: "Accounting", isCurrentPage: true },
  ];

  return (
    <Flex w={"100%"} h={"calc(100vh - 90px)"} overflow={"hidden"} pb={"1rem"}>
      <Flex
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        flexDir={"column"}
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
        <BreadCrumb items={items} />
        <Text as="h2">Accounting</Text>
        <AccountingContent />
      </Flex>
    </Flex>
  );
};
