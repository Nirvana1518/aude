import styles from "./styles.module.scss";

type ButtonVariant = "primary" | "secondary" | "link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${
    className || ""
  }`;

  return <button className={buttonClasses} {...props} />;
};
