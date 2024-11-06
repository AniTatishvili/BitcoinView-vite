import React from "react";
import { Flex, Box, Checkbox } from "@chakra-ui/react";
import { useUserListFilterStore } from "../../../store/dashboard/user-list-flter-store";
import { UserListContentItem } from "./user-list-content-item";
import { UserListFilter } from "./user-list-filter";
import { UserListItemLists } from "./user-list-item-lists";

export const UserListContent = () => {
  const { user_list_filter_id } = useUserListFilterStore();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedPackage, setSelectedPackage] = React.useState("");
  const [checkedItems, setCheckedItems] = React.useState<string[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const data = [
    {
      full_name: "Maka Areshidze",
      username: "Maka34",
      current_package: "Active",
      payment_package: "Voyager",
      start_time: "12/10/2024",
      expire_time: "12/12/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
    {
      full_name: "Nawka Areshidze",
      username: "Maka34",
      current_package: "Deactive",
      payment_package: "Voyager",
      start_time: "2/05/2024",
      expire_time: "12/08/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
    {
      full_name: "Mariami Kakashvili",
      username: "Mariami4",
      current_package: "Active",
      payment_package: "Titan",
      start_time: "12/05/2024",
      expire_time: "12/05/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
    {
      full_name: "Tazo Aslanikashvili",
      username: "Tazo",
      current_package: "Active",
      payment_package: "Orbit",
      start_time: "12/05/2024",
      expire_time: "12/05/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
    {
      full_name: "Tika Areshidze",
      username: "Tika34",
      current_package: "Process",
      payment_package: "Nexus",
      start_time: "15/05/2024",
      expire_time: "12/05/2024",
      monthly_profit: "2%",
      last_update: "12/05/2024",
    },
  ];

  const filteredData = data.filter((item) => {
    const searchMatch =
      item.start_time.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.expire_time.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.full_name.toLowerCase().includes(searchTerm.toLowerCase());

    const packageMatch = selectedPackage === "" || selectedPackage === "All" || item.payment_package === selectedPackage;

    return searchMatch && packageMatch;
  });

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchTerm("");
  }, [selectedPackage]);

  return (
    <Flex flexDir={"column"} gap={4}>
      <UserListFilter checkedItems={checkedItems} onSearch={setSearchTerm} onSelectChange={setSelectedPackage} inputRef={inputRef} />
      <Flex w={"100%"} flexDir={{ base: "column", lg: "row" }} flexWrap={"wrap"} gap={4}>
        {filteredData.length > 0 ? (
          filteredData.map((item, i) => (
            <Box
              key={i}
              w={{ base: "100%", lg: user_list_filter_id === 1 ? "45%" : "100%", xl: user_list_filter_id === 1 ? "30%" : "100%" }}
              backgroundColor={"#1F2027"}
              borderRadius={"8px"}
              p={"1rem"}>
              <Checkbox
                colorScheme={"green"}
                onChange={(event) => {
                  const isChecked = event.target.checked;
                  const itemKey = item.username;
                  setCheckedItems((prevCheckedItems) => {
                    if (isChecked) {
                      return [...prevCheckedItems, itemKey];
                    } else {
                      return prevCheckedItems.filter((checkedItem) => checkedItem !== itemKey);
                    }
                  });
                }}
              />
              {user_list_filter_id === 1 ? (
                <UserListContentItem
                  full_name={item.full_name}
                  username={item.username}
                  current_package={item.current_package}
                  payment_package={item.payment_package}
                  start_time={item.start_time}
                  expire_time={item.expire_time}
                  monthly_profit={item.monthly_profit}
                  last_update={item.last_update}
                />
              ) : (
                <UserListItemLists
                  full_name={item.full_name}
                  username={item.username}
                  current_package={item.current_package}
                  payment_package={item.payment_package}
                  start_time={item.start_time}
                  expire_time={item.expire_time}
                  monthly_profit={item.monthly_profit}
                  last_update={item.last_update}
                />
              )}
            </Box>
          ))
        ) : (
          <Flex w={"100%"} justify={"center"} py={10}>
            Result 0
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
