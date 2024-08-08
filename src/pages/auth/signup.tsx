import { useTranslation } from "react-i18next";

import { SignupForm } from "../../widgets/auth/signup/signup-form";
import { Flex, Text } from "@chakra-ui/react";

export const SignUp = () => {
  const { t } = useTranslation();

  return (
    <Flex className="w-full h-[100vh] flex justify-center items-center">
      <Flex className="lg:w-[30%] w-[90%] h-fit flex flex-col items-center bg-[#1F2027] rounded-[8px] gap-4 p-10">
        <Text as="h2" className="text-[#fff]">
          {t("SIGNUP")}
        </Text>
        <SignupForm />
      </Flex>
    </Flex>
  );
};
