import styles from "./styles.module.scss";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, ...otherProps } = props;
  return (
    <div className={styles.checkbox_wrapper}>
      <label htmlFor="remember" className={styles.checkbox_label}>
        {label}
      </label>
      <input type="checkbox" id="remember" className={styles.checkbox_input} />
    </div>
  );
};
