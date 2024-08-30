import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { SliderMarkPackage } from "../../../shared/ui/slider-mark-package";
import { CurrentPackage } from "../../../shared/current-package";
import { VideoPlayer } from "../../../shared/videos";
import videoSource from "../../../assets/videos/sign_up_video_webm.webm";
import { NavLink } from "react-router-dom";

export const PackageSelectionContent = () => {
  return (
    <Flex w={"100%"} flexDir={"column"} gap={4}>
      <Flex w={"100%"} flexDir={{ base: "column", xl: "row" }} gap={4}>
        <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
          <SliderMarkPackage />
        </Flex>
        <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
          <CurrentPackage />
        </Flex>
      </Flex>
      <Flex flexDir={"column"} gap={3}>
        <Flex flexDir={"column"} gap={2}>
          <Text>FAQ</Text>
          <Box w={"130px"} h={"72px"} borderRadius={"8px"} overflow={"hidden"}>
            <VideoPlayer videoSource={videoSource} />
          </Box>
          <Text>How to Deposit by Crypto Step-by-step Guide</Text>
        </Flex>
        <List display={"flex"} flexDir={"column"} gap={1}>
          <ListItem>
            <NavLink to="/">Deposit hasn’t arrive?</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">Where is more information about packages?</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">Whats is the next step after Funding?</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">Why my package is not approve yet?</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">How can I pay by my Credit Visa/ Master Card?</NavLink>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};
