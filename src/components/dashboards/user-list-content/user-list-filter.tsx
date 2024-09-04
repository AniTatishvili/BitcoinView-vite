import React from "react";
import { Flex, Input, List, ListItem } from "@chakra-ui/react";
import { MdViewList } from "react-icons/md";
import { PiGridFourFill } from "react-icons/pi";
import { useUserListFilterStore } from "../../../store/dashboard/user-list-flter-store";
import { PackageFilter } from "../../../shared/package-filter";

interface UserListFilterProps {
  onSearch: (value: string) => void;
  onSelectChange: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export const UserListFilter: React.FC<UserListFilterProps> = ({ onSearch, onSelectChange, inputRef }) => {
  const { save_user_filer_id } = useUserListFilterStore();
  const [isActive, setIsActive] = React.useState<number>(1);

  const handleClick = (indx: number) => {
    setIsActive(indx);
    save_user_filer_id(indx);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
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
      </List>
    </Flex>
  );
};
