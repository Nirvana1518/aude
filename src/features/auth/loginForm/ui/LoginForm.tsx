import { useCustomForm } from "@/shared/hooks/useCustomForm";
import styles from "./styles.module.scss";
import { Input } from "@/shared/ui/input";
import { Controller, type SubmitHandler } from "react-hook-form";
import { Button } from "@/shared/ui/buttons/UniversalButton";
import { Checkbox } from "@/shared/ui/checkbox";
import { loginData } from "../lib/loginData";
import { Link } from "react-router-dom";
import { FormLinksPanel } from "@/widgets/formLinksPanel/ui/FormLinksPanel";

interface LoginFormValues {
  login: string;
  password: string;
  remember: boolean;
}

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useCustomForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log("Данные формы входа отправлены:", data);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      {loginData.map((item) => (
        <Input
          label={item.label}
          type={item.type}
          placeholder={item.placeholder}
          key={item.name}
          {...register(item.name, item.validation)}
          error={errors[item.name]?.message}
          isWrong={!!errors[item.name]}
        />
      ))}
      <Controller
        control={control}
        name="remember"
        render={({ field }) => (
          <Checkbox
            label={"Запомнить меня"}
            id={"remember"}
            checked={field.value}
            onChange={field.onChange}
            ref={field.ref}
          />
        )}
      />

      <Button variant="primary" type="submit" className={styles.submit_button}>
        Войти
      </Button>
      <FormLinksPanel className={styles.form_links_panel}>
        <Link to="/register">Нет аккаунта?</Link>
        <Link to="/forgot-password">Забыли пароль?</Link>
      </FormLinksPanel>
    </form>
  );
};
