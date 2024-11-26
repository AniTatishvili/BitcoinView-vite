import React from "react";
import { useLocation } from "react-router-dom";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getFilteredRowModel,
  //   FilterFn,
} from "@tanstack/react-table";

import { Box, Button, Flex, Select, Table, Tbody, Td, Th, Thead, Tr, Checkbox, Text, Input } from "@chakra-ui/react";
import { AddNewEventModal, AddPackageModal } from "../modal";

// const numericFilter: FilterFn<any> = (row, columnId, filterValue) => {
//   const rowValue = row.getValue(columnId);
//   if (filterValue === undefined || filterValue === "") return true;
//   return rowValue !== undefined && rowValue === parseFloat(filterValue);
// };

interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<any, any>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export const TanstackTable = ({ columns, data }: TableProps) => {
  const location = useLocation();

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = React.useState("");

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
      <Flex>
        <Input placeholder="Search" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} w={"200px"} mb={4} />
        {location.pathname.includes("add-user-slider") ? <AddNewEventModal /> : <AddPackageModal />}
      </Flex>
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
                      {cell.column.id === "has_successful_deposit" ? (
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
