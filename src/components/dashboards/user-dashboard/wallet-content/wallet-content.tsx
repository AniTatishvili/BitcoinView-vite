import { NavLink } from "react-router-dom";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { TbCopyPlusFilled } from "react-icons/tb";
import { PButton } from "../../../../shared/ui/buttons";

export const WalletContent = () => {
  const referralLink = "https://CPa_erefff";
  const referralId = "CPa_erefff";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Flex w={"100%"} flexDir={"column"} gap={4}>
      <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"row"} justify={"space-between"} borderRadius={"8px"} p={"1rem"}>
        <Box>
          <Text>Estimated Balance</Text>
          <Box>0.00 USD</Box>
        </Box>
        <Flex flexDir={"column"} gap={4}>
          <Flex gap={4}>
            <Flex bg={"#79797D"} borderRadius={"8px"} color={"#fff"} fontWeight={"600"} px={"0.5rem"} py={"0.4rem"}>
              Silver
            </Flex>
            <Flex alignItems={"center"} bg={"#79797D"} borderRadius={"8px"} color={"#fff"} fontWeight={"600"} px={"0.5rem"} py={"0.4rem"} gap={2}>
              Account{" "}
              <Box color={"green"}>
                <MdOutlineDoneOutline />
              </Box>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} gap={2}>
            <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"}>
              <Text>Lite Referral ID</Text>
              <Flex alignItems={"center"}>
                <Text>{referralId}</Text>
                <Button bg={"none"} color={"#fff"} p={0} _hover={{ bg: "none" }} onClick={() => copyToClipboard(referralId)}>
                  <TbCopyPlusFilled />
                </Button>
              </Flex>
            </Flex>
            <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"}>
              <Text>Lite Referral Link</Text>
              <Flex alignItems={"center"}>
                <Text>{referralLink}</Text>
                <Button bg={"none"} p={0} color={"#fff"} _hover={{ bg: "none" }} onClick={() => copyToClipboard(referralLink)}>
                  <TbCopyPlusFilled />
                </Button>
              </Flex>
            </Flex>
            <PButton w={"100%"}>Invite Friends</PButton>
          </Flex>
        </Flex>
        <Flex flexDir={"row"} gap={4} color={"#fff"}>
          <NavLink to="/deposit">Deposit</NavLink>
          <NavLink to="/withdraw">Withdraw</NavLink>
          <NavLink to="/transfer">Transfer</NavLink>
        </Flex>
      </Flex>

      <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"}>
        <Text as="h3">Recent Transactions</Text>
      </Flex>
    </Flex>
  );
};
