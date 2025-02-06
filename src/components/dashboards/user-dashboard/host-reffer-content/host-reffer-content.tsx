import React from "react";
import axios from "axios";
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
import useCustomToast from "../../../../shared/hooks/useCustomToast";
import { Box, Button, Flex, Select, Table, Tbody, Td, Th, Thead, Tr, Checkbox, Text, Input } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const numericFilter: FilterFn<any> = (row, columnId, filterValue) => {
  const rowValue = row.getValue(columnId);
  if (filterValue === undefined || filterValue === "") return true;
  return rowValue !== undefined && rowValue === parseFloat(filterValue);
};

export const HostRefferContent = () => {
  const showToast = useCustomToast();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [refData, setRefData] = React.useState<any[]>([]);

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = React.useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = React.useMemo<ColumnDef<any, any>[]>(
    () => [
      { id: "username", accessorKey: "username", header: "User Name", meta: { filterVariant: "text" } },
      { id: "user_id", accessorKey: "user_id", header: "ID", meta: { filterVariant: "number" }, filterFn: numericFilter },
      { id: "has_successful_deposit", accessorKey: "has_successful_deposit", header: "Deposit", meta: { filterVariant: "text" } },
      { id: "referral_code", accessorKey: "referral_code", header: "Red Code", meta: { filterVariant: "text" } },
      { id: "created_at", accessorKey: "created_at", header: "Reg/Date", meta: { filterVariant: "date" } },
    ],
    []
  );

  const filteredData = React.useMemo(() => {
    return refData.filter((row) => Object.values(row).some((value) => String(value).toLowerCase().includes(globalFilter.toLowerCase())));
  }, [refData, globalFilter]);

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

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/referrals";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRefData(response.data);
      })
      .catch((error) => {
        showToast("error", error.response?.data?.message || "Error fetching data.");
        console.error("Error fetching user data:", error);
      });
  }, []);

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
