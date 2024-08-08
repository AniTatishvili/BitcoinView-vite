import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LoginForm } from "../../widgets/auth/login";
import { Flex, Text } from "@chakra-ui/react";

export const Login = () => {
  const { t } = useTranslation();

  return (
    <Flex w={"100%"} h={"100vhv"} justify={"center"} alignItems={"center"}>
      <Flex w={{ lg: "30px", base: "90%" }} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={10} gap={8}>
        <Text as="h2" color={"#fff"}>
          {t("SIGNIN")}
        </Text>
        <LoginForm />

        <Flex>
          {/* <Link to="/forgot-password">{t("USER.AUTH.FORGOT_YOUR_PASSWORD")}</Link> */}
          {/* {"/"} */}
          Don't you have an account?
          <Link to="/signup"> {t("SIGNUP")}</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
