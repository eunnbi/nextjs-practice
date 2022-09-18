import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";
import Layout from "../components/Layout";
import ThemeButton from "../components/ThemeButton";

const THEME = "theme" as const;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
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
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <GlobalStyle />
          <ThemeButton isLightTheme={isLightTheme} changeTheme={changeTheme} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
