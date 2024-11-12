import { Flex } from "@chakra-ui/react";
import { AccountingContentFilter } from "./accounting-content-filter";
import { CustomTable } from "../../../shared/ui/custom-table";

export const AccountingContent = () => {
  return (
    <>
      <AccountingContentFilter />
      <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
        <CustomTable data={[]} />
      </Flex>
    </>
  );
};
