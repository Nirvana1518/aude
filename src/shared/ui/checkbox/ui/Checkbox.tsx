import styles from "./styles.module.scss";
import { forwardRef, type InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  isWrong?: boolean;
  error?: string;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, isWrong, error, className, ...rest }, ref) => {
    return (
      <div className={`${styles.checkbox_wrapper} ${className || ""}`}>
        <input
          type="checkbox"
          id={id}
          ref={ref}
          {...rest}
          className={styles.checkbox_input}
        />
        <label htmlFor={id} className={styles.checkbox_label}>
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
