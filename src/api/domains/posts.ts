import { apiClient } from "../client";

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

const getPosts = () => apiClient.makeRequest<GetPostsResponse>("/posts");

type ToogleLikeOnPostInput = {
  postId: string;
};

type ToggleLikeOnPostResponse = string;

const toggleLikeOnPost = ({ postId }: ToogleLikeOnPostInput) =>
  apiClient.makeRequest<ToggleLikeOnPostResponse>(
    `/posts/${postId}/like-unlike`
  );

export const postsApi = {
  getPosts,
  toggleLikeOnPost,
};
