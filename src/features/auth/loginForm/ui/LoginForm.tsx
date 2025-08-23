import { useCustomForm } from "@/shared/hooks/useCustomForm";
import styles from "./styles.module.scss";
import { Input } from "@/shared/ui/input";
import { type SubmitHandler } from "react-hook-form";
import { Button } from "@/shared/ui/buttons/UniversalButton";
import { Checkbox } from "@/shared/ui/checkbox";
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
    handleSubmit,
    formState: { errors },
  } = useCustomForm<LoginFormValues>();

  const loginData = [
    {
      name: "login",
      label: "Введите логин, или адрес электронной почты",
      type: "text",
      placeholder: "Введите логин, или адрес электронной почты",
      validation: { required: "А ты кто вообще? ;/" },
    },
    {
      name: "password",
      label: "Введите пароль",
      type: "password",
      placeholder: "Введите пароль",
      validation: { required: "Без пароля нельзя" },
    },
  ];

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
          hideLabel
          {...register(item.name as keyof LoginFormValues, item.validation)}
          error={errors[item.name as keyof LoginFormValues]?.message}
          isWrong={!!errors[item.name as keyof LoginFormValues]}
        />
      ))}

      <Checkbox
        id="remember"
        label="Запомнить меня"
        {...register("remember")}
      />

      <Button variant="primary" type="submit" className={styles.submit_button}>
        Войти
      </Button>
      <FormLinksPanel className={styles.form_links_panel}>
        <Link to="/register">Нет аккаунта?</Link>
        <Button variant="link">Забыли пароль?</Button>{" "}
        {/* TODO: ЗДЕСЬ НАДО БУДЕТ ДОДЕЛАТЬ КНОПКУ НАЗАД */}
      </FormLinksPanel>
    </form>
  );
};
