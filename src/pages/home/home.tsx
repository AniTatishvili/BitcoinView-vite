import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <Flex color="red">
      <NavLink to="/login">Home</NavLink>
    </Flex>
  );
};
