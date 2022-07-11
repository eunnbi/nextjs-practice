import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";
import Layout from "../components/common/Layout";
import ThemeButton from "../components/common/ThemeButton";

const queryClient = new QueryClient();
const THEME = "theme" as const;

function MyApp({ Component, pageProps }: AppProps) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeTheme = () => {
    localStorage.setItem(THEME, JSON.stringify(!isLightTheme));
    setIsLightTheme(!isLightTheme);
  };
  useEffect(() => {
    const theme = localStorage.getItem(THEME);
    if (theme !== null) {
      setIsLightTheme(JSON.parse(theme));
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ThemeButton isLightTheme={isLightTheme} changeTheme={changeTheme} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
