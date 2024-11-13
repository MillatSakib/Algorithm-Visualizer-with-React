import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main/Main";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import Search from "./Search/Search.jsx";
import Sort from "./Sort/Sort.jsx";
import BubbleSort from "./Sort/BubleSort/BubbleSort.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/sort",
        element: <Sort />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/sort/bubblesort",
        element: <BubbleSort />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
