import { TableContainer, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const PaymentTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th>Type</Th>
            <Th>Deposit wallet</Th>
            <Th>Coin</Th>
            <Th isNumeric>Amount</Th>
            <Th>Destination</Th>
            <Th>TxID</Th>
            <Th>status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>2023-08-22 10:10:48</Td>
            <Td>deposit</Td>
            <Td>trust wallet</Td>
            <Td>-502</Td>
            <Td isNumeric>120</Td>
            <Td>trust wallet</Td>
            <Td>trust wallet</Td>
            <Td>Successful</Td>
          </Tr>
          <Tr>
            <Td>2023-08-22 10:10:48</Td>
            <Td>deposit</Td>
            <Td>trust wallet</Td>
            <Td>-502</Td>
            <Td isNumeric>120</Td>
            <Td>trust wallet</Td>
            <Td>trust wallet</Td>
            <Td>Successful</Td>
          </Tr>
          <Tr>
            <Td>2023-08-22 10:10:48</Td>
            <Td>deposit</Td>
            <Td>trust wallet</Td>
            <Td>-502</Td>
            <Td isNumeric>120</Td>
            <Td>trust wallet</Td>
            <Td>trust wallet</Td>
            <Td>Successful</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
