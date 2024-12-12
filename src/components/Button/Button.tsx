import type { FC, ReactNode } from "react";

import styles from "./Button.module.css";

export type ButtonProps = {
  title?: string;
  icon?: ReactNode;

  backgroundColor?: string;
  textColor?: string;

  onClick?: () => void;
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
  textColor = "white",
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
      <span className={styles.title} style={{ color: textColor }}>
        {title}
      </span>

      {icon}
    </div>
  );
};
