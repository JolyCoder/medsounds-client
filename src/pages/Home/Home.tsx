import { useEffect, useMemo, useState, type FC } from "react";

import { useQuery } from "react-query";
import { podcastsApi } from "../../api";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";

import styles from "./Home.module.css";

export const Home: FC = () => {
  const [selectedPodcastId, setSelectedPodcastId] = useState<number>();

  const { data } = useQuery(...podcastsApi.getPodcasts());

  useEffect(() => {
    if (data?.data.podcasts[0] && selectedPodcastId === undefined) {
      setSelectedPodcastId(data.data.podcasts[0].id);
    }
  }, [data?.data.podcasts, selectedPodcastId]);

  const selectedPodcast = useMemo(() => {
    return data?.data.podcasts.find(({ id }) => id === selectedPodcastId);
  }, [data?.data.podcasts, selectedPodcastId]);

  if (!selectedPodcast) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>
            <span className={styles.coloredTitleWord}>Звуки</span> медицины
          </span>

          <AudioPlayer
            audioSrc={selectedPodcast.podcast}
            imageSrc={selectedPodcast.image}
            name={selectedPodcast.title}
            author={selectedPodcast.author}
            className={styles.player}
          />
        </div>
      </div>
    </div>
  );
};
