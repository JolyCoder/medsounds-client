import type { FC } from "react";
import { useQuery } from "react-query";
import { postsApi } from "../../api";

import styles from "./BestPost.module.css";
import { Post } from "../Post/Post";

export const BestPost: FC = () => {
  const { data } = useQuery(...postsApi.getBestPost());

  const post = data?.data;

  if (!post) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Лучшая новость этого месяца</span>

        <span className={styles.subtitle}>
          Посомтрите лучшие новости за прошедший месяц
        </span>
      </div>

      <Post title={post.title} imageURL={post.image} onClick={() => {}} />
    </div>
  );
};
