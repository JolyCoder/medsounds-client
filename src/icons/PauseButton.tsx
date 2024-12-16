import type { FC } from "react";

export const PauseButton: FC = () => {
  return (
    <svg width={40} height={40} viewBox="1 1 22 22">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm7.5-5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2zm5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2z"
        fill="#E45858"
      ></path>
    </svg>
  );
};
