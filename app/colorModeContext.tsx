"use client";

import { useLocalStorage } from "@/_lib/hooks/useLocalStorage";
import { createContext, ReactNode, useContext, useEffect } from "react";

type ColorModeContext = {
  toggleColorMode: () => void;
  isDarkMode: boolean;
};
const ColorModeContext = createContext({} as ColorModeContext);

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "theme"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function toggleColorMode() {
    setIsDarkMode((isDarkMode: boolean) => !isDarkMode);
  }

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, isDarkMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === undefined)
    throw new Error("ColorModeContext was used outside of ColorModeProvider");
  return context;
}
