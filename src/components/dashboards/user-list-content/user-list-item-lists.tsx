import { Box, Button, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";

import { FaCircle } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { UserAvatar } from "../../../shared/user-avatar";
import { PercentageDoughnut } from "../../../shared/ui/charts";

interface UserListContentItemProps {
  current_package: string;
  payment_package: string;
  start_time: string;
  expire_time: string;
  monthly_profit: string;
  last_update: string;
}

export const UserListItemLists: React.FC<UserListContentItemProps> = ({
  current_package,
  payment_package,
  start_time,
  expire_time,
  monthly_profit,
  last_update,
}) => {
  const full_name = "Maka Areshidze";
  const username = "Maka78";

  return (
    <Flex w={"100%"} overflowX={"scroll"}>
      <Flex w={"fit-content"} gap={4}>
        <UserAvatar full_name={full_name} username={username} />

        <Flex justify={"space-between"} gap={10}>
          <Flex w={"125px"} justify={"space-between"} gap={"8px"}>
            <Text>{payment_package}</Text>
            <Button h={"30px"} bg={"#0E4534"} color={"#218B3D"} p={"4px"} cursor={"revert"}>
              {current_package}
            </Button>
          </Flex>
          <PercentageDoughnut />
        </Flex>
        <Flex gap={4}>
          <Text fontWeight={"600"}>Package: Voyager</Text>
          <List display={"flex"}>
            <ListItem display={"flex"} flexDir={"row"} whiteSpace={"nowrap"}>
              <ListIcon as={FaCircle} color="#44B96B" />
              <Text>Start Time: {start_time}</Text>
            </ListItem>
            <ListItem display={"flex"} flexDir={"row"} whiteSpace={"nowrap"}>
              <ListIcon as={FaCircle} color="#C05768" />
              <Box>
                <Text>Expire Time: {expire_time}</Text>
                <Text>Profit/ Monthly: {monthly_profit}</Text>
              </Box>
            </ListItem>
            <ListItem display={"flex"} flexDir={"row"} whiteSpace={"nowrap"}>
              <ListIcon as={FaCircle} color="#D2C31E" />
              <Text>Last Update: {last_update}</Text>
            </ListItem>
          </List>
          <Flex justify={"flex-end"} gap={4}>
            <Button bg={"#3AAB41"}>
              <MdNotificationsNone />
            </Button>
            <Button bg={"#f7931a"}>
              <FiMessageSquare />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
