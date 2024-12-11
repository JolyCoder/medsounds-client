import type { FC } from "react";
import cn from "classnames";

import styles from "./PagePlaceholder.module.css";
import { CurlyLine } from "../../components/CurlyLine/CurlyLine";
import { Button } from "../../components/Button/Button";
import { ArrowRight } from "../../icons/ArrowRight";

export const PagePlaceholder: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.comeSoonContainer}>
        <span className={styles.comeSoonText}>
          Скоро здесь появится что-то интересное...
        </span>

        <CurlyLine />

        <span className={cn(styles.comeSoonText, styles.comeSoonLowerText)}>
          А пока ждём ваши предложения
        </span>
      </div>

      <Button title="Предложить" icon={<ArrowRight />} />
    </div>
  );
};
