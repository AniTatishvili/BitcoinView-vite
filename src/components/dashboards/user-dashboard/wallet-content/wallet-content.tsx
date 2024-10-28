import React from "react";

import { Link } from "react-router-dom";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { TbCopyPlusFilled } from "react-icons/tb";
import { PButton } from "../../../../shared/ui/buttons";
import { MoneyTransferDetailsTable } from "../../../../pages/dashboards/user-dashboard/money-transfer-details-table";
import useUserBalance from "../../../../shared/hooks/useUserBalance";
import { useUserPackageNameStore } from "../../../../store/dashboard/user-package-name-store";
import { useUserSignupStore } from "../../../../store/dashboard/user-auth";
import useCustomToast from "../../../../shared/hooks/useCustomToast";

export const WalletContent = () => {
  const showToast = useCustomToast();
  const { active_package_name, referral_code } = useUserSignupStore();
  const { userBalance, estimatedBalance } = useUserBalance();
  const { userPackageNameData } = useUserPackageNameStore();
  const [referralLink, setReferralLink] = React.useState<string>("");

  const params = new URLSearchParams(window.location.search);
  params.set("referralLink", referralLink);
  const referralUrl = `${window.location.origin}${"/app/signup"}?${params.toString()}`;

  React.useEffect(() => {
    if (referral_code) {
      setReferralLink(referral_code);
    }
  }, [referral_code]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast("success", "Copied to clipboard!");
      // console.log("Copied to clipboard!");
    } catch (err) {
      showToast("error", "Failed to copy");
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Flex w={"100%"} flexDir={"column"} gap={4}>
      <Flex
        w={"100%"}
        h={"fit-content"}
        backgroundColor={"#1F2027"}
        flexDir={{ base: "column", lg: "row" }}
        justify={"space-between"}
        gap={4}
        borderRadius={"8px"}
        p={"1rem"}>
        <Flex flexDir={"column"} gap={8}>
          <Box>
            <Text>Estimated Balance</Text>
            <Box>{"$" + " " + estimatedBalance}</Box>
          </Box>
          <Box>
            <Text>Current Balance</Text>
            <Box color={"#6bd98f"}>{"$" + " " + userBalance}</Box>
          </Box>
        </Flex>
        <Flex maxW={"312px"} flexDir={"column"} gap={4}>
          <Flex gap={4}>
            <Flex bg={"#79797D"} borderRadius={"8px"} color={"#fff"} fontWeight={"600"} px={"0.5rem"} py={"0.4rem"}>
              {userPackageNameData.package_name === "" ? active_package_name : Object.values(userPackageNameData)}
            </Flex>
            <Flex alignItems={"center"} bg={"#79797D"} borderRadius={"8px"} color={"#fff"} fontWeight={"600"} px={"0.5rem"} py={"0.4rem"} gap={2}>
              Account{" "}
              <Box color={"green"}>
                <MdOutlineDoneOutline />
              </Box>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} gap={2}>
            <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"} gap={2}>
              <Text>Lite Referral ID</Text>
              <Flex alignItems={"center"}>
                <Text maxW={"120px"} display={"inline-block"} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>
                  {referralLink}
                </Text>
                <Button bg={"none"} color={"#fff"} p={0} _hover={{ bg: "none" }} onClick={() => copyToClipboard(referralLink)}>
                  <TbCopyPlusFilled />
                </Button>
              </Flex>
            </Flex>
            <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"} gap={2}>
              <Text>Lite Referral Link</Text>
              <Flex alignItems={"center"}>
                <Text maxW={"120px"} display={"inline-block"} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>
                  {referralUrl}
                </Text>
                <Button bg={"none"} p={0} color={"#fff"} _hover={{ bg: "none" }} onClick={() => copyToClipboard(referralUrl)}>
                  <TbCopyPlusFilled />
                </Button>
              </Flex>
            </Flex>
            <PButton w={"100%"}>Invite Friends</PButton>
          </Flex>
        </Flex>
        <Flex h={"fit-content"} flexDir={"row"} gap={4} color={"#fff"}>
          <Link to="/user-dashboard/deposit">Deposit</Link>
          <Link to="/user-dashboard/withdraw">Withdraw</Link>
        </Flex>
      </Flex>

      <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
        <Text as="h3">Recent Transactions</Text>
        <MoneyTransferDetailsTable />
      </Flex>
    </Flex>
  );
};
