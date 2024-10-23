import { Box, Flex, Text } from "@chakra-ui/react";
import { SliderMarkPackage } from "../../../shared/ui/slider-mark-package";
import { CurrentPackage } from "../../../shared/current-package";
import { VideoPlayer } from "../../../shared/videos";
import videoSource from "../../../assets/videos/sign_up_video_webm.webm";

import { FAQ } from "../../../shared/FAQ";

export const PackageSelectionContent = () => {
  const linksArr = [
    { link: "https://bitcoinview.org/faq/how-to-deposit-by-crypto-step-by-step-guide/", text: "How to Deposit by Crypto Step-by-step Guide?" },
    { link: "https://bitcoinview.org/faq/deposit-hasnt-arrived/", text: "Deposit hasn’t arrived?" },
    { link: "https://bitcoinview.org/faq/where-is-more-information-about-packages/", text: "Where is more information about packages?" },
    { link: "https://bitcoinview.org/faq/whats-the-next-step-after-funding/", text: "What's is the next step after Funding?" },
    { link: "https://bitcoinview.org/faq/why-my-package-is-not-approved-yet/", text: "Why my package is not approve yet?" },
    { link: "https://bitcoinview.org/faq/how-can-i-pay-by-my-credit-visa-master-card/", text: "How can I pay by my Credit Visa/ Master Card?" },
  ];

  return (
    <Flex w={"100%"} flexDir={"column"} gap={4}>
      <Flex w={"100%"} flexDir={{ base: "column", xl: "row" }} gap={4}>
        <Flex w={"100%"} h={"100%"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
          <SliderMarkPackage />
        </Flex>
        <Flex w={"100%"} h={"100%"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
          <CurrentPackage />
        </Flex>
      </Flex>
      <Flex flexDir={"column"} gap={3}>
        <Flex flexDir={"column"} gap={2}>
          <Text>FAQ</Text>
          <Box w={"130px"} h={"72px"} borderRadius={"8px"} overflow={"hidden"}>
            <VideoPlayer videoSource={videoSource} />
          </Box>
        </Flex>
        <FAQ linksArr={linksArr} />
      </Flex>
    </Flex>
  );
};
