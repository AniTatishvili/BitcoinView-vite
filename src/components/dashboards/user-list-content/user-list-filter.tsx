import React from "react";
import { Flex, Input, List, ListItem } from "@chakra-ui/react";
import { MdViewList } from "react-icons/md";
import { PiGridFourFill } from "react-icons/pi";
import { useUserListFilterStore } from "../../../store/dashboard/user-list-flter-store";
import { PackageFilter } from "../../../shared/package-filter";

export const UserListFilter = () => {
  const { save_user_filer_id } = useUserListFilterStore();
  const [isActive, setIsActive] = React.useState<number | 1>(1);

  const handleClick = (indx: number) => {
    console.log(11);
    setIsActive(indx);
    save_user_filer_id(indx);
  };

  return (
    <Flex alignItems={"center"} gap={4}>
      <Input type="text" placeholder="Search..." w={"100%"} maxW={"380px"} />
      <PackageFilter />
      <List display={"flex"} gap={2} fontSize={"28px"}>
        <ListItem color={isActive === 1 ? "#f7931a" : "#fff"} cursor={"pointer"} onClick={() => handleClick(1)}>
          <PiGridFourFill />
        </ListItem>
        <ListItem color={isActive === 2 ? "#f7931a" : "#fff"} cursor={"pointer"} onClick={() => handleClick(2)}>
          <MdViewList />
        </ListItem>
      </List>
    </Flex>
  );
};
