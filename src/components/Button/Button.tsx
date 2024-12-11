import type { FC, ReactNode } from "react";

import styles from "./Button.module.css";

export type ButtonProps = {
  title?: string;
  icon?: ReactNode;

  onClick?: () => void;
  backgroundColor?: string;
};

const getPaddings = (hasTitle: boolean, hasIcon: boolean) => {
  if (hasTitle && hasIcon) {
    return "0px 32px";
  }

  if (hasTitle) {
    return "0px 19px";
  }

  return "0px 11px";
};

export const Button: FC<ButtonProps> = ({
  title,
  icon,
  onClick,
  backgroundColor = "#6246EA",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      style={{
        padding: getPaddings(!!title, !!icon),
        borderRadius: !title && !!icon ? "100%" : "50px",
        backgroundColor,
      }}
      onClick={handleClick}
      className={styles.container}
    >
      <span className={styles.title}>{title}</span>

      {icon}
    </div>
  );
};
