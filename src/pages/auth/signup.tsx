import { useTranslation } from "react-i18next";

import { SignupForm } from "../../widgets/auth/signup/signup-form";

export const SignUp = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:w-[30%] w-[90%] flex flex-col items-center bg-[#1F2027] rounded-[8px] gap-4 p-10">
        <h2 className="text-[#fff]">{t("SIGNUP")}</h2>
        <SignupForm />
      </div>
    </div>
  );
};
