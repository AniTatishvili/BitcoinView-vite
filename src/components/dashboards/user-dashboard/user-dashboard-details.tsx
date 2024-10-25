import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { CryptoConverter } from "../../../shared/crypto-converter";
import useUserBalance from "../../../shared/hooks/useUserBalance";

export const UserDashboardDetails = () => {
  const navigate = useNavigate();

  const userBalance = useUserBalance();

  const handleClick = () => {
    navigate("/user-dashboard/package-selection");
  };

  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Flex flexDir={"column"} gap={4}>
        <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} justify={"space-between"} align={{ base: "start", sm: "center" }} gap={4}>
          <Button backgroundColor={"#3AAB41"} borderRadius={"8px"} px={3} py={2} cursor={"pointer"} onClick={handleClick}>
            Select package
          </Button>
          <Button backgroundColor={"#f7931a"} borderRadius={"8px"} px={3} py={2} cursor={"pointer"} onClick={() => navigate("/user-dashboard/wallet")}>
            Wallet
          </Button>
        </Flex>
        <Flex flexDir={"column"} justify={"space-between"} gap={3}>
          <Box>
            <Box color={"#fff"}>Total Balance</Box>
            <Box color={"#f7931a"} fontSize={"22px"} pt={"3px"}>
              {"$" + " " + userBalance.userBalance}
            </Box>
          </Box>
          <CryptoConverter userBalance={userBalance.userBalance} />
        </Flex>
      </Flex>
    </Flex>
  );
};
