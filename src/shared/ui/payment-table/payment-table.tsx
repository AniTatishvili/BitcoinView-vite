import { TableContainer, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";

interface PaymentData {
  time: string;
  transaction_type: string;
  btc_wallet: string;
  currency: string;
  amount_currency: string;
  amount_usd: number;
  destination: string;
  txid: string;
  transaction_status: string;
  created_at: string;
}

interface PaymentTableProps {
  data: PaymentData[];
}

export const PaymentTable = ({ data }: PaymentTableProps) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th>Type</Th>
            <Th>Deposit wallet</Th>
            <Th>Coin</Th>
            <Th>Amount $</Th>
            <Th>Amount currency</Th>
            <Th>Destination</Th>
            <Th>TxID</Th>
            <Th>status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, i) => (
            <Tr key={i}>
              <Td>{moment(item.created_at).format("DD/MM/yyyy h:mm:ss a")}</Td>
              <Td>{item.transaction_type}</Td>
              <Td maxW={"150px"} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
                {item.btc_wallet}
              </Td>
              <Td>{item.currency}</Td>
              <Td>{item.amount_usd}</Td>
              <Td> {item.amount_currency ? parseFloat(item.amount_currency).toFixed(5) : "N/A"}</Td>
              <Td>{item.currency}</Td>
              <Td maxW={"150px"} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
                {item.txid}
              </Td>
              <Td>{item.transaction_status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
