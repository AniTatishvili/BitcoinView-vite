import axios from "axios";
import React from "react";

import { useNavigate, NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Menu, MenuButton, MenuList, MenuItem, Button, Avatar, Flex, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import logo from "../../../assets/logo.png";

export const DashboardHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchUserProfile = async (token: string | null) => {
    try {
      const res = await axios.get("http://localhost/coinservice/wp-json/wp/v2/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("User profile data:", res.data);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  React.useEffect(() => {
    fetchUserProfile(token);
  }, []);

  const signout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
    console.log("signout");
  };

  return (
    <Flex w={"100%"} backgroundColor={"#1F2027"} justify={"space-between"} p={"1rem"}>
      <NavLink to="/">
        <Image src={logo} alt="logo" w={"160px"} />
      </NavLink>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon color={"#fff"} fontSize={"25px"} />}>
          <Flex gap={8}>
            <Avatar
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
              w={"40px"}
              h={"40px"}
              backgroundColor={"#79797D"}
              color={"#141316"}
              borderRadius={"50%"}
            />

            <Flex flexDir={"column"} lineHeight={1} gap={4}>
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
