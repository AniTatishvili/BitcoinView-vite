// import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

import { useNavigate, NavLink, Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Box, Menu, MenuButton, MenuList, MenuItem, Button, Flex, Image, Text, Divider, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { IoNotifications } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";

import logo from "../../../assets/black-logo.svg";
import { DashboardSideMenuProps } from "../../../utils/types/dashboard-types";
import { UserAvatar } from "../../../shared/user-avatar";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";
import useUserBalance from "../../../shared/hooks/useUserBalance";

interface MessagesProps {
  id: number;
  subject: string;
  message_text: string;
  created_at: string;
  status: string;
}

export const DashboardHeader: React.FC<DashboardSideMenuProps> = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { username, first_name, last_name, avatar }: { username: string; first_name: string; last_name: string; avatar: string; current_balance: string } =
    useUserSignupStore((state) => ({
      avatar: state.avatar,
      username: state.username,
      first_name: state.first_name,
      last_name: state.last_name,
      current_balance: state.current_balance,
    }));

  const userBalance = useUserBalance();
  const [profileImage, setProfileImage] = React.useState("");

  React.useEffect(() => {
    if (avatar) {
      setProfileImage(avatar);
    }
  }, [username, first_name, last_name, avatar]);

  const [messagesData, setMessagesData] = React.useState<MessagesProps | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messagesCountData, setMessagesCountData] = React.useState<any>();
  const [messageIndex, setMessageIndex] = React.useState<number[]>([]);
  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/messages";
  const countUrl = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/messages/count";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMessagesData(response.data || null);
        if (Array.isArray(response.data)) {
          const readIndexes = response.data.map((message, index) => (message.status === "read" ? index : null)).filter((index) => index !== null);
          setMessageIndex(readIndexes);
        }
        console.log("User messages data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    axios
      .get(countUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMessagesCountData(response.data.unread_messages_count || null);

        console.log("User messages data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("LOGGED_IN");
    localStorage.removeItem("USER_AUTH");
    localStorage.removeItem("UID");
    navigate("/login");
    console.log("signout");
  };

  return (
    <Flex w={"100%"} backgroundColor={"#1F2027"} justify={"space-between"} align={"center"} p={"1rem"} gap={2}>
      <NavLink to="/user-dashboard/overview">
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
              {messagesCountData}
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
          <MenuList w={"300px"} backgroundColor={"#141316"} color={"#fff"} borderRadius={"8px"} py={"16px"} zIndex={10}>
            <Text as="h4" w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2} pb={4}>
              <Flex>Notifications</Flex>
              <Flex w={"15px"} h={"15px"} bg={"green"} justify={"center"} align={"center"} fontSize={"10px"} borderRadius={"50%"}>
                {messagesCountData}
              </Flex>
            </Text>
            <Box
              maxH={"360px"}
              overflowY={"scroll"}
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                  height: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#f7931a",
                  borderRadius: "24px",
                },
              }}>
              {Array.isArray(messagesData) &&
                messagesData?.map((item, i) => {
                  const date = new Date(item.created_at);
                  const formatted = date.toISOString().slice(0, 16).replace("T", " ");
                  console.log(i, messageIndex);
                  return (
                    <NavLink key={i} to={item.link} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                      <Flex
                        w={"100%"}
                        h={"44px"}
                        bg={"#1F2027"}
                        color={"#fff"}
                        justify={"space-between"}
                        align={"center"}
                        borderBottom={"3px solid #141316"}
                        gap={4}
                        p={3}
                        _hover={{ color: "#f7931a" }}>
                        <Flex gap={2}>
                          {!messageIndex.includes(i) ? <Box w={"10px"} h={"10px"} bg={"#009951"} borderRadius={"50%"}></Box> : null}
                          <Box fontSize={"14px"}>
                            <Text as={"h5"} w={"140px"} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"elipsis"} fontWeight={600} lineHeight={1}>
                              {item.subject}
                            </Text>
                          </Box>
                        </Flex>
                        <Flex flexDir={"column"} align={"flex-end"}>
                          <Flex flexDir={"column"} align={"flex-end"} gap={1}>
                            <Flex align={"center"} justify={"flex-end"} gap={1} color={"#fff"} fontSize={"10px"}>
                              <IoIosTime />
                              <Text>{formatted}</Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                    </NavLink>
                  );
                })}
            </Box>
            <Flex w={"100%"} justify={"space-between"} align={"center"} px={3} mt={2}>
              <Link to="/user-dashboard/messages">See all messages</Link>
              <Button>Clear all</Button>
            </Flex>
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
            <Stack direction={"row"} p={4}>
              <UserAvatar
                full_name={first_name + " " + last_name}
                username={username}
                src={profileImage ? "https://phplaravel-1309375-4888543.cloudwaysapps.com" + profileImage : ""}
              />
              <Divider orientation={"vertical"} h={"20px"} />
              <Box>{"$" + " " + userBalance.userBalance}</Box>
            </Stack>
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
