import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <Flex w={"100%"} h={"100vh"} justify={"center"} align={"center"} color={"#fff"}>
      <NavLink to="/login">Welcome to BitcoinView</NavLink>
    </Flex>
  );
};
