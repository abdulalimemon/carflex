import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import ThemeProviderWrapper from "./components/theme-provider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProviderWrapper>
        <RouterProvider router={router} />
      </ThemeProviderWrapper>
    </NextUIProvider>
  </StrictMode>
);
