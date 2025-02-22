import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";

import { useUserSignupStore } from "../../../store/dashboard/user-auth";
import { FaCircle } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

import { PercentageDoughnut } from "../../../shared/ui/charts";
import { UserAvatar } from "../../../shared/user-avatar";

import { MdNotificationsNone } from "react-icons/md";
import { FaCalculator } from "react-icons/fa";
import FormSelectMultipleSearch from "../../../shared/form/form-select-multiple-search";
// import { IoCall } from "react-icons/io5";

interface Adviser {
  id?: number;
  username: string;
  advisor_group: string;
}

interface UserListContentItemProps {
  user: {
    user_id: number;
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
    // adviserData: Adviser[];
  };
  adviserData: Adviser[];
  onAssign: () => void;
}

export const UserListContentItem: React.FC<UserListContentItemProps> = ({ user, adviserData, onAssign }) => {
  const navigate = useNavigate();

  const { role_id } = useUserSignupStore();

  return (
    <Box>
      <UserAvatar full_name={user.full_name} username={user.username} src={"https://phplaravel-1309375-4888543.cloudwaysapps.com" + user.avatarUrl} />
      <Flex justify={"space-between"} align={"center"} gap={10}>
        <Flex align={"center"} gap={"8px"}>
          <Text fontSize={"14px"}>Current package</Text>
          <Button h={"30px"} bg={"#0E4534"} color={"#218B3D"} fontSize={"12px"} p={"4px"} cursor={"revert"}>
            {user.package_status}
          </Button>
        </Flex>
        <PercentageDoughnut percentage={0} />
      </Flex>
      <Flex flexDir={"column"} gap={4} fontSize={"14px"}>
        <Text fontWeight={"600"}>Package: {user.current_package}</Text>
        <List>
          <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
            <ListIcon as={FaCircle} color="#44B96B" />
            <Text>Start Time: {user.start_time}</Text>
          </ListItem>
          <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
            <ListIcon as={FaCircle} color="#C05768" />
            <Box>
              <Text>Expire Time: {user.expire_time}</Text>
              <Text>Profit/ Monthly: {user.monthly_profit}</Text>
            </Box>
          </ListItem>
          <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
            <ListIcon as={FaCircle} color="#D2C31E" />
            <Text>Last Update: {user.last_update}</Text>
          </ListItem>
        </List>
        {role_id === 2 && (
          <Flex w={"100%"} justify={"flex-end"}>
            <Button w={"fit-content"} p={0} onClick={() => navigate("../accounting")}>
              <FaCalculator />
            </Button>
          </Flex>
        )}
        <Flex justify={"space-between"} align={"center"}>
          <Flex gap={2}>
            {/* <Button bg={"#3AAB41"} p={2}>
              <IoCall />
              <Text ml={1}>Call</Text>
            </Button> */}
            {role_id === 2 && <FormSelectMultipleSearch adviserData={adviserData} />}

            {role_id === 4 && (
              <Button bg={"#f7931a"} p={2} onClick={onAssign}>
                <Text>Assign me</Text>
              </Button>
            )}
          </Flex>
          <Flex gap={2}>
            <Button bg={"#3AAB41"} p={2} onClick={() => navigate("../messages")}>
              <MdNotificationsNone />
            </Button>
            <Button bg={"#f7931a"} p={2} onClick={() => navigate("../push-notifications")}>
              <FiMessageSquare />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
