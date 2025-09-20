import styles from "./styles.module.scss";
import { type ReactNode } from "react";

export interface FormLinksPanelProps {
  children: ReactNode;
  className?: string;
}

export const FormLinksPanel = ({
  children,
  className,
}: FormLinksPanelProps) => {
  return (
    <div className={`${styles.block_links} ${className || ""}`}>{children}</div>
  );
};
