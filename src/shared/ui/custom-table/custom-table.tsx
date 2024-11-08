import { Table, TableContainer } from "@chakra-ui/react";
import React from "react";
import { CustomTableHeader } from "./custom-table-header";
import { CustomTableBody } from "./custom-table-body";

interface CustomTableProps {
  data: object[];
  // id: number;
  // user: string;
  // description: string;
  // package: string;
  // adviser: string;
  // currency: string;
  // amount: string;
}

export const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
  return (
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
        <CustomTableHeader />
        <CustomTableBody data={data} />
      </Table>
    </TableContainer>
  );
};
