import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "link";

interface BaseButtonProps {
  variant?: ButtonVariant;
  margin?: string;
  width?: string;
  height?: string;
  className?: string;
  children: React.ReactNode;
}

interface LinkButtonProps extends BaseButtonProps {
  asLink: true;
  to: string;
}

interface RegularButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  asLink?: false;
}

type ButtonProps = LinkButtonProps | RegularButtonProps;

export const Button = (props: ButtonProps) => {
  const buttonClasses = `${styles.button} ${
    styles[props.variant || "primary"]
  } ${props.className || ""}`;
  const inlineStyles = {
    margin: props.margin,
    width: props.width,
    height: props.height,
  };

  if (props.asLink) {
    const { asLink, to, children, variant, className, ...linkProps } = props;
    return (
      <Link
        to={to}
        className={buttonClasses}
        style={inlineStyles}
        {...linkProps} // Передаем остальные пропсы, специфичные для Link
      >
        {children}
      </Link>
    );
  }

  const { asLink, children, variant, className, ...buttonProps } = props;
  return (
    <button className={buttonClasses} style={inlineStyles} {...buttonProps}>
      {children}
    </button>
  );
};
