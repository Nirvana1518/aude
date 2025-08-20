import styles from "./styles.module.scss";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  isWrong?: boolean;
  hideLabel?: boolean;
  error?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { label, isWrong, id, hideLabel, ...otherProps } = props;

    const inputClasses = `${styles.form_input} ${props.className || ""} ${
      isWrong ? styles.form_input_wrong : ""
    }`;
    const labelClasses = `${styles.form_label} ${
      hideLabel ? styles.visually_hidden : ""
    }`;

    return (
      <div className={styles.form_group}>
        {!hideLabel && (
          <label htmlFor={id} className={labelClasses}>
            {label}
          </label>
        )}
        <input id={id} className={inputClasses} ref={ref} {...otherProps} />
        {props.error && <div className={styles.error}>{props.error}</div>}
      </div>
    );
  }
);
