import { useTranslation } from "react-i18next";
import { PButton } from "../../../shared/ui/buttons";

export const SignupFields = () => {
  const { t } = useTranslation();
  return (
    <>
      <PButton type="submit">{t("common:USER.AUTH.SIGNUP")}</PButton>
    </>
  );
};
