import React from "react";
import { Button, Flex, Input, List, ListItem, Select, Text } from "@chakra-ui/react";
import { MdViewList } from "react-icons/md";
import { PiGridFourFill } from "react-icons/pi";
// import { CgMathPlus } from "react-icons/cg";
import { CgPlayListCheck } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useUserListFilterStore } from "../../../store/dashboard/user-list-flter-store";
import { PackageFilter } from "../../../shared/package-filter";

interface UserListFilterProps {
  onSearch: (value: string) => void;
  onSelectChange: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  checkedItems: string[];
  adviserData: string[];
}

export const UserListFilter: React.FC<UserListFilterProps> = ({ onSearch, onSelectChange, inputRef, checkedItems, adviserData }) => {
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
        {/* <ListItem color={isActive === 2 ? "#f7931a" : "#fff"} cursor={"pointer"} onClick={() => handleClick(2)}>
          <CgMathPlus />
        </ListItem> */}
      </List>
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
        <Select>
          <option value="Advisers" disabled>
            Advisers
          </option>
          {adviserData?.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
};
