import { NavLink } from "react-router-dom";

import { Flex, Image, Text } from "@chakra-ui/react";
import image from "../../../assets/images/trophy-winner-cup.png";
import { BreadCrumb } from "../../../shared/ui/bread-crumb";

export const PackageSelectionSuccess = () => {
  const items = [
    { url: "/user-dashboard/overview", text: "Home", isCurrentPage: false },
    { url: "/user-dashboard/package-selection-success", text: "Package Selection Success", isCurrentPage: true },
  ];

  return (
    <Flex w={"100%"} h={"calc(100vh - 90px)"} overflow={"hidden"} pb={"1rem"}>
      <Flex
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        flexDir={"column"}
        // flexWrap={"wrap"}
        p={"1rem"}
        gap={"1rem"}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#f7931a",
            borderRadius: "24px",
          },
        }}>
        <BreadCrumb items={items} />
        <Flex w={"100%"} flexDir={"column"} justify={"center"} alignItems={"center"}>
          <Text as="h4" fontSize={"40px"} fontWeight={"600"} lineHeight={1}>
            Voyager
          </Text>
          <Image src={image} alt="trophy" />
          <Text fontSize={"40px"} fontWeight={"600"}>
            Congretulations
          </Text>
          <Text py={"10px"}>Your Payment was successful</Text>
          <Flex bg={"#292929"} fontSize={"14px"} borderRadius={"5px"} px={"10px"} py={"4px"}>
            <NavLink to="/user-dashboard/overview">Go to Dashboard</NavLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
