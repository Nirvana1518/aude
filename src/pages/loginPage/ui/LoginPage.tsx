import styles from "./styles.module.scss";
import { LoginForm } from "@/features/auth/loginForm";
import { Logo } from "@/shared/ui/logo";

export const LoginPage = () => {
  return (
    <div>
      <Logo className={styles.logo_title} />
      <LoginForm />
    </div>
  );
};
