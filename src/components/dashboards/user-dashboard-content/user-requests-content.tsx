import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getFilteredRowModel,
  Column,
} from "@tanstack/react-table";
import { Box, Button, Flex, Select, Table, Tbody, Td, Th, Thead, Tr, Checkbox, Text, Input } from "@chakra-ui/react";

export const UserRequestsContent = () => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = React.useMemo<ColumnDef<any, any>[]>(
    () => [
      {
        id: "userName",
        accessorKey: "userName",
        header: "User Name",
        meta: { filterVariant: "text" },
      },
      {
        id: "id",
        accessorKey: "id",
        header: "ID",
        meta: { filterVariant: "number" },
      },
      {
        id: "package",
        accessorKey: "package",
        header: "Package",
        meta: { filterVariant: "text" },
      },
      {
        id: "amount",
        accessorKey: "amount",
        header: "Amount $",
        meta: { filterVariant: "number" },
      },
      {
        id: "requestDate",
        accessorKey: "requestDate",
        header: "Req/Date",
        meta: { filterVariant: "date" },
      },
      {
        id: "request",
        accessorKey: "request",
        header: "Request",
        meta: { filterVariant: "text" },
      },
      {
        id: "approve",
        accessorKey: "approve",
        header: "Approve",
        meta: { filterVariant: "select" },
      },
      {
        id: "reject",
        accessorKey: "reject",
        header: "Reject",
        meta: { filterVariant: "select" },
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: 1,
        userName: "USer1",
        package: "Voyager",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: true,
      },
      {
        id: 2,
        userName: "USer1",
        package: "Trail",
        amount: 200,
        requestDate: "10/2/2024",
        request: "Trail",
        approve: false,
        reject: true,
      },
      {
        id: 3,
        userName: "USer1",
        package: "Trail",
        amount: 15600,
        requestDate: "10/2/2024",
        request: "Trail",
        approve: false,
        reject: true,
      },
      {
        id: 4,
        userName: "USer1",
        package: "Trail",
        amount: 5200,
        requestDate: "10/2/2024",
        request: "Trail",
        approve: false,
        reject: true,
      },

      {
        id: 5,
        userName: "USer1",
        package: "Elite",
        amount: 89200,
        requestDate: "10/2/2024",
        request: "Elite",
        approve: true,
        reject: true,
      },
      {
        id: 6,
        userName: "USer1",
        package: "Titan",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Titan",
        approve: true,
        reject: true,
      },
      {
        id: 7,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: true,
      },
      {
        id: 8,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: true,
      },
      {
        id: 9,
        userName: "USer1",
        package: "package",
        amount: 8200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: true,
      },
      {
        id: 10,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 11,
        userName: "USer1",
        package: "Orbit",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 12,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "1/12/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 13,
        userName: "USer1",
        package: "Orbit",
        amount: 99900,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 14,
        userName: "USer1",
        package: "Orbit",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 15,
        userName: "USer1",
        package: "Orbit",
        amount: 1200,
        requestDate: "20/8/2022",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 16,
        userName: "USer18",
        package: "Orbit",
        amount: 1200,
        requestDate: "10/10/2023",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 17,
        userName: "Alika",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 18,
        userName: "Tako",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 19,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 20,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 21,
        userName: "Makho",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 22,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 23,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 24,
        userName: "Nitsa",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 25,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Delete",
        approve: true,
        reject: false,
      },
      {
        id: 26,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Add Amount",
        approve: true,
        reject: false,
      },
      {
        id: 27,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 28,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "request",
        approve: true,
        reject: false,
      },
      {
        id: 29,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Cancel",
        approve: true,
        reject: false,
      },
      {
        id: 30,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Withdraw Amount",
        approve: true,
        reject: true,
      },
    ],
    []
  );

  const tableInstance = useReactTable({
    columns,
    data,
    state: { columnFilters, pagination },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { getHeaderGroups, getRowModel, getCanNextPage, getCanPreviousPage, getPageCount, nextPage, previousPage, setPageSize } = tableInstance;

  return (
    <Box backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"}>
      <Table>
        <Thead>
          {getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getCanFilter() ? <Filter column={header.column} /> : null}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {cell.column.id === "approve" ? (
                    <Checkbox colorScheme="green" defaultChecked={cell.getValue()} />
                  ) : cell.column.id === "reject" ? (
                    <Checkbox colorScheme="red" defaultChecked={cell.getValue()} />
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex className="pagination-controls" justify={"flex-end"} align={"center"} gap={4} mt={4}>
        <Button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
          Previous
        </Button>
        <Button onClick={() => nextPage()} disabled={!getCanNextPage()}>
          Next
        </Button>
        <Flex as="span" gap={4}>
          <Text>Page</Text>
          <Text>
            {pagination.pageIndex + 1} of {getPageCount()}
          </Text>
        </Flex>
        <Select value={pagination.pageSize} onChange={(e) => setPageSize(Number(e.target.value))} w={"fit-content"}>
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

const Filter = ({ column }: { column: Column<any, unknown> }) => {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {};

  switch (filterVariant) {
    case "number":
      return <Input type="number" value={columnFilterValue ?? ""} onChange={(e) => column.setFilterValue(e.target.value)} placeholder="Amount" mt={2} />;
    case "select":
      return (
        <Select value={columnFilterValue?.toString() ?? ""} onChange={(e) => column.setFilterValue(e.target.value)}>
          <option value="">All</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </Select>
      );
    case "date":
      return <Input placeholder="Select Date and Time" size="md" type="date" mt={2} />;
    default:
      return <Input value={columnFilterValue ?? ""} onChange={(e) => column.setFilterValue(e.target.value)} placeholder="Search..." mt={2} />;
  }
};
