import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Layout from "@components/Layout";
import ThemeButton from "@components/Layout/ThemeButton";
import CustomThemeProvider from "@styles/CustomThemeProvider";
import { GlobalStyle } from "@styles/GlobalStyle";

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
            <Layout navBar={navBar === undefined ? true : navBar}>
              <Component {...pageProps} />
            </Layout>
          </CustomThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
