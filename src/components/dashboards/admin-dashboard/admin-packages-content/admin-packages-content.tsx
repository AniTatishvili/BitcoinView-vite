import { ColumnDef } from "@tanstack/react-table";
import { TanstackTable } from "../../../../shared/ui/tanstack-table";

export const AdminPackagesContent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columnDefs: ColumnDef<any>[] = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Price", accessorKey: "price" },
    { header: "Status", accessorKey: "status" },
  ];

  const data = [
    { id: 1, name: "Voyager", price: 1200, status: "Active" },
    { id: 2, name: "Voyager23", price: 7200, status: "Active" },
    { id: 3, name: "Voyager3", price: 1200, status: "Active" },
  ];
  return <TanstackTable columns={columnDefs} data={data} />;
};
