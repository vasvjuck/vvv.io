import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

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

  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
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
      <Analytics />
    </ThemeProvider>
  );
}
