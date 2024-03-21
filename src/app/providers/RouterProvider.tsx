import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "@/pages/root";
import { ErrorPage } from "@/pages/error";
import { Posts } from "@/pages/posts";
import { PostFull } from "@/pages/postFull";

const router = createBrowserRouter([
  {
    path: "Posts/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "post/:postId",
        element: <PostFull />,
      },
    ],
  },
]);

export const BrouderRouter = () => {
  return <RouterProvider router={router} />;
};
