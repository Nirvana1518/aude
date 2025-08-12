// Link следует импортировать из 'react-router-dom', а не 'react-router'
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

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
          <label htmlFor="firstName" className={styles.visually_hidden}>
            Имя
          </label>
          <input
            id="firstName"
            name="firstName"
            className={styles.form_input}
            type="text"
            placeholder="Имя"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="lastName" className={styles.visually_hidden}>
            Фамилия
          </label>
          <input
            id="lastName"
            name="lastName"
            className={styles.form_input}
            type="text"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className={styles.visually_hidden}>
            Email
          </label>
          <input
            id="email"
            name="email"
            className={styles.form_input}
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className={styles.visually_hidden}>
            Пароль
          </label>
          <input
            id="password"
            name="password"
            className={styles.form_input}
            type="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword" className={styles.visually_hidden}>
            Повторите пароль
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            className={styles.form_input}
            type="password"
            placeholder="Повторите пароль"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submit_button}>
          Зарегистрироваться
        </button>
      </form>
      <div className={styles.block_links}>
        <Link to="/login" className={styles.link}>
          Уже есть аккаунт?
        </Link>
        <button onClick={handleGoBack} className={styles.link_button}>
          Назад
        </button>
      </div>
    </div>
  );
};
