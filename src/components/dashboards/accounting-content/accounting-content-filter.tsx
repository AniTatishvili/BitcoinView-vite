import { Flex, Input, Select } from "@chakra-ui/react";

export const AccountingContentFilter = () => {
  return (
    <Flex>
      <Input name="search" placeholder="Search" />
      <Input type="date" placeholder="Register Time" />
      <Select>
        <option>USD</option>
        <option>EUR</option>
        <option>BTC</option>
      </Select>
    </Flex>
  );
};
