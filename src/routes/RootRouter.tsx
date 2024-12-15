import type { FC } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";
import { PATHS } from "../consts";
import { About } from "../pages/About/About";
import { FullPost } from "../pages/FullPost/FullPost";
import { Home } from "../pages/Home/Home";
import { News } from "../pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.NEWS,
        element: <News />,
      },
      {
        path: PATHS.NEWS + "/:id",
        element: <FullPost />,
      },
      {
        path: PATHS.ABOUT,
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export const RootRouter: FC = () => <RouterProvider router={router} />;
