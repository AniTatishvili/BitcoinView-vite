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
    <Flex w={"100%"} flexDir={"column"} alignItems={"center"} gap={16}>
      <Flex w={"100%"} flexDir={"column"} gap={16}>
        <FormikInput name="username" type="text" placeholder={t("USERNAME")} />
        <FormikInput name="password" type="password" placeholder={t("PASSWORD")} />
      </Flex>
      <PButton type="submit">{loading ? t("LOADING") : t("SIGNIN")}</PButton>
    </Flex>
  );
};
