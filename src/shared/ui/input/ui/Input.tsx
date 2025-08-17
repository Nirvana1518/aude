import styles from "./styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isWrong?: boolean;
  hideLabel?: boolean;
}

export const Input = (props: InputProps) => {
  const { label, isWrong, id, hideLabel, ...otherProps } = props;

  const inputClasses = `${styles.form_input} ${
    isWrong ? styles.form_input_wrong : ""
  }`;
  const labelClasses = `${styles.form_label} ${
    hideLabel ? styles.visually_hidden : ""
  }`;

  return (
    <div className={styles.form_group}>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input id={id} className={inputClasses} {...otherProps} />
    </div>
  );
};
