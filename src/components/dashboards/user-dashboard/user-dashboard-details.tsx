import React from "react";

import { Box, Button, Flex, List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";

import { FaBtc } from "react-icons/fa";
import { LiaEthereum } from "react-icons/lia";
import { SiTether } from "react-icons/si";
import { CryptoConverter } from "../../../shared/crypto-converter";

export const UserDashboardDetails = () => {
  const { current_balance } = useUserSignupStore();
  const navigate = useNavigate();

  const [userBalance, setUserBalance] = React.useState("");

  const fetchBalance = () => {
    if (current_balance) {
      setUserBalance(current_balance);
    }
  };

  React.useEffect(() => {
    fetchBalance();

    const interval = setInterval(() => {
      fetchBalance();
    }, 60000);

    return () => clearInterval(interval);
  }, [current_balance]);

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
          <Button backgroundColor={"#f7931a"} borderRadius={"8px"} px={3} py={2} cursor={"pointer"}>
            Connect wallet
          </Button>
        </Flex>
        <List display={"Flex"} borderBottom={"1px solid #999"} gap={2} py={"15px"} overflowX={{ base: "scroll", md: "hidden" }}>
          <ListItem display={"flex"} alignItems={"center"} gap={2} color={"green"}>
            <FaBtc /> Bitcoin
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} gap={2} color={"green"}>
            <LiaEthereum />
            +8.97%
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} gap={2} color={"red"}>
            <SiTether />
            Tether
          </ListItem>
        </List>
        <Flex flexDir={"column"} justify={"space-between"} gap={3}>
          <Box>
            <Box color={"#fff"}>Toltal Balance</Box>
            <Box color={"#f7931a"} fontSize={"22px"} pt={"3px"}>
              {"$" + " " + userBalance}
            </Box>
          </Box>
          <CryptoConverter userBalance={userBalance} />
        </Flex>
      </Flex>
    </Flex>
  );
};
