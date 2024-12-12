import type { FC } from "react";

import cn from "classnames";

import styles from "./Post.module.css";
import { Button } from "../Button/Button";
import { ArrowRight } from "../../icons/ArrowRight";

type DefaultPostProps = {
  title: string;
  imageURL: string;

  onClick: () => void;
};

const DefaultPost: FC<DefaultPostProps> = ({ title, imageURL, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundImage: `url("${imageURL}")` }}
      className={styles.container}
    >
      <span className={styles.title}>{title}</span>
    </div>
  );
};

type ExtendedPostProps = {
  title: string;
  imageURL: string;
  tags: string[];

  onClick: () => void;
};

const ExtendedPost: FC<ExtendedPostProps> = ({
  title,
  imageURL,
  tags,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundImage: `url("${imageURL}")` }}
      className={cn(styles.container, styles.extendedMode)}
    >
      <div className={styles.header}>
        <span className={styles.headerText}>ПОСЛЕДНЯЯ НОВОСТЬ</span>

        <Button
          title="Подробнее"
          icon={<ArrowRight color="#9CA3AF" />}
          backgroundColor="#FFFFFF"
          textColor="#9CA3AF"
          onClick={onClick}
        />
      </div>

      <div className={styles.footer}>
        <span className={styles.title}>{title}</span>

        <div className={styles.tagsContainer}>
          {tags.map((tag) => (
            <span className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Post = Object.assign(DefaultPost, {
  Extended: ExtendedPost,
});
