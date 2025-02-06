import React from "react";
import axios from "axios";

import { ColumnDef } from "@tanstack/react-table";

import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TanstackTable } from "../../../../shared/ui/tanstack-table";
import { AddUserSliderContentForm } from "./add-user-slider-content-form";
import useCustomToast from "../../../../shared/hooks/useCustomToast";
import { EditEventModal } from "../../../../shared/ui/modal";
import { useAdminUpdateStore } from "../../../../store/dashboard/admin-data-update-store";

interface UserData {
  id: number;
  title: string;
  description: string;
  external_link: string;
  video_url: string;
  image_url: string;
}

export const AddUserSliderContent = () => {
  const { save_admin_add_event_id, admin_add_event_id } = useAdminUpdateStore();
  const showToast = useCustomToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columnDefs: ColumnDef<any>[] = [
    { header: "Title", accessorKey: "title" },
    { header: "Description", accessorKey: "description" },
    { header: "External link", accessorKey: "external_link" },
    { header: "Video url", accessorKey: "video_url" },
    { header: "Image url", accessorKey: "image_url" },
    {
      header: "Actions",
      id: "actions",
      cell: ({ row }) => (
        <Flex gap={2}>
          <Button size="sm" colorScheme={"green"} onClick={() => handleEdit(row.original)}>
            <FaEdit />
          </Button>
          <Button size={"sm"} colorScheme={"red"} onClick={() => handleDelete(row.original.id)}>
            <RiDeleteBin6Line />
          </Button>
        </Flex>
      ),
    },
  ];

  const [data, setData] = React.useState<UserData[]>([]);
  const [editingEvent, setEditingEvent] = React.useState<UserData | null>(null);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/all-events";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const dataArr = Object.values(response.data.data) as UserData[];
        setData(dataArr);
        save_admin_add_event_id(0);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  }, [admin_add_event_id]);

  const handleEdit = (rowData: UserData) => {
    console.log("Editing event", rowData);
    onOpen();
    setEditingEvent(rowData);
  };

  const handleDelete = (id: number) => {
    const url = `https://phplaravel-1309375-4888543.cloudwaysapps.com/api/event/${id}`;

    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
        showToast("success", response.data.message);
        console.log(response, "deleted response");
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error deleting package:", error);
      });
  };

  return (
    <>
      <TanstackTable columns={columnDefs} data={data} />
      {isOpen && editingEvent && (
        <EditEventModal onClose={onClose}>
          <AddUserSliderContentForm editingPackage={editingEvent} onClose={onClose} id={editingEvent?.id} />
        </EditEventModal>
      )}
    </>
  );
};
