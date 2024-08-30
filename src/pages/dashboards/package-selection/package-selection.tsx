import { Flex } from "@chakra-ui/react";
import { PackageSelectionContent } from "../../../components/dashboards/package-selection-content";
import { BreadCrumb } from "../../../shared/ui/bread-crumb";

export const PackageSelection = () => {
  const items = [
    { url: "/user-dashboard/overview", text: "Home", isCurrentPage: false },
    { url: "/user-dashboard/package-selection", text: "Package Selection Success", isCurrentPage: true },
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
          <PackageSelectionContent />
        </Flex>
      </Flex>
    </Flex>
  );
};
