import { createBrowserRouter } from "react-router";
import App from "./routes/app";
import Stack from "./routes/stack";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/stack",
    element: <Stack />,
  },
]);
