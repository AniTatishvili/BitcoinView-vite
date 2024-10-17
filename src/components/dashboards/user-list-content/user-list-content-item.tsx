import { Box, Button, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";

import { FaCircle } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

import { PercentageDoughnut } from "../../../shared/ui/charts";
import { UserAvatar } from "../../../shared/user-avatar";

import { MdNotificationsNone } from "react-icons/md";

interface UserListContentItemProps {
  full_name: string;
  username: string;
  current_package: string;
  payment_package: string;
  start_time: string;
  expire_time: string;
  monthly_profit: string;
  last_update: string;
}

export const UserListContentItem: React.FC<UserListContentItemProps> = ({
  full_name,
  username,
  current_package,
  payment_package,
  start_time,
  expire_time,
  monthly_profit,
  last_update,
}) => {
  return (
    <Box>
      <UserAvatar full_name={full_name} username={username} />
      <Flex justify={"space-between"} align={"center"} gap={10}>
        <Flex align={"center"} gap={"8px"}>
          <Text fontSize={"14px"}>{payment_package}</Text>
          <Button h={"30px"} bg={"#0E4534"} color={"#218B3D"} fontSize={"12px"} p={"4px"} cursor={"revert"}>
            {current_package}
          </Button>
        </Flex>
        <PercentageDoughnut percentage={0} />
      </Flex>
      <Flex flexDir={"column"} gap={4} fontSize={"14px"}>
        <Text fontWeight={"600"}>Package: Voyager</Text>
        <List>
          <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
            <ListIcon as={FaCircle} color="#44B96B" />
            <Text>Start Time: {start_time}</Text>
          </ListItem>
          <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
            <ListIcon as={FaCircle} color="#C05768" />
            <Box>
              <Text>Expire Time: {expire_time}</Text>
              <Text>Profit/ Monthly: {monthly_profit}</Text>
            </Box>
          </ListItem>
          <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
            <ListIcon as={FaCircle} color="#D2C31E" />
            <Text>Last Update: {last_update}</Text>
          </ListItem>
        </List>
        <Flex justify={"flex-end"} gap={2}>
          <Button bg={"#3AAB41"} p={2}>
            <MdNotificationsNone />
          </Button>
          <Button bg={"#f7931a"} p={2}>
            <FiMessageSquare />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
