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
  created_at: number;
};

type GetPodcastsResponse = {
  podcasts: Podcast[];
};

const getPodcasts = () => {
  return apiClient.makeRequest<GetPodcastsResponse>("/podcasts");
};

type ToogleLikeOnPodcastInput = {
  podcastId: string;
};

type ToggleLikeOnPodcastResponse = string;

function toggleLikeOnPodcast({ podcastId }: ToogleLikeOnPodcastInput) {
  return apiClient.makeRequest<ToggleLikeOnPodcastResponse>(
    `/podcasts/${podcastId}/like-unlike/`,
    { method: "POST" }
  );
}

type IncreaseAuditionsOnPodcastInput = {
  podcast_id: number;
};

type IncreaseAuditionsOnPodcastReponse = string;

function increaseAuditionsOnPodcast({
  podcast_id,
}: IncreaseAuditionsOnPodcastInput) {
  return apiClient.makeRequest<IncreaseAuditionsOnPodcastReponse>(
    `/podcasts/${podcast_id}/auditions`,
    { method: "POST" }
  );
}

export const podcastsApi = {
  getPodcasts: createHandler(getPodcasts),
  toggleLikeOnPodcast: createHandler(toggleLikeOnPodcast),
  increaseAuditionsOnPodcast: createHandler(increaseAuditionsOnPodcast),
};
