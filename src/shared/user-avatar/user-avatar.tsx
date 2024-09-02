import { Avatar, Flex } from "@chakra-ui/react";

interface UserAvatarProps {
  full_name: string;
  username: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ full_name, username }) => {
  console.log(full_name);
  return (
    <Flex gap={3}>
      <Avatar
        name={full_name}
        src="https://bit.ly/tioluwani-kolawole"
        w={"40px"}
        h={"40px"}
        backgroundColor={"#79797D"}
        color={"#141316"}
        borderRadius={"50%"}
      />

      <Flex w={"130px"} flexDir={"column"} lineHeight={1} gap={1}>
        <Flex color={"#fff"} fontSize={"16px"}>
          {full_name}
        </Flex>
        <Flex color={"#ccc"} fontSize={"14px"}>
          {username}
        </Flex>
      </Flex>
    </Flex>
  );
};
