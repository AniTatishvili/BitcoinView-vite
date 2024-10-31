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
  FilterFn,
} from "@tanstack/react-table";
import { Box, Button, Flex, Select, Table, Tbody, Td, Th, Thead, Tr, Checkbox, Text, Input } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const numericFilter: FilterFn<any> = (row, columnId, filterValue) => {
  const rowValue = row.getValue(columnId);
  console.log(rowValue, "rowValue", filterValue);
  if (filterValue === undefined || filterValue === "") return true;
  return rowValue !== undefined && rowValue === parseFloat(filterValue);
};

export const HostRefferContent = () => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = React.useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = React.useMemo<ColumnDef<any, any>[]>(
    () => [
      { id: "userName", accessorKey: "userName", header: "User Name", meta: { filterVariant: "text" } },
      { id: "id", accessorKey: "id", header: "ID", meta: { filterVariant: "number" }, filterFn: numericFilter },
      { id: "deposit", accessorKey: "deposit", header: "Deposit", meta: { filterVariant: "text" } },
      { id: "ref_code", accessorKey: "ref_code", header: "Red Code", meta: { filterVariant: "text" } },
      { id: "regDate", accessorKey: "regDate", header: "Reg/Date", meta: { filterVariant: "date" } },
      { id: "registered", accessorKey: "registered", header: "Registered", meta: { filterVariant: "registered" } },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: 1,
        userName: "Peter",
        deposit: true,
        ref_code: "150dfgjh",
        regDate: "2/10/2024",
        registered: "Successful",
      },
      {
        id: 2,
        userName: "Shima",
        deposit: true,
        ref_code: "150dfgjh",
        regDate: "12/2/2024",
        registered: "Not Registered",
      },
      {
        id: 3,
        userName: "Alika",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Withdraw amount",
      },
      {
        id: 4,
        userName: "Aleko",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Withdraw amount",
      },

      {
        id: 5,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Withdraw amount",
      },
      {
        id: 36,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Withdraw amount",
      },
      {
        id: 7,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Withdraw amount",
      },
      {
        id: 8,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Withdraw amount",
      },
      {
        id: 159,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Withdraw amount",
      },
      {
        id: 101,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Withdraw amount",
      },
      {
        id: 11,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Add amount",
      },
      {
        id: 12,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "1/12/2024",
        request: "Add amount",
      },
      {
        id: 13,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Add amount",
      },
      {
        id: 14,
        userName: "USer12",
        deposit: true,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Cancelation package",
      },
      {
        id: 15,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "20/8/2022",
        request: "Cancelation package",
      },
      {
        id: 16,
        userName: "USer18",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/10/2023",
        request: "Withdraw amount",
      },
      {
        id: 17,
        userName: "Alika",
        deposit: true,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Withdraw amount",
      },
      {
        id: 18,
        userName: "Tako",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Cancelation package",
      },
      {
        id: 19,
        userName: "USer12",
        deposit: true,
        ref_code: "150dfgjh",
        regDate: "10/12/2024",
        request: "Cancelation package",
      },
      {
        id: 20,
        userName: "USer1",
        deposit: false,
        ref_code: "150dfgjh",
        regDate: "10/2/2024",
        request: "Cancelation package",
      },
    ],
    []
  );

  const filteredData = React.useMemo(() => {
    return data.filter((row) => Object.values(row).some((value) => String(value).toLowerCase().includes(globalFilter.toLowerCase())));
  }, [data, globalFilter]);

  const tableInstance = useReactTable({
    columns,
    data: filteredData,
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
    <Box w={"100%"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"}>
      <Input placeholder="Search" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} w={"200px"} mb={4} />
      <Box
        overflowX={"scroll"}
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
        <Box w={"100%"} minW={"600px"} h={"fit-content"}>
          <Table>
            <Thead>
              {getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Th key={header.id} p={2}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {getRowModel().rows.map((row) => (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id} px={2}>
                      {cell.column.id === "deposit" ? (
                        <Checkbox
                          colorScheme={(cell.getValue() as boolean) ? "green" : undefined}
                          defaultChecked={cell.getValue() as boolean}
                          isReadOnly={true}
                        />
                      ) : (
                        flexRender(cell.column.columnDef.cell, cell.getContext())
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Flex className="pagination-controls" justify={"flex-end"} align={"center"} gap={4} my={4}>
            <Button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
              Previous
            </Button>
            <Button onClick={() => nextPage()} disabled={!getCanNextPage()}>
              Next
            </Button>
            <Flex as="span" gap={1}>
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
      </Box>
    </Box>
  );
};
