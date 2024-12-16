import { apiClient } from "../client";
import { createHandler } from "../createHandler";

type Podcast = {
  id: number;
  title: string;
  description: string;
  author: string;
  duration: number;
  likes: number;
  auditions: number;
  tags: string[];
  liked: boolean;
  image: string; // URL
  podcast: string;
};

type GetPodcastsResponse = {
  podcasts: Podcast[];
};

const getPodcasts = () => {
  return apiClient.makeRequest<GetPodcastsResponse>("/podcasts");
};

export const podcastsApi = {
  getPodcasts: createHandler(getPodcasts),
};
