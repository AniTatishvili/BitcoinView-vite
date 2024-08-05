import { useTranslation } from "react-i18next";
import { FormikInput } from "../../../shared/formik";
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
  const { loading, isValid, dirty } = formik;

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-full flex flex-col gap-4">
        <FormikInput name="username" type="text" placeholder={t("USERNAME")} />
        <FormikInput name="password" type="password" placeholder={t("PASSWORD")} />
      </div>
      <PButton type="submit" className="w-full">
        {t("SIGNIN")}
      </PButton>
    </div>
  );
};
