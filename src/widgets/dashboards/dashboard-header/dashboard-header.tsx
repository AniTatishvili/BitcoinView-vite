import axios from "axios";
import React from "react";

import { useNavigate, Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Menu, MenuButton, MenuList, MenuItem, Button, Avatar, Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const DashboardHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = React.useState(false);
  // const menuRef = useRef<HTMLDivElement>(null);

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

  // const toggleMenu = () => {
  //   setIsOpen((prev) => !prev);
  // };

  const signout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
    console.log("signout");
  };

  // React.useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      {/* <div className="w-full bg-[#1F2027] flex justify-end p-4 ">
        <div className="relative inline-block text-left" ref={menuRef}>
          <div className="w-fit">
            <button
              type="button"
              className="inline-flex w-full justify-between items-center bg-[transparent] rounded-[0.25em] text-[18px] text-[#fff] font-[Graphik,Calibri,sans-serif] hover:text-[#BCFE2F]"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleMenu}>
              <div className="flex flex-row items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  alt="avatar"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="leading-4">name surname</span>
                  <span className="text-[#5d7a88] leading-4">username</span>
                </div>
              </div>
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className="w-[100%] bg-[#35363D] text-[#fff] rounded-[8px] focus-visible:outline-0 text-[#fff] rounded-[8px] focus-visible:outline-0] flex flex-col absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 px-4 py-2 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}>
              <div className="py-1" role="none">
                <Link to="/">Settings</Link>
              </div>
              <div className="py-1" role="none">
                <button onClick={signout}>{t("common:MENU.SIGN_OUT")}</button>
              </div>
            </div>
          )}
        </div>
      </div> */}
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {/* <Flex>
            <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
            <Flex flexDir={"column"}>
              <Flex>Kola Tioluwani</Flex>
              <Flex>kola</Flex>
            </Flex>
          </Flex> */}
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>
            <Link to="/">Settings</Link>
          </MenuItem>
          <MenuItem>Wallet</MenuItem>
          <MenuItem>
            <Button onClick={signout}>{t("common:MENU.SIGN_OUT")}</Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
