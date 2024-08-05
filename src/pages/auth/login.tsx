import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LoginForm } from "../../widgets/auth/login";

export const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[30%] flex flex-col items-center bg-[#1F2027] rounded-[8px] gap-4 p-10">
        <h2 className="text-[#fff]">{t("SIGNIN")}</h2>
        <LoginForm />

        <div>
          {/* <Link to="/forgot-password">{t("USER.AUTH.FORGOT_YOUR_PASSWORD")}</Link> */}
          {/* {"/"} */}
          Don't you have an account?
          <Link to="/signup"> {t("SIGNUP")}</Link>
        </div>
      </div>
    </div>
  );
};
