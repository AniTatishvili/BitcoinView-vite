import { Avatar, Box, Flex } from "@chakra-ui/react";

interface UserAvatarProps {
  full_name: string;
  username: string;
  src?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ full_name, username, src }) => {
  return (
    <Flex gap={{ base: 2, sm: 3 }}>
      <Avatar src={src} w={{ base: "30px", md: "40px" }} h={{ base: "30px", md: "40px" }} backgroundColor={"#79797D"} color={"#141316"} borderRadius={"50%"} />

      <Flex flexDir={"column"} lineHeight={1} gap={1}>
        <Box
          maxW={"120px"}
          display={full_name.length > 1 ? "inline-block" : "none"}
          color={"#fff"}
          fontSize={{ base: "12px", sm: "16px" }}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}>
          {full_name}
        </Box>
        <Flex justify={{ base: "end", sm: "start" }} color={"#ccc"} fontSize={{ base: "11px", md: "14px" }}>
          {username}
        </Flex>
      </Flex>
    </Flex>
  );
};
