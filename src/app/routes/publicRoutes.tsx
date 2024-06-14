import { RouteObject } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import NotFoundPage from "../pages/NotFoundPage";

export const publicRoutes: RouteObject[] = [
  {
    element: <AuthPage />,
    path: "/login",
  },
  {
    element: <NotFoundPage />,
    path: "*",
  },
];
