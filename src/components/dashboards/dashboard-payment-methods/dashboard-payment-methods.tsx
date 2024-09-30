import { Flex, Text, Button } from "@chakra-ui/react";
import { TbCopyPlusFilled } from "react-icons/tb";
import { PaymentMethodModal } from "../../../shared/ui/modal";

export const DashboardPaymentMethods = () => {
  const referralLink = "https://CPa_erefff";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Flex flexDir={"column"} gap={4}>
      <Text as="h3">Pay by Crypto Coin</Text>
      <Flex flexDir={"column"}>
        <Text>Bitcoin BTC</Text>
        <PaymentMethodModal />
        <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"}>
          <Text>{referralLink}</Text>
          <Button h={"fit-content"} bg={"none"} color={"#fff"} p={0} _hover={{ bg: "none" }} onClick={() => copyToClipboard(referralLink)}>
            <TbCopyPlusFilled />
          </Button>
        </Flex>
      </Flex>
      <Flex flexDir={"column"}>
        <Text>USTD TRC20</Text>
        <PaymentMethodModal />
        <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"}>
          <Text>{referralLink}</Text>
          <Button h={"fit-content"} bg={"none"} color={"#fff"} p={0} _hover={{ bg: "none" }} onClick={() => copyToClipboard(referralLink)}>
            <TbCopyPlusFilled />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
