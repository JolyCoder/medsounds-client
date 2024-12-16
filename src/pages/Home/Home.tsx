import { useEffect, useMemo, useState, type FC } from "react";

import { useQuery } from "react-query";
import { podcastsApi } from "../../api";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";

export const Home: FC = () => {
  const [selectedPodcastId, setSelectedPodcastId] = useState<number>();

  const { data } = useQuery(...podcastsApi.getPodcasts());

  useEffect(() => {
    if (data?.data.podcasts[0] && selectedPodcastId === undefined) {
      setSelectedPodcastId(data.data.podcasts[0].id);
    }
  }, [data?.data.podcasts, selectedPodcastId]);

  const podcast = useMemo(() => {
    return data?.data.podcasts.find(({ id }) => id === selectedPodcastId);
  }, [data?.data.podcasts, selectedPodcastId]);

  if (!podcast) {
    return null;
  }

  return (
    <AudioPlayer
      imageSrc={podcast.image}
      audioSrc={podcast.podcast}
      name={podcast.title}
      author={"Kulov huesos"}
    />
  );
};
