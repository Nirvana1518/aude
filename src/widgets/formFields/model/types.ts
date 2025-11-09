import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hideLabel?: boolean;
}

export type FormFieldsProps = {
  register: UseFormRegister<RegisterFormValues>;
  errors: FieldErrors<RegisterFormValues>;
  watch: UseFormWatch<RegisterFormValues>;
};
