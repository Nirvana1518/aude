import styles from "./styles.module.scss";

export const RegisterForm = () => {
  return (
    <form className={styles.register_form}>
      <h3>Регистрация</h3>

      <div className={styles.form_group}>
        <label htmlFor="name" className={styles.form_label}>
          Имя
        </label>
        <input className={styles.form_input} type="text" id="name" />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="login" className={styles.form_label}>
          Логин
        </label>
        <input type="text" className={styles.form_input} id="login" />
      </div>

      {/* <input type="text" /> */}

      {/* <input type="email" />
      <input type="password" />
      <input type="password" />
      <button>Register</button> */}
    </form>
  );
};
