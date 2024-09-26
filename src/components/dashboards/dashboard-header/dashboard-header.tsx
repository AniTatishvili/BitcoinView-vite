// import { useQuery } from "@tanstack/react-query";

import { useNavigate, NavLink, Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Box, Menu, MenuButton, MenuList, MenuItem, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { IoNotifications, IoClose } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";

import logo from "../../../assets/black-logo.svg";
import { DashboardSideMenuProps } from "../../../utils/types/dashboard-types";
import { UserAvatar } from "../../../shared/user-avatar";
import React from "react";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";

// import { useUserSignupStore } from "../../../store/dashboard/user-auth";

const messagesArr = [
  { name: "Lorem ipsum1", message: "Message 1 lorem ipsum dolor amet", data: "10/12/2024", link: "/" },
  { name: "Lorem ipsum2", message: "Message 2", data: "20/05/2024", link: "/" },
  { name: "Lorem ipsum3", message: "Message 3", data: "18/12/2024", link: "/" },
  { name: "Lorem ipsum4", message: "Message 4", data: "10/06/2024", link: "/" },
  { name: "Lorem ipsum5", message: "Message 5", data: "15/12/2024", link: "/" },
  { name: "Lorem ipsum6", message: "Message 6", data: "10/12/2024", link: "/" },
  { name: "Lorem ipsum7", message: "Message 7", data: "10/09/2024", link: "/" },
];
export const DashboardHeader: React.FC<DashboardSideMenuProps> = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { username, first_name, last_name, avatar }: { username: string; first_name: string; last_name: string; avatar: string } = useUserSignupStore(
    (state) => ({
      avatar: state.avatar,
      username: state.username,
      first_name: state.first_name,
      last_name: state.last_name,
    })
  );

  const [profileImage, setProfileImage] = React.useState("");

  React.useEffect(() => {
    if (avatar) {
      setProfileImage(avatar);
    }
  }, [username, first_name, last_name, avatar]);

  const [noteHoveredIndx, setNoteHoveredIndx] = React.useState<number>();

  // const { updateUserFields } = useUserSignupStore();
  const notificationsCount = 2;

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("LOGGED_IN");
    localStorage.removeItem("USER_AUTH");
    localStorage.removeItem("UID");
    navigate("/login");
    console.log("signout");
  };

  const handleMouseOver = (index: number) => {
    setNoteHoveredIndx(index);
  };

  const handleMouseOut = (index: number) => {
    setNoteHoveredIndx(index);
  };

  const handleClick = () => {
    console.log(22);
  };

  return (
    <Flex w={"100%"} backgroundColor={"#1F2027"} justify={"space-between"} align={"center"} p={"1rem"} gap={2}>
      <NavLink to="https://bitcoinview.org">
        <Image src={logo} alt="logo" w={"78px"} />
      </NavLink>
      <Flex align={"center"} gap={{ base: 2, sm: 4 }}>
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
              {notificationsCount}
            </Flex>
            <MenuButton
              w={"fit-content"}
              h={"fit-content"}
              bg={"none"}
              color={"#fff"}
              p={0}
              _hover={{ backround: "transparent" }}
              _focus={{ backround: "transparent" }}
              _active={{ backround: "transparent" }}>
              <IoNotifications />
            </MenuButton>
          </Box>
          <MenuList w={"300px"} backgroundColor={"#35363D"} color={"#fff"} borderRadius={"8px"} py={"16px"} zIndex={10}>
            <Text as="h4" w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2} pb={4}>
              <Flex>Notifications</Flex>
              <Flex w={"15px"} h={"15px"} bg={"green"} justify={"center"} align={"center"} fontSize={"10px"} borderRadius={"50%"}>
                {notificationsCount}
              </Flex>
            </Text>
            {messagesArr.map((item, i) => (
              <NavLink key={i} to={item.link} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                <Flex
                  w={"100%"}
                  h={"44px"}
                  bg={"#79797D"}
                  color={"#fff"}
                  justify={"space-between"}
                  align={"center"}
                  borderBottom={"1px solid #1F2027"}
                  gap={4}
                  p={3}
                  _hover={{ color: "#f7931a" }}
                  onMouseOutCapture={() => handleMouseOver(i)}
                  onMouseOut={() => handleMouseOut(i)}>
                  <Flex gap={2}>
                    <Box w={"10px"} h={"10px"} bg={"#009951"} borderRadius={"50%"}></Box>
                    <Box fontSize={"14px"}>
                      <Text as={"h5"} fontWeight={600} lineHeight={1}>
                        {item.name}
                      </Text>
                      <Text fontSize={"12px"}>{item.message}</Text>
                    </Box>
                  </Flex>
                  <Flex flexDir={"column"} align={"flex-end"}>
                    <Box color={"red"} opacity={noteHoveredIndx === i ? 1 : 0} onClick={handleClick}>
                      <IoClose />
                    </Box>
                    <Flex flexDir={"column"} align={"flex-end"} gap={1}>
                      <Flex align={"center"} justify={"flex-end"} gap={1} color={"#141316"} fontSize={"10px"}>
                        <IoIosTime />
                        <Text>2min</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </NavLink>
            ))}
            <MenuItem>
              <Flex w={"100%"} justify={"space-between"} align={"center"}>
                <Link to="/user-dashboard/messages">See all messages</Link>
                <Button>Clear all</Button>
              </Flex>
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
            <UserAvatar
              full_name={first_name + " " + last_name}
              username={username}
              src={profileImage ? "https://phplaravel-1309375-4888543.cloudwaysapps.com" + profileImage : "https://bit.ly/broken-link"}
            />
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
