import { useTranslation } from "react-i18next";
import { PButton } from "../../../shared/ui/buttons";
import { FormikInput, FormikNumber } from "../../../shared/formik";

interface SignupFieldsProps {
  formik: {
    loading: boolean;
    isValid: boolean;
    dirty: boolean;
  };
}

export const SignupFields: React.FC<SignupFieldsProps> = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <FormikInput name="username" type="text" placeholder={t("USERNAME")} />
      <FormikInput name="email" type="email" placeholder={t("EMAIL")} />
      <FormikNumber name="tel" type="tel" placeholder={t("PHONE")} />
      <FormikInput name="password" type="number" placeholder={t("PASSWORD")} />
      <PButton type="submit">{t("SIGNUP")}</PButton>
    </div>
  );
};
