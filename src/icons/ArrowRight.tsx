import type { FC } from "react";

export const ArrowRight: FC = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="20"
        height="20"
        transform="translate(0 0.5)"
        fill="#6246EA"
      />
      <path d="M17.5 10.5H2.5H17.5Z" fill="#FFFFFE" />
      <path
        d="M11.6667 4.66663L17.5 10.5M17.5 10.5L11.6667 16.3333M17.5 10.5H2.5"
        stroke="#FFFFFE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
