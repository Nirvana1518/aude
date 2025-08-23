import styles from "./styles.module.scss";
import { useCustomForm } from "@/shared/hooks/useCustomForm";
import { FormFields } from "@/widgets/formFields";
import { Button } from "@/shared/ui/buttons/UniversalButton";
import { FormLinksPanel } from "@/widgets/formLinksPanel/ui/FormLinksPanel";
import type { RegisterFormValues } from "@/widgets/formFields/model/types";
import { type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useCustomForm<RegisterFormValues>();

  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log("Данные формы отправлены:", data);
  };

  return (
    <div className={styles.register_page}>
      <form
        className={styles.register_form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h3 className={styles.form_title}>Регистрация</h3>

        <FormFields register={register} errors={errors} watch={watch} />
        <Button
          variant="primary"
          type="submit"
          className={styles.submit_button}
        >
          Зарегистрироваться
        </Button>
        <FormLinksPanel>
          <Link to="/login">Уже есть аккаунт?</Link>
          <Button variant="link" onClick={handleGoBack}>
            Назад
          </Button>
        </FormLinksPanel>
      </form>
    </div>
  );
};
