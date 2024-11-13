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
import SelectionSort from "./Sort/SelectionSort/SelectionSort.jsx";
import CountingSort from "./Sort/CountingSort/CountingSort.jsx";
import BinarySearch from "./Search/BinarySearch/BinarySearch.jsx";
import LinearSearch from "./Search/LinearSearch/LinearSearch.jsx";

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
      {
        path: "/sort/selectionsort",
        element: <SelectionSort />,
      },
      {
        path: "/sort/countingsort",
        element: <CountingSort />,
      },
      {
        path: "/sort/binarysearch",
        element: <BinarySearch />,
      },
      {
        path: "/sort/linearsearch",
        element: <LinearSearch />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
