import { TableContainer, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { MoneyTransferdetailsModal } from "../modal";

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
  const [selectedData, setSelectedData] = React.useState<PaymentData | null>(null);

  const handleRowClick = (item: PaymentData) => {
    setSelectedData(item);
  };

  return (
    <>
      <TableContainer
        // minW="1024px"
        w={"100%"}
        maxH="400px"
        overflowX="auto"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
            height: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#f7931a",
            borderRadius: "24px",
          },
        }}>
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
              <Th>Adviser</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, i) => (
              <Tr key={i} onClick={() => handleRowClick(item)} cursor="pointer">
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

      {selectedData && <MoneyTransferdetailsModal isOpen={!!selectedData} onClose={() => setSelectedData(null)} data={selectedData} />}
    </>
  );
};
