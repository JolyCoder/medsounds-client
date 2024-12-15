import { apiClient } from "../client";
import { createHandler } from "../createHandler";

type Post = {
  post_id: number;
  created_at: number;
  title: string;
  content: string;
  tags: string[];
  image: string; // URL
  likes: number;
  liked: boolean;
  type: string;
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
    `/posts/${postId}/like-unlike/`,
    { method: "POST" }
  );
}

type GetBestPostResponse = Post;

function getBestPost() {
  return apiClient.makeRequest<GetBestPostResponse>("/posts/top");
}

export const postsApi = {
  getPosts: createHandler(getPosts),
  toggleLikeOnPost: createHandler(toggleLikeOnPost),
  getBestPost: createHandler(getBestPost),
};
