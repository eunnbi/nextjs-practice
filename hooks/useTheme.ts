import { useState, useEffect } from "react";

const THEME = "theme" as const;

export const useTheme = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeTheme = () => {
    setIsLightTheme((isLightTheme) => {
      localStorage.setItem(THEME, JSON.stringify(!isLightTheme));
      return !isLightTheme;
    });
  };
  useEffect(() => {
    const theme = localStorage.getItem(THEME);
    if (theme !== null) {
      setIsLightTheme(JSON.parse(theme));
    }
  }, []);
  return { isLightTheme, changeTheme };
};
