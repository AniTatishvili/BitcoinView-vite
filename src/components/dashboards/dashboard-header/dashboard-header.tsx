// import { useQuery } from "@tanstack/react-query";

import { useNavigate, NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Box, Menu, MenuButton, MenuList, MenuItem, Button, Flex, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { IoNotifications } from "react-icons/io5";

import logo from "../../../assets/black-logo.svg";
import { DashboardSideMenuProps } from "../../../utils/types/dashboard-types";
import { UserAvatar } from "../../../shared/user-avatar";

// import { useUserSignupStore } from "../../../store/dashboard/user-auth";

export const DashboardHeader: React.FC<DashboardSideMenuProps> = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const full_name = "Aleko Malxazishvili";
  const username = "ako123";
  // const { updateUserFields } = useUserSignupStore();

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("LOGGED_IN");
    localStorage.removeItem("USER_AUTH");
    navigate("/user-login");
    console.log("signout");
  };

  return (
    <Flex w={"100%"} backgroundColor={"#1F2027"} justify={"space-between"} align={"center"} p={"1rem"}>
      <NavLink to="https://bitcoinview.org">
        <Image src={logo} alt="logo" w={"78px"} />
      </NavLink>
      <Flex align={"center"} gap={4}>
        <Menu>
          <Box w={"24px"} pos={"relative"}>
            <Flex
              w={"15px"}
              h={"15px"}
              bg={"green"}
              justify={"center"}
              align={"center"}
              fontSize={"10px"}
              borderRadius={"50%"}
              pos={"absolute"}
              top={"-10px"}
              right={0}>
              2
            </Flex>
            <MenuButton
              w={"fit-content"}
              h={"fit-content"}
              bg={"none"}
              p={0}
              _hover={{ backround: "transparent" }}
              _focus={{ backround: "transparent" }}
              _active={{ backround: "transparent" }}>
              <IoNotifications />
            </MenuButton>
          </Box>
          <MenuList w={"175px"} backgroundColor={"#35363D"} color={"#fff"} borderRadius={"8px"} px={"20px"} py={"16px"} zIndex={10}>
            {data.map((item, i) => (
              <NavLink key={i} to={item.link} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                <Flex h={"44px"} color={"#fff"} align={"center"} gap={4} p={3} _hover={{ color: "#f7931a" }}>
                  {item.name}
                </Flex>
              </NavLink>
            ))}
            <MenuItem>
              See all messages <Button>Clear all</Button>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon color={"#fff"} fontSize={"25px"} />}
            bg={"transparent"}
            p={0}
            _hover={{ backround: "transparent" }}
            _focus={{ backround: "transparent" }}
            _active={{ backround: "transparent" }}>
            <UserAvatar full_name={full_name} username={username} />
          </MenuButton>
          <MenuList w={"175px"} backgroundColor={"#35363D"} color={"#fff"} borderRadius={"8px"} px={"20px"} py={"16px"} zIndex={10}>
            {data.map((item, i) => (
              <NavLink key={i} to={item.link} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                <Flex h={"44px"} color={"#fff"} align={"center"} gap={4} p={3} _hover={{ color: "#f7931a" }}>
                  {item.name}
                </Flex>
              </NavLink>
            ))}
            <MenuItem onClick={signout}>{t("common:MENU.SIGN_OUT")}</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
