import { useMemo, useState, type FC } from "react";
import { useQuery } from "react-query";
import { postsApi } from "../../api";
import { Post } from "../../components/Post/Post";

export const News: FC = () => {
  const { data } = useQuery(...postsApi.getPosts);

  const [selectedTag, setSelectedTag] = useState<string>("");

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

  return (
    <>
      {data?.data.posts.map((post) => (
        <Post.Extended
          title={post.title}
          imageURL={post.image}
          tags={post.tags}
          onClick={() => {}}
        />
      ))}
    </>
  );
};
