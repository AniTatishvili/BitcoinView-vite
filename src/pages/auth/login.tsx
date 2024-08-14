import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LoginForm } from "../../components/auth/login";
import { Flex, Text } from "@chakra-ui/react";

export const Login = () => {
  const { t } = useTranslation();

  return (
    <Flex w={"100%"} h={"100vh"} justify={"center"} alignItems={"center"}>
      <Flex w={"30%"} h={"fit-content"} flexDir={"column"} align={"center"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"30px"} gap={10}>
        <Text as="h2" color={"#fff"}>
          {t("SIGNIN")}
        </Text>
        <LoginForm />

        <Flex justify={"center"} gap={4}>
          {/* <Link to="/forgot-password">{t("USER.AUTH.FORGOT_YOUR_PASSWORD")}</Link> */}
          {/* {"/"} */}
          Don't you have an account?
          <Link to="/signup"> {t("SIGNUP")}</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
