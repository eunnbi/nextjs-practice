import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import ThemeButton from "@components/layout/ThemeButton";
import CustomThemeProvider from "@styles/CustomThemeProvider";
import { GlobalStyle } from "@styles/GlobalStyle";
import Header from "@components/layout/Header";
import TopButton from "@components/layout/TopButton";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      })
  );
  const { navBar } = pageProps;
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <CustomThemeProvider>
            <GlobalStyle />
            <ThemeButton />
            <TopButton />
            {navBar === undefined || navBar ? <Header /> : null}
            <Component {...pageProps} />
          </CustomThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
