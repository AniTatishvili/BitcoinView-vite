import { Th, Thead, Tr } from "@chakra-ui/react";

export const CustomTableHeader = () => {
  return (
    <Thead>
      <Tr>
        <Th>Username</Th>
        <Th>Registration Date</Th>
        <Th>Successful Deposit</Th>
        <Th>Deposit Amount</Th>
      </Tr>
    </Thead>
  );
};
