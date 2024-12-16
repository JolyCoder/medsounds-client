import { FC } from "react";
import { Range, getTrackBackground } from "react-range";

import styles from "./PlayerRange.module.css";

type PlayerRangeProps = {
  value: number;
  onValueChange: (time: number) => void;
  trackLength: number;
};

export const PlayerRange: FC<PlayerRangeProps> = ({
  value,
  onValueChange,
  trackLength,
}) => {
  return (
    <Range
      min={0}
      max={trackLength}
      step={1}
      values={[value]}
      renderThumb={({ props }) => <div {...props} className={styles.thumb} />}
      onChange={(values) => values[0] && onValueChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          className={styles.track}
          style={{
            ...props.style,
            background: getTrackBackground({
              values: [value],
              min: 0,
              max: trackLength,
              colors: ["#E45858", "#FFFFFF4D"],
            }),
          }}
        >
          {children}
        </div>
      )}
    />
  );
};
