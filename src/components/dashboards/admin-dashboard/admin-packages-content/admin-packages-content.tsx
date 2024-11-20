import React from "react";
import axios from "axios";

import { ColumnDef } from "@tanstack/react-table";
import { Button, Flex } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { TanstackTable } from "../../../../shared/ui/tanstack-table";
import useCustomToast from "../../../../shared/hooks/useCustomToast";
import { EditPackageModal } from "../../../../shared/ui/modal";

interface UserData {
  amount: string;
  package_name: string;
  package_status: boolean;
  purchase_id: number;
  id: number;
  sort_order_id: number;
  monthly_profit: string;
  duration_time: number;
  cancellation_fee: number;
}

export const AdminPackagesContent = () => {
  const showToast = useCustomToast();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columnDefs: ColumnDef<any>[] = [
    { header: "Package", accessorKey: "package_name" },
    { header: "Amount", accessorKey: "amount" },
    { header: "Duration time", accessorKey: "duration_time" },
    { header: "Purchase status", accessorKey: "package_status" },
    { header: "Sort order id", accessorKey: "sort_order_id" },
    { header: "Cancellation fee", accessorKey: "cancellation_fee" },
    {
      header: "Actions",
      id: "actions",
      cell: ({ row }) => (
        <Flex gap={2}>
          <Button size="sm" colorScheme={"green"} onClick={() => handleEdit(row.original)}>
            <EditPackageModal />
          </Button>
          <Button size={"sm"} colorScheme={"red"} onClick={() => handleDelete(row.original.id)}>
            <RiDeleteBin6Line />
          </Button>
        </Flex>
      ),
    },
  ];

  const [data, setData] = React.useState<UserData[]>([]);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/packages";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.packages);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleEdit = (rowData: UserData) => {
    console.log("Editing package", rowData);
  };

  const handleDelete = (id: number) => {
    console.log("Deleting package with id:", id);
    // axios
    //   .delete(`${url}/${id}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     setData((prevData) => prevData.filter((item) => item.id !== id));
    //     showToast("success", "Package deleted successfully");
    //   })
    //   .catch((error) => {
    //     showToast("error", error.response.data.message);
    //     console.error("Error deleting package:", error);
    //   });
  };

  return <TanstackTable columns={columnDefs} data={data} />;
};
