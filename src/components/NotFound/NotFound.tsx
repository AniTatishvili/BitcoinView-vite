import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PButton } from "../../shared/ui/buttons";

import { FaBackspace } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";

export default function NotFound() {
  const { t } = useTranslation("common");
  const navigate = useNavigate();
  const getBack = () => {
    console.log("back");
    navigate(-1);
  };

  return (
    <Flex w={"100%"} h={"100vh"} flexDir={"column"} justify={"center"} alignItems={"center"} gap={4} overflow={"hidden"} pb={"1rem"}>
      <Flex flexDir={"column"} justify={"center"} alignItems={"center"}>
        <Flex fontSize={"32px"}>404</Flex>
        <Flex>{t("NOTFOUND.HEADING")}</Flex>
        <Flex>{t("NOTFOUND.TEXT")}</Flex>
      </Flex>
      <PButton onClick={getBack}>
        <Flex mr={2}>
          <FaBackspace />
        </Flex>
        {t("BUTTONS.BACK")}
      </PButton>
    </Flex>
  );
}
