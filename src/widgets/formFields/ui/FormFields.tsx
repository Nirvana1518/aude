import styles from "./styles.module.scss";
import { Input } from "@/shared/ui/input";

interface FormFieldsProps {
  formData: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormFields = (props: FormFieldsProps) => {
  const formFieldsData = [
    {
      label: "Имя",
      id: "firstName",
      name: "firstName",
      type: "text",
      placeholder: "имя",
    },
    {
      label: "Фамилия",
      id: "lastName",
      name: "lastName",
      type: "text",
      placeholder: "фамилия",
    },
    {
      label: "Email",
      id: "email",
      name: "email",
      type: "email",
      placeholder: "email",
    },
    {
      label: "Пароль",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "пароль",
    },
    {
      label: "Повторите пароль",
      id: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      placeholder: "повторите пароль",
    },
  ];
  return (
    <div className={styles.form_inputs}>
      {formFieldsData.map((item) => (
        <Input
          label={item.label}
          id={item.id}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          key={item.id}
          value={props.formData[item.name]}
          onChange={props.handleChange}
          hideLabel
        />
      ))}
    </div>
  );
};
