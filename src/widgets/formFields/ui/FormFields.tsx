import styles from "./styles.module.scss";
import { Input } from "@/shared/ui/input";
import type { FormFieldsProps, RegisterFormValues } from "../model/types";

export const FormFields = ({ register, errors, watch }: FormFieldsProps) => {
  const formFieldsData = [
    {
      name: "firstName",
      label: "Имя",
      type: "text",
      placeholder: "имя",
      validation: { required: "Имя обязательно для заполнения" },
    },
    {
      name: "lastName",
      label: "Фамилия",
      type: "text",
      placeholder: "фамилия (не обязательно)",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "email",
      validation: {
        required: "Email обязателен для заполнения",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // <-- Исправлено
          message: "Некорректный адрес",
        },
      },
    },
    {
      name: "password",
      label: "Пароль",
      type: "password",
      placeholder: "пароль",
      validation: {
        required: "Пароль обязателен для заполнения",
        minLength: {
          value: 8,
          message: "Пароль должен содержать не менее 8 символов",
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // <-- Исправлено
          message:
            "Пароль должен содержать хотя бы одну заглавную букву и одну цифру.", // <-- Исправлена опечатка
        },
      },
    },
    {
      name: "confirmPassword",
      label: "Повторите пароль",
      type: "password",
      placeholder: "повторите пароль",
      validation: {
        required: "Повторите пароль, чтобы мы видели, что вы его помните.",
        validate: (value: string) => {
          return value === watch("password") || "Пароли не совпадают";
        },
      },
    },
  ];

  return (
    <div className={styles.form_inputs}>
      {formFieldsData.map((item) => (
        <Input
          label={item.label}
          type={item.type}
          placeholder={item.placeholder}
          key={item.name}
          {...register(item.name as keyof RegisterFormValues, item.validation)}
          error={errors[item.name as keyof RegisterFormValues]?.message}
          isWrong={!!errors[item.name as keyof RegisterFormValues]}
          hideLabel
        />
      ))}
    </div>
  );
};
