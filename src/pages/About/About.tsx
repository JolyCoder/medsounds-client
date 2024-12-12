import type { FC } from "react";
import cn from "classnames";

import milena from "../../assets/milena.png";

import medAcademy from "../../assets/med_academy.png";
import universityPlatform from "../../assets/university_platform.png";
import fond from "../../assets/fond.png";

import styles from "./About.module.css";

export const About: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.сontentContainer}>
        <img src={milena} className={styles.image} />

        <div className={styles.infoContainer}>
          <span className={cn(styles.text, styles.headerText)}>
            Гаглоева Милена
          </span>

          <span className={cn(styles.text, styles.subHeaderText)}>
            Студентка педиатрического факультета
          </span>

          <span className={cn(styles.text, styles.caption)}>
            Сердце и душа подкаста. Она не только генерирует идеи, но и
            направляет команду к достижению общих целей, создавая уникальную
            атмосферу для творчества.
          </span>
        </div>
      </div>

      <span className={styles.supportText}>
        Создано при поддержке Фонда Содействия Инновациям в рамках федерального
        проекта «Платформа университетского технологического
        предпринимательства»
      </span>

      <div className={styles.sponsorsContainer}>
        <img src={medAcademy} />
        <img src={universityPlatform} />
        <img src={fond} />
      </div>
    </div>
  );
};
