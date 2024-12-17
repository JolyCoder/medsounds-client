import type { FC } from "react";

type AuditionsProps = {
  width?: number;
  height?: number;
};

export const Auditions: FC<AuditionsProps> = ({ width = 43, height = 43 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <style>
        {
          ".st0{opacity:.2;fill:none;stroke:#000;stroke-width:5.000000e-02;stroke-miterlimit:10}"
        }
      </style>
      <path
        id="Layer_2"
        d="M12 3c-5 0-9 4-9 9v4c0 .6.4 1 1 1v1c0 1.7 1.3 3 3 3h1c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1H7c-.8 0-1.5.3-2 .8V12c0-3.9 3.1-7 7-7s7 3.1 7 7v.8c-.5-.5-1.2-.8-2-.8h-1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h1c1.7 0 3-1.3 3-3v-1c.6 0 1-.4 1-1v-4c0-5-4-9-9-9zM6 15c0-.6.4-1 1-1v5c-.6 0-1-.4-1-1v-3zm12 3c0 .6-.4 1-1 1v-5c.6 0 1 .4 1 1v3z"
      />
    </svg>
  );
};
