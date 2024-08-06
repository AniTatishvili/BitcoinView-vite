import { useTranslation } from "react-i18next";
import { PButton } from "../../../shared/ui/buttons";
import { FormikInput, FormikNumber } from "../../../shared/formik";

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
    <div className="flex flex-col gap-4">
      <FormikInput name="username" type="text" placeholder={t("USERNAME")} />
      <FormikInput name="email" type="email" placeholder={t("EMAIL")} />
      <FormikNumber name="tel" placeholder={t("PHONE")} />
      <FormikInput name="password" type="password" placeholder={t("PASSWORD")} />
      <PButton
        type="submit"
        // disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
        isLoading={formik.isSubmitting}
        onClick={() => console.log("Button clicked")}>
        {formik.loading ? t("LOADING") : t("SIGNUP")}
      </PButton>
    </div>
  );
};
