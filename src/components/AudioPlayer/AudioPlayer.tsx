import { type FC } from "react";
import { useAudio } from "react-use";

import cn from "classnames";

import styles from "./AudioPlayer.module.css";

import { PlayerBack } from "../../icons/PlayerBack";
import { PlayerRange } from "./components/PlayerRange/PlayerRange";
import { PlayerForward } from "../../icons/PlayerForward";
import { PlayButton } from "../../icons/PlayButton";
import { Spinner } from "../Spinner/Spinner";
import { PauseButton } from "../../icons/PauseButton";

const SEEK_RANGE = 15;

type AudioPlayerProps = {
  audioSrc: string;
  imageSrc: string;
  name: string;
  author: string;
  className?: string;
};

export const AudioPlayer: FC<AudioPlayerProps> = ({
  audioSrc,
  author,
  imageSrc,
  name,
  className,
}) => {
  const [audio, state, controls] = useAudio({
    src: audioSrc,
    autoPlay: true,
  });

  const handleBackSeekClick = () => {
    controls.seek(state.time - SEEK_RANGE);
  };

  const handleForwardSeekClick = () => {
    controls.seek(state.time + SEEK_RANGE);
  };

  const getDurationString = () => {
    const minutes = Math.floor(state.time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(state.time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const isLoaded = state.duration > 0;

  return (
    <>
      {audio}

      <div className={cn(styles.container, className)}>
        {!isLoaded ? (
          <Spinner color="white" />
        ) : (
          <>
            <img src={imageSrc} className={styles.image} />

            <div className={styles.secondaryContainer}>
              <div className={styles.filler} />

              <div className={styles.infoContainer}>
                <span className={styles.title}>{name}</span>

                <span className={styles.author}>{author}</span>
              </div>

              <div className={styles.controlsContainer}>
                <div className={styles.trackControl}>
                  <div onClick={handleBackSeekClick}>
                    <PlayerBack />
                  </div>

                  {!!state.duration && (
                    <PlayerRange
                      value={state.time}
                      onValueChange={controls.seek}
                      trackLength={state.duration}
                    />
                  )}
                  <div onClick={handleForwardSeekClick}>
                    <PlayerForward />
                  </div>

                  <span className={styles.duration}>{getDurationString()}</span>
                </div>

                <div
                  className={styles.playDurationContainer}
                  onClick={state.playing ? controls.pause : controls.play}
                >
                  {state.playing ? <PauseButton /> : <PlayButton />}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
