import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Input } from "@/shared/ui/input";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Добавить логику валидации. Например, проверка совпадения паролей.
    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают!");

      return;
    }
    console.log("Данные формы отправлены:", formData);
    // TODO: Добавить вызов API для регистрации пользователя.
  };

  const handleGoBack = () => navigate(-1);

  return (
    <div className={styles.register_page}>
      <h2 className={styles.logo_title}>AUDE</h2>

      <form className={styles.register_form} onSubmit={handleSubmit} noValidate>
        <h3 className={styles.form_title}>Регистрация</h3>
        <div className={styles.form_inputs}>
          <Input label="name" id="name" type="text" placeholder="имя" />
          <Input
            label="lastName"
            id="lastName"
            type="text"
            placeholder="фамилия"
          />
          <Input label="email" id="email" type="email" placeholder="email" />
          <Input
            label="password"
            id="password"
            type="password"
            placeholder="пароль"
          />
          <Input
            label="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="повторите пароль"
          />
        </div>
        <button type="submit" className={styles.submit_button}>
          Зарегистрироваться
        </button>

        <div className={styles.block_links}>
          <Link to="/login" className={styles.link}>
            Уже есть аккаунт?{" "}
          </Link>
          <button onClick={handleGoBack} className={styles.link_button}>
            Назад
          </button>
        </div>
      </form>
    </div>
  );
};
