import type { FC } from "react";

type ArrowRightProps = {
  color?: string;
};

export const ArrowRight: FC<ArrowRightProps> = ({ color = "#FFFFFE" }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <rect width="20" height="20" transform="translate(0 0.5)" />
      <path d="M17.5 10.5H2.5H17.5Z" fill={color} />
      <path
        d="M11.6667 4.66663L17.5 10.5M17.5 10.5L11.6667 16.3333M17.5 10.5H2.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
