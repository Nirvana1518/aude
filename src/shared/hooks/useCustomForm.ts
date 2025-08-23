import { type FieldValues, useForm, type UseFormProps } from "react-hook-form";

export const useCustomForm = <TFieldValues extends FieldValues = FieldValues>(
  options: UseFormProps<TFieldValues> = {}
) => {
  return useForm<TFieldValues>({
    mode: "onBlur",
    ...options,
  });
};
