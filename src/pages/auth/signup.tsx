import { useTranslation } from "react-i18next";

import { SignupForm } from "../../components/auth/signup/signup-form";
import { Flex, Text } from "@chakra-ui/react";

export const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Flex w={"100%"} h={"100vh"} justify={"center"} alignItems={"center"}>
      <Flex w={"30%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"30px"} gap={10}>
        <Text as="h2" color={"#fff"}>
          {t("SIGNUP")}
        </Text>
        <SignupForm />
      </Flex>
    </Flex>
  );
};
