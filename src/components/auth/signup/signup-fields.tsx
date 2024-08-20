import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { PButton } from "../../../shared/ui/buttons";
import { FormikInput, FormikNumber } from "../../../shared/form";

interface SignupFieldsProps {
  formik: {
    loading: boolean;
    isValid: boolean;
    dirty: boolean;
    isSubmitting: boolean;
  };
}

export const SignupFields: React.FC<SignupFieldsProps> = ({ formik }) => {
  const { t } = useTranslation();
  return (
    <Flex w={{ base: "100%", sm: "360px" }} flexDir={"column"} gap={4}>
      <FormikInput name="username" type="text" placeholder={t("common:USER.AUTH:USERNAME")} />
      <FormikInput name="email" type="email" placeholder={t("common:USER.AUTH.EMAIL")} />
      <FormikNumber name="phone_number" placeholder={t("common:USER.AUTH.PHONE")} />
      <FormikInput name="password" type="password" placeholder={t("common:USER.AUTH.PASSWORD")} />
      <FormikInput name="password_confirm" type="password" placeholder={t("Confirm password")} />
      <PButton type="submit" isLoading={formik.isSubmitting} disabled={formik.isSubmitting || !formik.isValid || !formik.dirty} w={"fit-content"}>
        {formik.loading ? t("LOADING") : t("common:USER.AUTH.SIGNUP")}
      </PButton>
    </Flex>
  );
};
