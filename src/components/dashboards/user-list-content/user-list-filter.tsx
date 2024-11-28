import React from "react";
import axios from "axios";

import { Button, Flex, Input, List, ListItem, Select, Text } from "@chakra-ui/react";
import { MdViewList } from "react-icons/md";
import { PiGridFourFill } from "react-icons/pi";
// import { CgMathPlus } from "react-icons/cg";
import { CgPlayListCheck } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useUserListFilterStore } from "../../../store/dashboard/user-list-flter-store";
import { PackageFilter } from "../../../shared/package-filter";
import useCustomToast from "../../../shared/hooks/useCustomToast";

interface Adviser {
  id: number;
  username: string;
  advisor_group?: string; // If this property exists
}

interface UserListFilterProps {
  onSearch: (value: string) => void;
  onSelectChange: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  checkedItems: number[];
  adviserData: Adviser[];
}

export const UserListFilter: React.FC<UserListFilterProps> = ({ onSearch, onSelectChange, inputRef, checkedItems, adviserData }) => {
  const showToast = useCustomToast();

  const { save_user_filer_id } = useUserListFilterStore();
  const [isActive, setIsActive] = React.useState<number>(1);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/assign-to-advisor";

  const handleClick = (indx: number) => {
    setIsActive(indx);
    save_user_filer_id(indx);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onAdviserChange = (e: any) => {
    const checkedAdvisers = {
      user_ids: checkedItems,
      advisor_id: Number(e.target.value),
    };

    axios
      .post(url, checkedAdvisers, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response, "response");
        showToast("success", "Event added successfully");
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error deleting event:", error);
      });
  };

  return (
    <Flex flexDir={{ base: "column", lg: "row" }} alignItems={{ base: "start", lg: "center" }} gap={4}>
      <Input type="text" placeholder="Search..." w={"100%"} maxW={{ base: "100%", lg: "380px" }} ref={inputRef} onChange={handleSearchChange} />
      <PackageFilter onChange={onSelectChange} />
      <List display={"flex"} gap={2} fontSize={"28px"}>
        <ListItem color={isActive === 1 ? "#f7931a" : "#fff"} cursor={"pointer"} onClick={() => handleClick(1)}>
          <PiGridFourFill />
        </ListItem>
        <ListItem color={isActive === 2 ? "#f7931a" : "#fff"} cursor={"pointer"} onClick={() => handleClick(2)}>
          <MdViewList />
        </ListItem>
        {/* <ListItem color={isActive === 2 ? "#f7931a" : "#fff"} cursor={"pointer"} onClick={() => handleClick(2)}>
          <CgMathPlus />
        </ListItem> */}
      </List>
      {checkedItems.length > 0 && (
        <Flex bg={"#1F2027"} align={"center"} gap={4} borderRadius={"8px"} ps={3} pe={1} py={1}>
          <Button w={"fit-content"} bg={"none"} fontSize={"24px"} _hover={{ bg: "none" }} p={0}>
            <IoClose />
          </Button>
          <Flex whiteSpace={"nowrap"} gap={1}>
            <Text>{checkedItems.length}</Text>
            <Text>Selected</Text>
          </Flex>
          <Text fontSize={"28px"}>
            <CgPlayListCheck />
          </Text>
          <Select onChange={onAdviserChange}>
            <option value="Advisers">Advisers</option>
            {adviserData?.map((item, i) => (
              <option value={item.id} key={i}>
                {item.username} ({item.advisor_group})
              </option>
            ))}
          </Select>
        </Flex>
      )}
    </Flex>
  );
};
