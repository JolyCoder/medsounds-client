import type { FC } from "react";
import styles from "./PodcastItem.module.css";
import { LikesCount } from "../../icons/LikesCount";
import { Auditions } from "../../icons/Audtions";

type PodcastItemProps = {
  imageSrc: string; // URL
  title: string;
  description: string;
  duration: number;
  likes: number;
  liked: boolean;
  auditions: number;
  onClick: () => void;
  onLike: () => void;
};

export const PodcastItem: FC<PodcastItemProps> = ({
  imageSrc,
  title,
  description,
  duration,
  likes,
  liked,
  auditions,
  onClick,
  onLike,
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={imageSrc} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div className={styles.headerTitleBlock}>
            <span className={styles.title}>{title}</span>

            <span className={styles.duration}>
              {Math.floor(duration / 60)} мин
            </span>
          </div>

          <div className={styles.headerStatsBlock}>
            <div
              className={styles.stat}
              onClick={(ev) => {
                ev.stopPropagation();
                ev.preventDefault();

                onLike();
              }}
            >
              <LikesCount width={35} height={35} liked={liked} />

              <span className={styles.statText}>{likes}</span>
            </div>

            <div className={styles.stat}>
              <Auditions width={35} height={35} />

              <span className={styles.statText}>{auditions}</span>
            </div>
          </div>
        </div>

        <span className={styles.contentFooter}>{description}</span>
      </div>
    </div>
  );
};
