import React, { useCallback, useContext, useMemo, useState } from "react";

import { type $MixedElement } from "../../types";
import { DarkTheme } from "./dark";
import { LightTheme } from "./light";
import { type IThemeContext, type Theme } from "./types";

const ThemeContext = React.createContext<IThemeContext>({
  currentTheme: "dark",
  theme: DarkTheme,
  toggleTheme: () => undefined,
  setCurrentTheme: () => undefined,
});

type Props = {
  children: $MixedElement | Array<$MixedElement>;
  defaultTheme?: Theme;
};

export const CDSThemeProvider = ({
  children,
  defaultTheme = "dark",
}: Props): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);

  const theme = useMemo(() => {
    if (currentTheme === "dark") {
      return DarkTheme;
    } else {
      return LightTheme;
    }
  }, [currentTheme]);

  const toggleTheme = useCallback(async () => {
    if (currentTheme === "dark") {
      setCurrentTheme("light");
    } else {
      setCurrentTheme("dark");
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        theme,
        toggleTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useCDSTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);
  return context;
};
