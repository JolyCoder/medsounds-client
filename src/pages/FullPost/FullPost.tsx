import { FC, useMemo, lazy } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router";
import { postsApi } from "../../api";

import styles from "./FullPost.module.css";
import { Calendar } from "../../icons/Calendar";
import rehypeRaw from "rehype-raw";
import { Like } from "../../icons/Like";

const Markdown = lazy(() => import("react-markdown"));

export const FullPost: FC = () => {
  const { id } = useParams();
  const { data, refetch: refetchPosts } = useQuery(...postsApi.getPosts(), {
    enabled: !!id,
  });

  const likeMutation = useMutation(...postsApi.toggleLikeOnPost(), {
    onSettled: () => refetchPosts(),
  });

  const post = useMemo(() => {
    return data?.data.posts.find((post) => id && post.post_id === +id);
  }, [data?.data.posts, id]);

  if (!post) {
    return null;
  }

  const formattedDate = new Date(post.created_at * 1000).toLocaleDateString();

  const handleClick = () =>
    likeMutation.mutate({ postId: post.post_id.toString() });

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

        <Markdown rehypePlugins={[rehypeRaw]} className={styles.markdown}>
          {post.content}
        </Markdown>

        <div className={styles.actionsContainer} onClick={handleClick}>
          <Like className={styles.likeContainer} liked={post.liked} />
        </div>
      </div>
    </div>
  );
};
