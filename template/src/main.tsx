import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Providers from "@/app/providers";
import { router } from "@/app/router";
import VersionInfo from "@/components/VersionInfo";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
      <VersionInfo />
    </Providers>
  </StrictMode>,
);
