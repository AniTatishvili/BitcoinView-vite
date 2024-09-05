import React from "react";
import { useTable, Column, TableInstance } from "react-table";

// Define the shape of your data
interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  university: string;
}

const fakeData: UserData[] = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", gender: "Male", university: "University A" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 3, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 4, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 5, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 6, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 7, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 8, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 9, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 10, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 11, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
  { id: 12, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", gender: "Female", university: "University B" },
];

export const UserRequestsContent: React.FC = () => {
  // Define the columns with appropriate types
  const columns: Column<UserData>[] = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );

  const data = React.useMemo(() => fakeData, []);

  // Use the useTable hook with type parameters
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }: TableInstance<UserData> = useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
