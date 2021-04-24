import { FC } from "react";
import { ThemeContext, useTheme } from "../hooks/useTheme";

export const ThemeProvider: FC = ({ children }) => {
  const themeValues = useTheme();

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
