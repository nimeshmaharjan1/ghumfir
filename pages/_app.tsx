import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loader from "../components/global/Loader";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  // pageProps: { session?: Session };
};

// pageProps: { session, ...pageProps },
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      setIsLoading(true);
    };

    const handleStop = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      {getLayout(
        <ThemeProvider>
          <Loader loading={isLoading} />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
}
