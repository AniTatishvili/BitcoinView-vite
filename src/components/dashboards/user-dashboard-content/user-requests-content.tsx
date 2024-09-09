import React from "react";
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";
import { Box, Button, Flex, Select, Table, Tbody, Td, Th, Thead, Tr, Checkbox } from "@chakra-ui/react";

export const UserRequestsContent = () => {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const ApproveCheckbox = ({ check }: any) => {
    <Checkbox colorScheme="red" defaultChecked>
      check
    </Checkbox>;
  };

  const columns = React.useMemo(
    () => [
      {
        id: "userName",
        accessorKey: "userName",
        header: "User Name",
      },
      {
        id: "id",
        header: "ID",
        accessorKey: "id",
      },
      {
        id: "package",
        header: "Package",
        accessorKey: "package",
      },
      {
        id: "amount",
        header: "Amount $",
        accessorKey: "amount",
      },
      {
        id: "requestDate",
        header: "Req/Date",
        accessorKey: "requestDate",
      },
      {
        id: "request",
        header: "Request",
        accessorKey: "request",
      },
      {
        id: "approve",
        header: "Approve",
        accessorKey: "approve",
      },
      {
        id: "reject",
        header: "Reject",
        accessorKey: "reject",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: 1,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: ApproveCheckbox(true),
        reject: "reject",
      },
      {
        id: 2,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: false,
        reject: "reject",
      },
      {
        id: 3,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: false,
        reject: "reject",
      },
      {
        id: 4,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: false,
        reject: "reject",
      },

      {
        id: 5,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 6,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 7,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 8,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 9,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 10,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 11,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 12,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 13,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 14,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 15,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 16,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 17,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 18,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 19,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 20,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 21,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 22,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 23,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 24,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 25,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 26,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 27,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 28,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 29,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
      {
        id: 30,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: "reject",
      },
    ],
    []
  );

  const tableInstance = useReactTable({
    columns,
    data,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { getHeaderGroups, getRowModel, getCanNextPage, getCanPreviousPage, getPageCount, nextPage, previousPage, setPageSize } = tableInstance;
  console.log("tableInstance", tableInstance);
  // {
  //   data.map((item) => (
  //     <div key={item.id}>
  //       <span>
  //         Approve: <ApproveCheckbox checked={item.approve} />
  //       </span>
  //     </div>
  //   ));
  // }
  return (
    <Box backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"}>
      <Table>
        <Thead>
          {getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex className="pagination-controls" mt={4}>
        <Button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
          Previous
        </Button>
        <Button onClick={() => nextPage()} disabled={!getCanNextPage()}>
          Next
        </Button>
        <span>
          Page{" "}
          <strong>
            {pagination.pageIndex + 1} of {getPageCount()}
          </strong>
        </span>
        <Select value={pagination.pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
          {[10, 20, 30, 40].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </Select>
      </Flex>
    </Box>
  );
};
