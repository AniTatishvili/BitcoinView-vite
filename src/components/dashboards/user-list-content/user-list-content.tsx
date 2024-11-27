import React from "react";
import axios from "axios";

import { Flex, Box, Checkbox } from "@chakra-ui/react";
import { useUserListFilterStore } from "../../../store/dashboard/user-list-flter-store";
import { UserListContentItem } from "./user-list-content-item";
import { UserListFilter } from "./user-list-filter";
import { UserListItemLists } from "./user-list-item-lists";

interface PackageInfo {
  monthly_profit: string;
  amount: string;
}

interface Purchase {
  start_time: string;
  expire_time: string;
  package_id: number;
  package_info: PackageInfo;
}

interface User {
  id: number;
  user_id: number;
  first_name: string;
  avatarUrl: string;
  last_name: string;
  username: string;
  adviser: string | null;
  adviser_username: string;
  avatar: string;
  purchase: Purchase;
  full_name: string;
  package_status: string;
  current_package: string;
  payment_package: string;
  start_time: string;
  expire_time: string;
  monthly_profit: string;
  last_update: string;
}

export const UserListContent = () => {
  const { user_list_filter_id } = useUserListFilterStore();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedPackage, setSelectedPackage] = React.useState("");
  const [checkedItems, setCheckedItems] = React.useState<number[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [adviserData, setAdviserData] = React.useState<any>([]);
  const [data, setData] = React.useState<User[]>([]);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const filteredData = data.filter((item) => {
    const searchMatch =
      (item.start_time && item.start_time.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.expire_time && item.expire_time.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.full_name && item.full_name.toLowerCase().includes(searchTerm.toLowerCase()));

    const packageMatch = selectedPackage === "" || selectedPackage === "All" || item.payment_package === selectedPackage;

    return searchMatch && packageMatch;
  });

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchTerm("");
  }, [selectedPackage]);

  React.useEffect(() => {
    const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/get-adviser-usernames";

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAdviserData(response.data.advisers);
        // console.log("Adviser dashboard info:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  React.useEffect(() => {
    const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/dashboard_users";

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const usersWithPurchases = response.data?.map((user: any) => {
            const packageInfo = user.purchase?.package_info || {};

            return {
              ...user,
              full_name: `${user.first_name} ${user.last_name}`.trim(),
              avatarUrl: user.avatar,
              package_status: user.purchase?.package_status || null,
              current_package: user.purchase?.package_name || null,
              payment_package: user.purchase?.package_id || null,
              start_time: user.purchase?.start_time || null,
              expire_time: user.purchase?.expire_time || null,
              monthly_profit: packageInfo.monthly_profit || null,
              last_update: new Date().toLocaleDateString(),
            };
          });

          setData(usersWithPurchases);
        }
        // console.log("Adviser dashboard info:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <Flex flexDir={"column"} gap={4}>
      <UserListFilter checkedItems={checkedItems} onSearch={setSearchTerm} onSelectChange={setSelectedPackage} inputRef={inputRef} adviserData={adviserData} />
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
                  const itemKey = item.user_id;
                  console.log(itemKey, isChecked);
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
                  avatarUrl={item.avatarUrl}
                  username={item.username}
                  package_status={item.package_status}
                  current_package={item.current_package}
                  payment_package={"Current Package"}
                  start_time={item.start_time}
                  expire_time={item.expire_time}
                  monthly_profit={item.monthly_profit}
                  last_update={item.last_update}
                  adviserData={adviserData}
                />
              ) : (
                <UserListItemLists
                  full_name={item.full_name}
                  avatarUrl={item.avatarUrl}
                  username={item.username}
                  package_status={item.package_status}
                  current_package={item.current_package}
                  payment_package={"Current Package"}
                  start_time={item.start_time}
                  expire_time={item.expire_time}
                  monthly_profit={item.monthly_profit}
                  last_update={item.last_update}
                  adviserData={adviserData}
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
