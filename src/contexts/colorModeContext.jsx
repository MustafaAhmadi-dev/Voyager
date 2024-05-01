import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const ColorModeContext = createContext();

function ColorModeProvider({ children }) {
  const [isOrangeMode, setIsOrangeMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isOrangeMode"
  );

  useEffect(() => {
    if (isOrangeMode) {
      document.documentElement.classList.remove("blue-theme");
      document.documentElement.classList.add("orange-theme");
    } else {
      document.documentElement.classList.remove("orange-theme");
      document.documentElement.classList.add("blue-theme");
    }
  }, [isOrangeMode]);

  function toggleColorMode() {
    setIsOrangeMode((isOrangeMode) => !isOrangeMode);
  }
  return (
    <>
      <ColorModeContext.Provider value={{ isOrangeMode, toggleColorMode }}>
        {children}
      </ColorModeContext.Provider>
    </>
  );
}

function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === undefined)
    throw new Error("ColorModeContext was used outside of ColorModeProvider");
  return context;
}

export { ColorModeProvider, useColorMode };
