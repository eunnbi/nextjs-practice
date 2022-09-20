import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";
import Layout from "../components/Layout";
import ThemeButton from "../components/ThemeButton";
import { useTheme } from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { isLightTheme, changeTheme } = useTheme();
  const { navBar } = pageProps;
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <GlobalStyle />
          <ThemeButton isLightTheme={isLightTheme} changeTheme={changeTheme} />
          <Layout navBar={navBar === undefined ? true : navBar}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
