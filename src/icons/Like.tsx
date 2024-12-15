import type { FC } from "react";

export type LikeProps = {
  liked?: boolean;
  className?: string;
};

export const Like: FC<LikeProps> = ({ liked, className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.8835 17.6182L13.8236 27.0401C15.0066 28.2868 16.9931 28.2868 18.1761 27.0401L27.1162 17.6182C30.0722 14.5029 30.0722 9.45201 27.1162 6.33671C24.1602 3.22142 19.3676 3.22142 16.4116 6.33672V6.33672C16.1877 6.57258 15.8119 6.57258 15.5881 6.33672V6.33672C12.6321 3.22142 7.8395 3.22142 4.8835 6.33672C1.9275 9.45201 1.92751 14.5029 4.8835 17.6182Z"
        stroke="#FF0000"
        fill={liked ? "#FF0000" : undefined}
        stroke-width="1.5"
      />
    </svg>
  );
};
