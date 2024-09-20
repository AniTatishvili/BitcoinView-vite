import { Avatar, Box, Flex } from "@chakra-ui/react";

interface UserAvatarProps {
  full_name: string;
  username: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ full_name, username }) => {
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

      <Flex flexDir={"column"} lineHeight={1} gap={1}>
        <Box maxW={"120px"} display={"inline-block"} color={"#fff"} fontSize={"16px"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
          {full_name}
        </Box>
        <Flex color={"#ccc"} fontSize={"14px"}>
          {username}
        </Flex>
      </Flex>
    </Flex>
  );
};
