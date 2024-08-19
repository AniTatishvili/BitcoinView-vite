import React from "react";
import { useQuery } from "@tanstack/react-query";

import { useNavigate, NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Menu, MenuButton, MenuList, MenuItem, Button, Avatar, Flex, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import logo from "../../../assets/logo.svg";
import { getUsersData } from "../../../services";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";

export const DashboardHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { updateUserFields } = useUserSignupStore();

  const auth = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const uid = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("UID") || "null") : null;
  const logged_in = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("UID") || "null") : null;

  const isUserLoggedIn = !!(Object.keys(auth).length > 0 || uid || logged_in);

  const { data } = useQuery({
    queryKey: ["getUsersData"],
    queryFn: async () => {
      const res = await getUsersData();
      console.log(res);
      updateUserFields(res);
      return res;
    },
    enabled: isUserLoggedIn,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  console.log(data);
  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("UID");
    localStorage.removeItem("USER_AUTH");
    navigate("/user-login");
    console.log("signout");
  };

  return (
    <Flex w={"100%"} backgroundColor={"#1F2027"} justify={"space-between"} p={"1rem"}>
      <NavLink to="https://bitcoinview.org">
        <Image src={logo} alt="logo" w={"160px"} />
      </NavLink>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon color={"#fff"} fontSize={"25px"} />} bg={"transparent"} _hover={{ backround: "transparent" }}>
          <Flex gap={3}>
            <Avatar
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
              w={"40px"}
              h={"40px"}
              backgroundColor={"#79797D"}
              color={"#141316"}
              borderRadius={"50%"}
            />

            <Flex flexDir={"column"} lineHeight={1} gap={2}>
              <Flex color={"#fff"} fontSize={"16px"}>
                Kola Tioluwani
              </Flex>
              <Flex color={"#ccc"} fontSize={"14px"}>
                kola
              </Flex>
            </Flex>
          </Flex>
        </MenuButton>
        <MenuList w={"175px"} backgroundColor={"#35363D"} color={"#fff"} borderRadius={"8px"} px={"20px"} py={"16px"} zIndex={10}>
          <MenuItem>
            <NavLink to="/user-dashboard/user-dashboard-home" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Home
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/user-dashboard/messages" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Messages
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/user-dashboard/profile" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Profile
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/user-dashboard/wallet" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              Wallet
            </NavLink>
          </MenuItem>
          <MenuItem>
            <Button onClick={signout}>{t("common:MENU.SIGN_OUT")}</Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
