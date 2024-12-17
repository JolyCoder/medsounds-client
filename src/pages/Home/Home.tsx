import { useEffect, useMemo, useState, type FC } from "react";

import { useMutation, useQuery } from "react-query";
import { podcastsApi } from "../../api";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";

import styles from "./Home.module.css";
import { Auditions } from "../../icons/Audtions";
import { LikesCount } from "../../icons/LikesCount";
import { TagSelector } from "../../components/TagSelector/TagSelector";
import { PodcastItem } from "../../components/PodcastItem/PodcastItem";

const LAST_SORT_TITLE = "Последнее";
const POPULAR_SORT_TITLE = "Популярное";

enum MAP_SORT_TITLE_TO_VALUE {
  "created_at" = LAST_SORT_TITLE,
  "likes" = POPULAR_SORT_TITLE,
}

export const Home: FC = () => {
  const { data, refetch: refetchPodcasts } = useQuery(
    ...podcastsApi.getPodcasts()
  );
  const likePostMutation = useMutation(...podcastsApi.toggleLikeOnPodcast(), {
    onSettled: () => refetchPodcasts(),
  });

  const [selectedPodcastId, setSelectedPodcastId] = useState<number>();

  const [selectedSort, setSelectedSort] = useState<"created_at" | "likes">(
    "created_at"
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = useMemo(() => {
    if (!data) {
      return [];
    }

    const tagsSet = new Set<string>();

    data.data.podcasts.forEach((podcast) => {
      podcast.tags.forEach((tag) => tagsSet.add(tag));
    });

    return Array.from(tagsSet).filter(Boolean);
  }, [data]);

  const filteredPodcasts = useMemo(() => {
    return data?.data.podcasts
      .filter((podcast) => {
        return selectedTags.every((tag) => podcast.tags.includes(tag));
      })
      .sort((podcastA, podcastB) => {
        return podcastB[selectedSort] - podcastA[selectedSort];
      });
  }, [data?.data.podcasts, selectedSort, selectedTags]);

  useEffect(() => {
    if (data?.data.podcasts[0] && selectedPodcastId === undefined) {
      setSelectedPodcastId(data.data.podcasts[0].id);
    }
  }, [data?.data.podcasts, selectedPodcastId]);

  const selectedPodcast = useMemo(() => {
    return data?.data.podcasts.find(({ id }) => id === selectedPodcastId);
  }, [data?.data.podcasts, selectedPodcastId]);

  const handleTagClick = (clickedTag: string) => {
    if (selectedTags.includes(clickedTag)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== clickedTag));

      return;
    }

    setSelectedTags(selectedTags.concat(clickedTag));
  };

  const handleSortSelect = (clickedSort: string) => {
    if (clickedSort === MAP_SORT_TITLE_TO_VALUE["created_at"]) {
      setSelectedSort("created_at");
    } else {
      setSelectedSort("likes");
    }
  };

  const handleLikePodcast = (podcastId: number) =>
    likePostMutation.mutate({
      podcastId: podcastId.toString(),
    });

  if (!selectedPodcast || !selectedPodcastId) {
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

          <div className={styles.metaContainer}>
            <div className={styles.meta}>
              <Auditions />

              <span className={styles.metaText}>
                {selectedPodcast.auditions}
              </span>
            </div>

            <div
              className={styles.meta}
              onClick={() => handleLikePodcast(selectedPodcastId)}
            >
              <LikesCount liked={selectedPodcast.liked} />

              <span className={styles.metaText}>{selectedPodcast.likes}</span>
            </div>
          </div>
        </div>

        <div className={styles.podcastListContainer}>
          <div className={styles.filterContainer}>
            <TagSelector
              tags={[LAST_SORT_TITLE, POPULAR_SORT_TITLE]}
              value={[MAP_SORT_TITLE_TO_VALUE[selectedSort]]}
              onChange={handleSortSelect}
            />
          </div>

          <div className={styles.filterContainer}>
            <span className={styles.tagsTitle}>Теги:</span>

            <TagSelector
              value={selectedTags}
              tags={tags}
              onChange={handleTagClick}
              selectedColor="#E45858"
            />
          </div>

          <span className={styles.listTitle}>Наши последние подкасты</span>

          <div className={styles.list}>
            {filteredPodcasts?.map((podcast) => (
              <PodcastItem
                title={podcast.title}
                description={podcast.description}
                imageSrc={podcast.image}
                likes={podcast.likes}
                liked={podcast.liked}
                auditions={podcast.auditions}
                duration={podcast.duration}
                onClick={() => setSelectedPodcastId(podcast.id)}
                onLike={() => handleLikePodcast(podcast.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
