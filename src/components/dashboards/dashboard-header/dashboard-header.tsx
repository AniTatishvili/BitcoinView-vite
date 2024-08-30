// import { useQuery } from "@tanstack/react-query";

import { useNavigate, NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Menu, MenuButton, MenuList, MenuItem, Button, Avatar, Flex, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import logo from "../../../assets/black-logo.svg";
import { DashboardSideMenuProps } from "../../../utils/types/dashboard-types";
// import { getUsersData } from "../../../services";
// import { useUserSignupStore } from "../../../store/dashboard/user-auth";

export const DashboardHeader: React.FC<DashboardSideMenuProps> = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // const { updateUserFields } = useUserSignupStore();

  // const auth = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  // const uid = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("UID") || "null") : null;
  // const logged_in = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("LOGGED_IN") || "null") : null;

  // const isUserLoggedIn = !!logged_in;

  // const { data } = useQuery({
  //   queryKey: ["getUsersData"],
  //   queryFn: async () => {
  //     const res = await getUsersData();
  //     console.log(res);
  //     updateUserFields(res);
  //     return res;
  //   },
  //   enabled: isUserLoggedIn,
  //   refetchOnWindowFocus: false,
  //   staleTime: Infinity,
  // });

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("LOGGED_IN");
    localStorage.removeItem("USER_AUTH");
    navigate("/user-login");
    console.log("signout");
  };

  return (
    <Flex w={"100%"} backgroundColor={"#1F2027"} justify={"space-between"} p={"1rem"}>
      <NavLink to="https://bitcoinview.org">
        <Image src={logo} alt="logo" w={"78px"} />
      </NavLink>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon color={"#fff"} fontSize={"25px"} />}
          bg={"transparent"}
          _hover={{ backround: "transparent" }}
          _focus={{ backround: "transparent" }}
          _active={{ backround: "transparent" }}>
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

            <Flex flexDir={"column"} lineHeight={1} gap={1}>
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
  );
};
