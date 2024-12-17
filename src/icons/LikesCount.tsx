import type { FC } from "react";

type LikesCountProps = {
  width?: number;
  height?: number;

  liked?: boolean;
};

export const LikesCount: FC<LikesCountProps> = ({
  liked,
  width = 43,
  height = 43,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="42"
        height="42"
        rx="21"
        fill={liked ? "#6246EA" : "#E45858"}
      />
      <rect
        x="0.5"
        y="0.5"
        width="42"
        height="42"
        rx="21"
        stroke={liked ? "#6246EA" : "#E45858"}
      />
      <path
        d="M11.3996 14.797C11.6635 14.0507 12.0502 13.3727 12.5377 12.8015C13.0252 12.2304 13.604 11.7773 14.2409 11.4682C14.8779 11.1591 15.5606 11 16.25 11C16.9395 11 17.6222 11.1591 18.2591 11.4682C18.8961 11.7773 19.4748 12.2304 19.9623 12.8015L21.5 14.603L23.0377 12.8015C24.0222 11.648 25.3576 11 26.75 11C28.1424 11 29.4777 11.648 30.4623 12.8015C31.4469 13.955 32 15.5195 32 17.1508C32 18.7821 31.4469 20.3465 30.4623 21.5L21.5 32L12.5377 21.5C12.0502 20.9289 11.6635 20.2508 11.3996 19.5046C11.1358 18.7583 11 17.9585 11 17.1508C11 16.343 11.1358 15.5432 11.3996 14.797Z"
        fill={liked ? "#E45858" : "white"}
        stroke={liked ? "#E45858" : "white"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
