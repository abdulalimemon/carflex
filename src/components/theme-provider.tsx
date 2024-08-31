import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
