import { apiClient } from "../client";
import { createHandler } from "../createHandler";

type GetPostsResponse = {
  posts: [
    {
      post_id: string;
      created_at: string;
      title: string;
      content: string;
      tags: string[];
      image: string; // URL
      likes: number;
      liked: boolean;
    }
  ];
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

export const postsApi = {
  getPosts: createHandler(getPosts),
  toggleLikeOnPost: createHandler(toggleLikeOnPost),
};
