import { Container } from "@/shared/ui/container";
import styles from "./styles.module.scss";
import { RegisterForm } from "@/features/auth/registerByEmai";

export const RegisterPage = () => {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};
