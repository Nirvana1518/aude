import styles from "./styles.module.scss";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { FormFields } from "@/widgets/formFields";
import { Button } from "@/shared/ui/Buttons/UniversalButton";
import { FormLinksPanel } from "@/widgets/formLinksPanel/ui/FormLinksPanel";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError(null); // Сбрасываем ошибку при изменении любого поля
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Пароли не совпадают!");
      return;
    }
    console.log("Данные формы отправлены:", formData);
    // TODO: Добавить вызов API для регистрации пользователя.
  };

  return (
    <div className={styles.register_page}>
      <form className={styles.register_form} onSubmit={handleSubmit} noValidate>
        <h3 className={styles.form_title}>Регистрация</h3>
        {error && <p className={styles.error_message}>{error}</p>}
        <FormFields formData={formData} handleChange={handleChange} />
        <Button
          variant="primary"
          type="submit"
          className={styles.submit_button}
        >
          Зарегистрироваться
        </Button>
        <FormLinksPanel />
      </form>
    </div>
  );
};
