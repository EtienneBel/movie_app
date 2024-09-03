import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ListMovies from "./pages/ListMovies";
import NotFoundPage from "./pages/NotFoundPage";
import Movie from "./pages/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/movies",
    element: <ListMovies />,
  },
  {
    path: "/movies/:movieId",
    element: <Movie />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
