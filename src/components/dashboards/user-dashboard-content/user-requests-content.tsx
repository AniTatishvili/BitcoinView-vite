// import React from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   ColumnDef,
//   ColumnFiltersState,
//   flexRender,
//   getFilteredRowModel,
//   Column,
// } from "@tanstack/react-table";
// import { Box, Button, Flex, Select, Table, Tbody, Td, Th, Thead, Tr, Checkbox, Text, Input } from "@chakra-ui/react";

// // Main component
// export const UserRequestsContent = () => {
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
//   const [pagination, setPagination] = React.useState({
//     pageIndex: 0,
//     pageSize: 10,
//   });
//   // Example of a custom filter function

//   // Define table columns
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const columns = React.useMemo<ColumnDef<any, any>[]>(
//     () => [
//       {
//         id: "userName",
//         accessorKey: "userName",
//         header: "User Name",
//         meta: { filterVariant: "text" },
//       },
//       {
//         id: "id",
//         accessorKey: "id",
//         header: "ID",
//         meta: { filterVariant: "number" },
//       },
//       {
//         id: "package",
//         accessorKey: "package",
//         header: "Package",
//         meta: { filterVariant: "text" },
//       },
//       {
//         id: "amount",
//         accessorKey: "amount",
//         header: "Amount $",
//         meta: { filterVariant: "number" },
//         filter: (rows: any[], id: string | number, filterValue: number) => {
//           return rows.filter((row: { values: { [x: string]: number } }) => row.values[id] >= filterValue); // Example: Filter numbers greater than or equal to filterValue
//         },
//       },
//       {
//         id: "requestDate",
//         accessorKey: "requestDate",
//         header: "Req/Date",
//         meta: { filterVariant: "date" },
//       },
//       {
//         id: "request",
//         accessorKey: "request",
//         header: "Request",
//         meta: { filterVariant: "request-select" }, // request-select filter
//       },
//       {
//         id: "approve",
//         accessorKey: "approve",
//         header: "Approve",
//         meta: { filterVariant: "select" },
//       },
//       {
//         id: "reject",
//         accessorKey: "reject",
//         header: "Reject",
//         meta: { filterVariant: "select" },
//       },
//     ],
//     []
//   );

//   const data = React.useMemo(
//     () => [
//       {
//         id: 1,
//         userName: "USer1",
//         package: "Voyager",
//         amount: 1200,
//         requestDate: "2/10/2024",
//         request: "Withdraw amount",
//         approve: true,
//         reject: true,
//       },
//       {
//         id: 2,
//         userName: "USer1",
//         package: "Trail",
//         amount: 200,
//         requestDate: "12/2/2024",
//         request: "Withdraw amount",
//         approve: false,
//         reject: true,
//       },
//       {
//         id: 3,
//         userName: "USer1",
//         package: "Trail",
//         amount: 15600,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: false,
//         reject: true,
//       },
//       {
//         id: 4,
//         userName: "USer1",
//         package: "Trail",
//         amount: 5200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: false,
//         reject: true,
//       },

//       {
//         id: 5,
//         userName: "USer1",
//         package: "Elite",
//         amount: 89200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: true,
//         reject: true,
//       },
//       {
//         id: 6,
//         userName: "USer1",
//         package: "Titan",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: true,
//         reject: true,
//       },
//       {
//         id: 7,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: true,
//         reject: true,
//       },
//       {
//         id: 8,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: true,
//         reject: true,
//       },
//       {
//         id: 9,
//         userName: "USer1",
//         package: "package",
//         amount: 8200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: true,
//         reject: true,
//       },
//       {
//         id: 10,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 11,
//         userName: "USer1",
//         package: "Orbit",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Add amount",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 12,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "1/12/2024",
//         request: "Add amount",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 13,
//         userName: "USer1",
//         package: "Orbit",
//         amount: 99900,
//         requestDate: "10/2/2024",
//         request: "Add amount",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 14,
//         userName: "USer1",
//         package: "Orbit",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Cancelation package",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 15,
//         userName: "USer1",
//         package: "Orbit",
//         amount: 1200,
//         requestDate: "20/8/2022",
//         request: "Cancelation package",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 16,
//         userName: "USer18",
//         package: "Orbit",
//         amount: 1200,
//         requestDate: "10/10/2023",
//         request: "Withdraw amount",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 17,
//         userName: "Alika",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 18,
//         userName: "Tako",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Cancelation package",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 19,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/12/2024",
//         request: "Cancelation package",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 20,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Cancelation package",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 21,
//         userName: "Makho",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Cancelation package",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 22,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Cancelation package",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 23,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Cancelation package",
//         approve: true,
//         reject: false,
//       },
//       {
//         id: 24,
//         userName: "Nitsa",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "request",
//         approve: "Not Approve",
//         reject: false,
//       },
//       {
//         id: 25,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: "Not Approve",
//         reject: false,
//       },
//       {
//         id: 26,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Withdraw amount",
//         approve: "Not Approve",
//         reject: false,
//       },
//       {
//         id: 27,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Cancelation package",
//         approve: "Approve",
//         reject: false,
//       },
//       {
//         id: 28,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Add amount",
//         approve: "Approve",
//         reject: false,
//       },
//       {
//         id: 29,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/2/2024",
//         request: "Cancel",
//         approve: "Approve",
//         reject: false,
//       },
//       {
//         id: 30,
//         userName: "USer1",
//         package: "package",
//         amount: 1200,
//         requestDate: "10/02/2024",
//         request: "Withdraw Amount",
//         approve: "Approve",
//         reject: true,
//       },
//     ],
//     []
//   );

//   // Initialize table instance
//   const tableInstance = useReactTable({
//     columns,
//     data,
//     state: { columnFilters, pagination },
//     onPaginationChange: setPagination,
//     onColumnFiltersChange: setColumnFilters,
//     enableMultiRowSelection: true,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//   });

//   const { getHeaderGroups, getRowModel, getCanNextPage, getCanPreviousPage, getPageCount, nextPage, previousPage, setPageSize } = tableInstance;

//   return (
//     <Box backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"}>
//       <Table>
//         <Thead>
//           {getHeaderGroups().map((headerGroup) => (
//             <Tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <Th key={header.id}>
//                   {flexRender(header.column.columnDef.header, header.getContext())}
//                   {header.column.getCanFilter() ? <Filter column={header.column} /> : null}
//                 </Th>
//               ))}
//             </Tr>
//           ))}
//         </Thead>
//         <Tbody>
//           {getRowModel().rows.map((row) => (
//             <Tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <Td key={cell.id}>
//                   {cell.column.id === "approve" ? (
//                     <Checkbox colorScheme="green" isChecked={cell.getValue() as boolean} />
//                   ) : cell.column.id === "reject" ? (
//                     <Checkbox colorScheme="red" isChecked={cell.getValue() as boolean} />
//                   ) : (
//                     flexRender(cell.column.columnDef.cell, cell.getContext())
//                   )}
//                 </Td>
//               ))}
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//       <Flex className="pagination-controls" justify={"flex-end"} align={"center"} gap={4} mt={4}>
//         <Button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
//           Previous
//         </Button>
//         <Button onClick={() => nextPage()} disabled={!getCanNextPage()}>
//           Next
//         </Button>
//         <Flex as="span" gap={4}>
//           <Text>Page</Text>
//           <Text>
//             {pagination.pageIndex + 1} of {getPageCount()}
//           </Text>
//         </Flex>
//         <Select value={pagination.pageSize} onChange={(e) => setPageSize(Number(e.target.value))} w={"fit-content"}>
//           {[10, 20, 30, 40].map((size) => (
//             <option key={size} value={size}>
//               Show {size}
//             </option>
//           ))}
//         </Select>
//       </Flex>
//     </Box>
//   );
// };

// // Filter component
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const Filter = ({ column }: { column: Column<any, unknown> }) => {
//   const [inputValue, setInputValue] = React.useState<string | boolean | number>("");

//   const { filterVariant } = column.columnDef.meta as { filterVariant: string };

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
//     const value = e.target.value;
//     console.log(value);
//     console.log(`Handling change for ${filterVariant}: ${value}`);
//     if (filterVariant === "number") {
//       const numValue = parseInt(value, 10);
//       if (!isNaN(numValue)) {
//         console.log(numValue);
//         console.log(`Parsed number value: ${numValue}`);
//         column.setFilterValue(numValue);
//       }
//     } else if (filterVariant === "date") {
//       const date = new Date(value);
//       const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
//       column.setFilterValue(formattedDate);
//     } else if (filterVariant === "select" || filterVariant === "request-select") {
//       if (filterVariant === "select") {
//         const val = value === "true" ? true : value === "false" ? false : value;
//         column.setFilterValue(val);
//       } else {
//         column.setFilterValue(value);
//       }
//     } else if (filterVariant === "boolean") {
//       column.setFilterValue(value === "true" ? true : value === "false" ? false : undefined);
//     } else {
//       column.setFilterValue(value);
//     }
//     setInputValue(value);
//   };

//   React.useEffect(() => {
//     if (
//       filterVariant === "select" ||
//       filterVariant === "request-select" ||
//       filterVariant === "number" ||
//       filterVariant === "date" ||
//       filterVariant === "boolean"
//     ) {
//       const filterValue = column.getFilterValue();

//       if (filterVariant === "boolean") {
//         setInputValue(filterValue !== undefined ? String(filterValue) : "");
//       } else {
//         setInputValue(String(filterValue) ?? "");
//       }

//       if (filterVariant === "number") {
//         setInputValue(filterValue !== undefined ? String(filterValue) : "");
//       } else {
//         setInputValue(filterValue !== undefined ? String(filterValue) : "");
//       }
//     }
//   }, [column, filterVariant]);

//   return (
//     <>
//       {filterVariant === "request-select" ? (
//         <Select value={inputValue?.toString()} onChange={handleChange} mt={2}>
//           <option value="">All</option>
//           <option value="withdraw amount">Withdraw Amount</option>
//           <option value="cancelation package">Cancellation Package</option>
//           <option value="add amount">Add Amount</option>
//         </Select>
//       ) : filterVariant === "select" ? (
//         <Select value={inputValue?.toString()} onChange={handleChange} mt={2}>
//           <option value="">All</option>
//           <option value="true">True</option>
//           <option value="false">False</option>
//         </Select>
//       ) : filterVariant === "number" ? (
//         // <Input type="number" value={(inputValue as number) ?? ''} onChange={handleChange} placeholder="Amount" mt={2} />
//         <Input type="number" value={inputValue} onChange={handleChange} placeholder="Amount" mt={2} />
//       ) : filterVariant === "date" ? (
//         <Input type="date" value={inputValue?.toString()} onChange={handleChange} placeholder="Select Date" mt={2} />
//       ) : (
//         <Input value={inputValue?.toString()} onChange={handleChange} placeholder="Search..." mt={2} />
//       )}
//     </>
//   );
// };

// export default Filter;
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

const numericFilter: FilterFn<any> = (row, columnId, filterValue) => {
  const rowValue = row.getValue(columnId); // Get the value of the current row for the specified column
  // If the filter value is empty, return true (i.e., include the row)
  if (filterValue === undefined || filterValue === "") return true;
  // Ensure the row value is a number, and compare it with the filter value
  return rowValue !== undefined && rowValue === parseFloat(filterValue);
};

export const UserRequestsContent = () => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = React.useMemo<ColumnDef<any, any>[]>(
    () => [
      { id: "userName", accessorKey: "userName", header: "User Name", meta: { filterVariant: "text" } },
      { id: "id", accessorKey: "id", header: "ID", meta: { filterVariant: "number" }, filterFn: numericFilter },
      { id: "package", accessorKey: "package", header: "Package", meta: { filterVariant: "text" } },
      { id: "amount", accessorKey: "amount", header: "Amount $", meta: { filterVariant: "number" }, filterFn: numericFilter },
      { id: "requestDate", accessorKey: "requestDate", header: "Req/Date", meta: { filterVariant: "date" } },
      { id: "request", accessorKey: "request", header: "Request", meta: { filterVariant: "request-select" } },
      { id: "approve", accessorKey: "approve", header: "Approve", meta: { filterVariant: "select" } },
      { id: "reject", accessorKey: "reject", header: "Reject", meta: { filterVariant: "select" } },
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
        requestDate: "2/10/2024",
        request: "Withdraw amount",
        approve: true,
        reject: true,
      },
      {
        id: 2,
        userName: "USer1",
        package: "Trail",
        amount: 200,
        requestDate: "12/2/2024",
        request: "Withdraw amount",
        approve: false,
        reject: true,
      },
      {
        id: 3,
        userName: "USer1",
        package: "Trail",
        amount: 15600,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: false,
        reject: true,
      },
      {
        id: 4,
        userName: "USer1",
        package: "Trail",
        amount: 5200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: false,
        reject: true,
      },

      {
        id: 5,
        userName: "USer1",
        package: "Elite",
        amount: 89200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: true,
        reject: true,
      },
      {
        id: 6,
        userName: "USer1",
        package: "Titan",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: true,
        reject: true,
      },
      {
        id: 7,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: true,
        reject: true,
      },
      {
        id: 8,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: true,
        reject: true,
      },
      {
        id: 9,
        userName: "USer1",
        package: "package",
        amount: 8200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: true,
        reject: true,
      },
      {
        id: 10,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: true,
        reject: false,
      },
      {
        id: 11,
        userName: "USer1",
        package: "Orbit",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Add amount",
        approve: true,
        reject: false,
      },
      {
        id: 12,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "1/12/2024",
        request: "Add amount",
        approve: true,
        reject: false,
      },
      {
        id: 13,
        userName: "USer1",
        package: "Orbit",
        amount: 99900,
        requestDate: "10/2/2024",
        request: "Add amount",
        approve: true,
        reject: false,
      },
      {
        id: 14,
        userName: "USer1",
        package: "Orbit",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Cancelation package",
        approve: true,
        reject: false,
      },
      {
        id: 15,
        userName: "USer1",
        package: "Orbit",
        amount: 1200,
        requestDate: "20/8/2022",
        request: "Cancelation package",
        approve: true,
        reject: false,
      },
      {
        id: 16,
        userName: "USer18",
        package: "Orbit",
        amount: 1200,
        requestDate: "10/10/2023",
        request: "Withdraw amount",
        approve: true,
        reject: false,
      },
      {
        id: 17,
        userName: "Alika",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: true,
        reject: false,
      },
      {
        id: 18,
        userName: "Tako",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Cancelation package",
        approve: true,
        reject: false,
      },
      {
        id: 19,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/12/2024",
        request: "Cancelation package",
        approve: true,
        reject: false,
      },
      {
        id: 20,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Cancelation package",
        approve: true,
        reject: false,
      },
      {
        id: 21,
        userName: "Makho",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Cancelation package",
        approve: true,
        reject: false,
      },
      {
        id: 22,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Cancelation package",
        approve: true,
        reject: false,
      },
      {
        id: 23,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Cancelation package",
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
        approve: "Not Approve",
        reject: false,
      },
      {
        id: 25,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: "Not Approve",
        reject: false,
      },
      {
        id: 26,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Withdraw amount",
        approve: "Not Approve",
        reject: false,
      },
      {
        id: 27,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Cancelation package",
        approve: "Approve",
        reject: false,
      },
      {
        id: 28,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Add amount",
        approve: "Approve",
        reject: false,
      },
      {
        id: 29,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/2/2024",
        request: "Cancel",
        approve: "Approve",
        reject: false,
      },
      {
        id: 30,
        userName: "USer1",
        package: "package",
        amount: 1200,
        requestDate: "10/02/2024",
        request: "Withdraw Amount",
        approve: "Approve",
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
                  {header.column.getCanFilter() && <Filter column={header.column} />}
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
                    <Checkbox colorScheme="green" isChecked={cell.getValue() as boolean} />
                  ) : cell.column.id === "reject" ? (
                    <Checkbox colorScheme="red" isChecked={cell.getValue() as boolean} />
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

// Filter component
const Filter = ({ column }: { column: Column<any, unknown> }) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const { filterVariant } = column.columnDef.meta as { filterVariant: string };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;

    if (filterVariant === "number") {
      // Convert value to a number for numeric filters
      const numValue = parseFloat(value);
      column.setFilterValue(!isNaN(numValue) ? numValue : undefined);
    } else {
      // String filters
      column.setFilterValue(value);
    }
    setInputValue(value);
  };

  return (
    <>
      {filterVariant === "select" || filterVariant === "request-select" ? (
        <Select value={inputValue} onChange={handleChange}>
          <option value="">All</option>
          <option value="true">Approve</option>
          <option value="false">Reject</option>
        </Select>
      ) : (
        <Input type={filterVariant === "number" ? "number" : "text"} value={inputValue} onChange={handleChange} />
      )}
    </>
  );
};
