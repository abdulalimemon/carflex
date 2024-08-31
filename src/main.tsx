import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import ThemeProviderWrapper from "./components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </NextUIProvider>
  </StrictMode>
);
