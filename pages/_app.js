import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";

import SEO from "components/seo";

import "../styles/globals.css";
import Header from "components/header";

export default function MyApp({
  Component,
  pageProps,
}) {
  const layout =
    Component.layout ??
    (page => (
      <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto ring-offset-primary">
        {page}
      </main>
    ));

  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: "light-theme",
        dark: "dark-theme",
        arc: "arc-theme",
      }}
    >
      <SEO />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="antialiased bg-primary text-primary width-full">
        <Header />
        {layout(<Component {...pageProps} />)}
      </div>
    </ThemeProvider>
  );
}
