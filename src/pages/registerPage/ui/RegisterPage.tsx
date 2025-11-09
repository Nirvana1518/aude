import styles from "./styles.module.scss";
import { RegisterForm } from "@/features/auth/registerByEmai";
import { Logo } from "@/shared/ui/logo/ui/Logo";

export const RegisterPage = () => {
  return (
    <>
      <Logo className={styles.logo_title} />
      <RegisterForm />;
    </>
  );
};
