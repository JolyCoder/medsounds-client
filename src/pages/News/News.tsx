import { useEffect, useMemo, useState, type FC } from "react";
import { useQuery } from "react-query";
import { postsApi } from "../../api";
import { Post } from "../../components/Post/Post";
import { BestPost } from "../../components/BestPost/BestPost";

import styles from "./News.module.css";
import { TagSelector } from "../../components/TagSelector/TagSelector";
import { SuggestButton } from "../../components/SuggestButton/SuggestButton";

const POST_TYPES = ["Записи академии", "Предложенные"];
const POST_WODRDS = ["новость", "новости", "новостей"];

const getPostsCountLabel = (count: number) => {
  const dividedCount = Math.abs(count) % 100;
  const num = dividedCount % 10;

  let word = "";

  if (num > 1 && num < 5) {
    word = POST_WODRDS[1];
  }

  if (num == 1) {
    word = POST_WODRDS[0];
  }

  if (!word) {
    word = POST_WODRDS[2];
  }

  return count.toString() + " " + word;
};

export const News: FC = () => {
  const { data } = useQuery(...postsApi.getPosts());

  const [selectedTag, setSelectedTag] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>(POST_TYPES[0]);

  const tags = useMemo(() => {
    if (!data) {
      return [];
    }

    const tagsSet = new Set<string>();

    data.data.posts.forEach((post) => {
      post.tags.forEach((tag) => tagsSet.add(tag));
    });

    return Array.from(tagsSet).filter(Boolean);
  }, [data]);

  useEffect(() => {
    if (selectedTag || !tags.length) {
      return;
    }

    setSelectedTag(tags[0]);
  }, [selectedTag, tags]);

  const filteredPosts = useMemo(() => {
    const posts = data?.data.posts;

    if (!posts) {
      return [];
    }

    return posts.filter(({ tags }) => tags.includes(selectedTag));
  }, [data?.data.posts, selectedTag]);

  const handleClickOnPost = (postId: string) => postId;

  const lastPost = data?.data.posts[2];

  if (!lastPost) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.digest}>
          <BestPost />

          <Post.Extended
            title={lastPost.title}
            tags={lastPost.tags}
            imageURL={lastPost.image}
            onClick={() => handleClickOnPost(lastPost.post_id)}
          />
        </div>

        <div className={styles.filter}>
          <div className={styles.typeFilter}>
            <span className={styles.postsCount}>
              {getPostsCountLabel(data.data.posts.length ?? 0)}
            </span>

            <TagSelector
              tags={POST_TYPES}
              value={selectedType}
              onChange={setSelectedType}
            />
          </div>

          <div className={styles.tagsFilter}>
            <span className={styles.tagsFilterLabel}>Теги:</span>

            <TagSelector
              tags={tags}
              value={selectedTag}
              onChange={setSelectedTag}
            />
          </div>

          <div className={styles.suggestButtonContainer}>
            <SuggestButton />
          </div>
        </div>

        <div className={styles.postsContainer}>
          {filteredPosts.map((post) => (
            <Post
              title={post.title}
              imageURL={post.image}
              onClick={() => handleClickOnPost(post.post_id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
