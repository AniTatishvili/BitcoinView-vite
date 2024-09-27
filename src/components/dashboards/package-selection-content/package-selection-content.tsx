import { Box, Flex, Text } from "@chakra-ui/react";
import { SliderMarkPackage } from "../../../shared/ui/slider-mark-package";
import { CurrentPackage } from "../../../shared/current-package";
import { VideoPlayer } from "../../../shared/videos";
import videoSource from "../../../assets/videos/sign_up_video_webm.webm";

import { FAQ } from "../../../shared/FAQ";

export const PackageSelectionContent = () => {
  const linksArr = [
    { link: "", text: "Deposit hasn’t arrive?" },
    { link: "", text: "Where is more information about packages?" },
    { link: "", text: "Whats is the next step after Funding?" },
    { link: "", text: "Why my package is not approve yet?" },
    { link: "", text: "How can I pay by my Credit Visa/ Master Card?" },
  ];

  return (
    <Flex w={"100%"} flexDir={"column"} gap={4}>
      <Flex w={"100%"} flexDir={{ base: "column", xl: "row" }} gap={4}>
        <Flex w={"100%"} h={"100%"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
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
        <FAQ linksArr={linksArr} />
      </Flex>
    </Flex>
  );
};
