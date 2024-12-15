import { FC, useMemo } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { postsApi } from "../../api";

import styles from "./FullPost.module.css";
import { Calendar } from "../../icons/Calendar";

export const FullPost: FC = () => {
  const { id } = useParams();
  const { data } = useQuery(...postsApi.getPosts(), {
    enabled: !!id,
  });

  const post = useMemo(() => {
    return data?.data.posts.find((post) => id && post.post_id === +id);
  }, [data?.data.posts, id]);

  if (!post) {
    return null;
  }

  const formattedDate = new Date(post.created_at * 1000).toLocaleDateString();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <span className={styles.header}>{post.title}</span>

          <img src={post.image} className={styles.image} />
        </div>

        <div className={styles.metaContainer}>
          <Calendar />

          <span className={styles.date}>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};
