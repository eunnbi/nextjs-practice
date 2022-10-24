import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeState } from "@store/themeState";

const THEME = "theme" as const;

export const useThemeValue = () => {
  return useRecoilValue(themeState);
};

export const useThemeState = () => {
  const [{ isLightTheme }, setTheme] = useRecoilState(themeState);
  const changeTheme = () => {
    setTheme((state) => {
      localStorage.setItem(THEME, JSON.stringify(!state.isLightTheme));
      return { isLightTheme: !state.isLightTheme };
    });
  };
  useEffect(() => {
    const theme = localStorage.getItem(THEME);
    if (theme !== null) {
      setTheme({ isLightTheme: JSON.parse(theme) });
    }
  }, []);
  return { isLightTheme, changeTheme };
};
