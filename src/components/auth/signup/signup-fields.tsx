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
    <Flex w={"80%"} flexDir={"column"} gap={4}>
      <FormikInput name="username" type="text" placeholder={t("common:USER.AUTH:USERNAME")} />
      <FormikInput name="email" type="email" placeholder={t("common:USER.AUTH.EMAIL")} />
      <FormikNumber name="phone_number" placeholder={t("common:USER.AUTH.PHONE")} />
      <FormikInput name="password" type="password" placeholder={t("common:USER.AUTH.PASSWORD")} />
      <PButton type="submit" isLoading={formik.isSubmitting} disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}>
        {formik.loading ? t("LOADING") : t("common:USER.AUTH.SIGNUP")}
      </PButton>
    </Flex>
  );
};
