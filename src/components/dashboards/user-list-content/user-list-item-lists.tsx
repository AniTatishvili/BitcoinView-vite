import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";

import { FaCircle } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { UserAvatar } from "../../../shared/user-avatar";
import { PercentageDoughnut } from "../../../shared/ui/charts";

interface Adviser {
  id?: number;
  username: string;
}

interface UserListContentItemProps {
  full_name: string;
  avatarUrl: string;
  username: string;
  package_status: string;
  current_package: string;
  payment_package: string;
  start_time: string;
  expire_time: string;
  monthly_profit: string;
  last_update: string;
  adviserData: Adviser[];
}

export const UserListItemLists: React.FC<UserListContentItemProps> = ({
  full_name,
  avatarUrl,
  username,
  package_status,
  current_package,
  payment_package,
  start_time,
  expire_time,
  monthly_profit,
  last_update,
  adviserData,
}) => {
  const navigate = useNavigate();

  return (
    <Flex
      w={"100%"}
      overflowX={"scroll"}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#f7931a",
          borderRadius: "24px",
        },
      }}>
      <Flex w={"fit-content"} gap={4}>
        <UserAvatar full_name={full_name} username={username} />
        <Flex justify={"space-between"} gap={4}>
          <Flex w={"125px"} justify={"space-between"} gap={"8px"}>
            <Text>{payment_package}</Text>
            <Button h={"30px"} bg={"#0E4534"} color={"#218B3D"} fontSize={"12px"} p={"4px"} cursor={"revert"}>
              {package_status}
            </Button>
          </Flex>
          <PercentageDoughnut percentage={0} />
        </Flex>
        <Flex gap={4}>
          <Text fontSize={"14px"} fontWeight={"600"}>
            Package: {current_package}
          </Text>
          <List display={"flex"} fontSize={"14px"} gap={4}>
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
          <Flex justify={"flex-end"} gap={2}>
            <Button bg={"#3AAB41"} p={2} onClick={() => navigate("../messages")}>
              <MdNotificationsNone />
            </Button>
            <Button bg={"#f7931a"} p={2} onClick={() => navigate("../push-notifications")}>
              <FiMessageSquare />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
