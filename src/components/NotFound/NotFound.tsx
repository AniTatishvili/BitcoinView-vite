import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PButton } from "../../shared/ui/buttons";

import { FaBackspace } from "react-icons/fa";

export default function NotFound() {
  const { t } = useTranslation("common");
  const navigate = useNavigate();
  const getBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <div>🤔</div>
      <div>404</div>
      <div>{t("NOTFOUND.HEADING")}</div>
      <div>{t("NOTFOUND.TEXT")}</div>
      <PButton onClick={() => getBack}>
        <FaBackspace />
        {t("BUTTONS.BACK")}
      </PButton>
    </div>
  );
}
