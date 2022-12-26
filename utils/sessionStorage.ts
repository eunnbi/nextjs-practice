export const SCROLL_POS_KEY = "scroll-pos";

export const setSessionStorage = <T>(key: string, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = <T>(key: string, defaultValue: T): T => {
  const value = sessionStorage.getItem(key);
  if (value === null) {
    return defaultValue;
  }
  return JSON.parse(value);
};
