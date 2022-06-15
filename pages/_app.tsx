import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";
import Layout from "../components/common/Layout";
import ThemeButton from "../components/common/ThemeButton";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
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
