import styles from "./styles.module.scss";

interface LogoProps {
  className?: string;
}

export const Logo = (props: LogoProps) => {
  return <h2 className={`${styles.logo} ${props.className}`}>AUDE</h2>;
};
