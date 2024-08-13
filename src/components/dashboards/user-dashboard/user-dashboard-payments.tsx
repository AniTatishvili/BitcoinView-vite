import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export const UserDashboardPayments = () => {
  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Flex flexDir={"row"} alignItems={"center"} gap={10}>
        <NavLink to="/deposit">Deposit</NavLink>
        <NavLink to="/withdraw">Withdraw</NavLink>
        <NavLink to="/transfer">Transfer</NavLink>
      </Flex>
    </Flex>
  );
};
