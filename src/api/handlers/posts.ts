import { apiClient } from "../client";
import { createHandler } from "../createHandler";

type Post = {
  post_id: string;
  created_at: string;
  title: string;
  content: string;
  tags: string[];
  image: string; // URL
  likes: number;
  liked: boolean;
};

type GetPostsResponse = {
  posts: Post[];
};

function getPosts() {
  return apiClient.makeRequest<GetPostsResponse>("/posts");
}

type ToogleLikeOnPostInput = {
  postId: string;
};

type ToggleLikeOnPostResponse = string;

function toggleLikeOnPost({ postId }: ToogleLikeOnPostInput) {
  return apiClient.makeRequest<ToggleLikeOnPostResponse>(
    `/posts/${postId}/like-unlike`
  );
}

type GetBestPostResponse = {
  post: Post;
};

function getBestPost() {
  return apiClient.makeRequest<GetBestPostResponse>("/");
}

export const postsApi = {
  getPosts: createHandler(getPosts),
  toggleLikeOnPost: createHandler(toggleLikeOnPost),
  getBestPost: createHandler(getBestPost),
};
