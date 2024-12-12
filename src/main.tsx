import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { PATHS } from "./consts";
import "./index.css";
import App from "./App.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { About } from "./pages/About/About.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { News } from "./pages/News/News.tsx";

const queryClient = new QueryClient();

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
