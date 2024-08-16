import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { FormikInput } from "../../../shared/form";
import { PButton } from "../../../shared/ui/buttons";

interface LoginFieldsProps {
  formik: {
    loading: boolean;
    isValid: boolean;
    dirty: boolean;
    // handleSubmit: () => void;
  };
}

export const LoginFields: React.FC<LoginFieldsProps> = ({ formik }) => {
  const { t } = useTranslation();
  const { loading } = formik;

  return (
    <Flex w={{ base: "100%", sm: "360px" }} flexDir={"column"} alignItems={"center"} gap={4}>
      <Flex w={"100%"} flexDir={"column"} gap={4}>
        <FormikInput name="username" type="text" placeholder={t("common:USER.AUTH.USERNAME")} />
        <FormikInput name="password" type="password" placeholder={t("common:USER.AUTH.PASSWORD")} />
      </Flex>
      <PButton type="submit">{loading ? t("common:USER.AUTH.LOADING") : t("common:USER.AUTH.SIGNIN")}</PButton>
    </Flex>
  );
};
