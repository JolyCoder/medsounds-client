import type { FC } from "react";
import { useQuery } from "react-query";
import { postsApi } from "../../api";

export const News: FC = () => {
  const { isLoading, data } = useQuery(...postsApi.getPosts);

  console.log(data);

  return null;
};
