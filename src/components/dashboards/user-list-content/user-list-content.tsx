import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useUserListFilterStore } from "../../../store/dashboard/user-list-flter-store";
import { UserListContentItem } from "./user-list-content-item";
import { UserListFilter } from "./user-list-filter";
import { UserListItemLists } from "./user-list-item-lists";

export const UserListContent = () => {
  const { user_list_filter_id } = useUserListFilterStore();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedPackage, setSelectedPackage] = React.useState("");

  const data = [
    {
      current_package: "Active",
      payment_package: "Voyager",
      start_time: "12/05/2024",
      expire_time: "12/05/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
    {
      current_package: "Deactive",
      payment_package: "Voyager",
      start_time: "12/05/2024",
      expire_time: "12/05/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
    {
      current_package: "Active",
      payment_package: "Titan",
      start_time: "12/05/2024",
      expire_time: "12/05/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
    {
      current_package: "Active",
      payment_package: "Orbit",
      start_time: "12/05/2024",
      expire_time: "12/05/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
    {
      current_package: "Process",
      payment_package: "Nexus",
      start_time: "12/05/2024",
      expire_time: "12/05/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
  ];

  const filteredData = data.filter((item) => {
    return item.current_package.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedPackage === "" || item.payment_package === selectedPackage);
  });

  return (
    <Flex flexDir={"column"} gap={4}>
      <UserListFilter onSearch={setSearchTerm} onSelectChange={setSelectedPackage} />
      <Flex w={"100%"} flexDir={{ base: "column", lg: "row" }} flexWrap={"wrap"} gap={4}>
        {filteredData.map((item, i) => (
          <Box
            key={i}
            w={{ base: "100%", lg: user_list_filter_id === 1 ? "45%" : "100%", xl: user_list_filter_id === 1 ? "30%" : "100%" }}
            backgroundColor={"#1F2027"}
            borderRadius={"8px"}
            p={"1rem"}>
            {user_list_filter_id === 1 ? (
              <UserListContentItem
                current_package={item.current_package}
                payment_package={item.payment_package}
                start_time={item.start_time}
                expire_time={item.expire_time}
                monthly_profit={item.monthly_profit}
                last_update={item.last_update}
              />
            ) : (
              <UserListItemLists
                current_package={item.current_package}
                payment_package={item.payment_package}
                start_time={item.start_time}
                expire_time={item.expire_time}
                monthly_profit={item.monthly_profit}
                last_update={item.last_update}
              />
            )}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
