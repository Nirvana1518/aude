import styles from "./styles.module.scss";
import { Button } from "@/shared/ui/Buttons/UniversalButton";
import { Link, useNavigate } from "react-router-dom";

export const FormLinksPanel = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <div className={styles.block_links}>
      <Link to="/login" className={styles.link}>
        Уже есть аккаунт?{" "}
      </Link>
      <Button variant="link" onClick={handleGoBack}>
        Назад
      </Button>
    </div>
  );
};
