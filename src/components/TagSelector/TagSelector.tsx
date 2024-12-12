import { type FC } from "react";

import styles from "./TagSelector.module.css";
import { Button } from "../Button/Button";

type TagSelectorProps = {
  tags: string[];

  value: string;
  onChange: (value: string) => void;

  selectedColor?: string;
  nonSelectedColor?: string;
};

export const TagSelector: FC<TagSelectorProps> = ({
  tags,
  value,
  onChange,
  selectedColor = "#6246EA",
  nonSelectedColor = "transparent",
}) => {
  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <Button
          title={tag}
          onClick={() => onChange(tag)}
          backgroundColor={value === tag ? selectedColor : nonSelectedColor}
          textColor={value === tag ? "white" : "black"}
        />
      ))}
    </div>
  );
};
