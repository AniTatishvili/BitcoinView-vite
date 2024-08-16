import { useTranslation } from "react-i18next";

import { SignupForm } from "../../components/auth/signup/signup-form";
import { Flex, Text, Image } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { VideoPlayer } from "../../shared/videos";
import logo from "../../assets/logo.svg";
import videoSource from "../../assets/videos/sign_up_video_webm.webm";

export const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Flex w={"100%"} h={"100%"} flexDir={{ base: "column", lg: "row" }} gap={1}>
      <Flex w={{ base: "100%", lg: "50%" }} p={"0.5rem"}>
        <VideoPlayer videoSource={videoSource} />
      </Flex>
      <Flex w={{ base: "100%", lg: "50%" }} justify={"center"} align={"center"} p={"0.5rem"}>
        <Flex w={"100%"} h={"fit-content"} flexDir={"column"} align={"center"} borderRadius={"8px"} p={"30px"} gap={10}>
          <NavLink to="https://bitcoinview.org">
            <Image src={logo} alt="logo" w={"160px"} />
          </NavLink>

          <Text as="h2" color={"#fff"} lineHeight={1}>
            {t("common:USER.AUTH.SIGNUP")}
          </Text>
          <SignupForm />

          <Flex justify={"center"} gap={4}>
            <Text color={"#ccc"}>Already have an account?</Text>
            <Link to="/user-login" style={{ color: "#f7931a" }}>
              {" "}
              {t("common:USER.AUTH.SIGNIN")}
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
