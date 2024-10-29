import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { TbCopyPlusFilled } from "react-icons/tb";
// import { PButton } from "../../../shared/ui/buttons";
import { useUserPackageNameStore } from "../../../store/dashboard/user-package-name-store";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";
import useCustomToast from "../../../shared/hooks/useCustomToast";

export const UserDashboardPayments = () => {
  const showToast = useCustomToast();
  const { userPackageNameData } = useUserPackageNameStore();
  const { active_package_name, advisor_username, referral_code } = useUserSignupStore();

  const [referralLink, setReferralLink] = React.useState<string>("");

  const params = new URLSearchParams(window.location.search);
  params.set("referralLink", referralLink);
  const referralUrl = `${window.location.origin}${"/app/signup"}?${params.toString()}`;

  React.useEffect(() => {
    if (referral_code) {
      setReferralLink(referral_code);
    }
  }, [referral_code]);

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
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"} gap={4}>
      <Flex flexDir={"row"} alignItems={"center"} gap={4} color={"#fff"}>
        <NavLink to="/user-dashboard/deposit">Deposit</NavLink>
        <NavLink to="/user-dashboard/withdraw">Withdraw</NavLink>
      </Flex>
      <Flex flexDir={"column"} gap={4}>
        <Flex gap={4}>
          <Flex bg={"#79797D"} alignItems={"center"} borderRadius={"8px"} color={"#fff"} fontWeight={"600"} px={"0.5rem"} py={"0.4rem"}>
            <Link to="/user-dashboard/package-selection">
              {userPackageNameData.package_name === "" ? active_package_name : Object.values(userPackageNameData)}
            </Link>
            {/* <Link to="/user-dashboard/package-selection">{userPackageNameData.package_name === "" ? packageName : Object.values(userPackageNameData)}</Link> */}
          </Flex>
          <Flex alignItems={"center"} bg={"#79797D"} borderRadius={"8px"} color={"#fff"} fontWeight={"600"} px={"0.5rem"} py={"0.4rem"} gap={2}>
            Account{" "}
            <Box color={"green"}>
              <MdOutlineDoneOutline />
            </Box>
          </Flex>
          {advisor_username && (
            <Flex flexDir={"column"}>
              <Text fontSize={{ base: "11px", sm: "14px" }} fontWeight={600}>
                Advisor:
              </Text>
              <Text color={"#4caf50"} fontSize={{ base: "12px", sm: "16px" }} lineHeight={1}>
                {advisor_username}
              </Text>
            </Flex>
          )}
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
          {/* <PButton w={"100%"}>Invite Friends</PButton> */}
        </Flex>
      </Flex>
    </Flex>
  );
};
