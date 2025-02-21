import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Flex, Text, Image } from "@chakra-ui/react";
import { ConfirmNewPassword } from "../../components/auth/forget-password";
import { VideoPlayer } from "../../shared/videos";

import videoSource from "../../assets/videos/sign_up_video_webm.webm";
import logo from "../../assets/logo.svg";

export const ForgetPassword = () => {
  const { t } = useTranslation();

  return (
    <Flex w={"100%"} h={"100%"} flexDir={{ base: "column", lg: "row" }} gap={1}>
      <Flex w={{ base: "100%", lg: "50%" }} h={"100vh"} pos={"relative"} p={"0.5rem"}>
        <VideoPlayer videoSource={videoSource} />
      </Flex>
      <Flex w={{ base: "100%", lg: "50%" }} justify={"center"} align={"center"} p={"0.5rem"}>
        <Flex w={"100%"} h={"fit-content"} flexDir={"column"} align={"center"} borderRadius={"8px"} p={"30px"} gap={10}>
          <NavLink to="https://bitcoinview.org">
            <Image src={logo} alt="logo" w={"160px"} />
          </NavLink>

          <Text as="h2" color={"#fff"} lineHeight={1}>
            Reset Password
          </Text>
          <ConfirmNewPassword />

          <Flex justify={"center"} gap={2}>
            <Link to="/login" style={{ color: "#f7931a" }}>
              {t("common:USER.AUTH.SIGNIN")}
            </Link>
            /
            <Link to="/signup" style={{ color: "#f7931a" }}>
              {t("common:USER.AUTH.SIGNUP")}
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
