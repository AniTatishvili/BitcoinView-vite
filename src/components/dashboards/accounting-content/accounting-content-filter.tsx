import { Flex, Input, Select, Button, Text } from "@chakra-ui/react";

export const AccountingContentFilter = () => {
  return (
    <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} justify={"space-between"} align={"center"}>
      <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
        <Input name="search" placeholder="Search" />
        <Input type="date" placeholder="Register Time" />
        <Select>
          <option>USD</option>
          <option>EUR</option>
          <option>BTC</option>
        </Select>
        <Button w={"100%"}>Export</Button>
      </Flex>
      <Text fontSize={"22px"}>Balance: $2500</Text>
    </Flex>
  );
};
