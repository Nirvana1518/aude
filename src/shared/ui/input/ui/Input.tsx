import styles from "./styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isWrong?: boolean;
}

export const Input = (props: InputProps) => {
  const { label, isWrong, id, ...otherProps } = props;

  const inputClassses = `${styles.form_input} ${
    isWrong ? styles.form_input_wrong : ""
  }`;
  return (
    <>
      <label htmlFor="firstName" className={styles.visually_hidden}>
        Имя
      </label>
      <input
        id={props.id}
        name={props.label}
        className={styles.form_input}
        type="text"
        placeholder={props.placeholder}
        // TODO: закончить логику инпута
        required
      />
    </>
  );
};
