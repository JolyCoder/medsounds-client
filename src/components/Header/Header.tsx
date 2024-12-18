import type { FC } from "react";
import { NavLink, useNavigate } from "react-router";
import cn from "classnames";

import styles from "./Header.module.css";
import { PATHS } from "../../consts";

import logo from "../../assets/logo.png";

export const Header: FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(PATHS.HOME);
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <img className={styles.logo} src={logo} onClick={handleLogoClick} />
      </div>

      <div className={styles.block}>
        <div className={styles.linkContainer}>
          <NavLink to={PATHS.HOME} className={styles.navLink}>
            {({ isActive }) => (
              <span className={cn(styles.link, isActive && styles.linkActive)}>
                Главная
              </span>
            )}
          </NavLink>

          <NavLink to={PATHS.NEWS} className={styles.navLink}>
            {({ isActive }) => (
              <span className={cn(styles.link, isActive && styles.linkActive)}>
                Новости
              </span>
            )}
          </NavLink>

          <NavLink to={PATHS.ABOUT} className={styles.navLink}>
            {({ isActive }) => (
              <span className={cn(styles.link, isActive && styles.linkActive)}>
                О нас
              </span>
            )}
          </NavLink>
        </div>
      </div>

      <div className={styles.block} />
    </div>
  );
};
