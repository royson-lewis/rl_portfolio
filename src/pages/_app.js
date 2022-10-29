/** @format */

import "../styles/globals.scss";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import Router from "next/router";
import FullscreenLoader from "../components/fullscreenLoader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  Router.events.on("routeChangeError", () => {
    setLoading(false);
  });

  // function redirectTohttps() {
  //   if (location.protocol !== "https:") {
  //     location.replace(`https:${location.href.substring(location.protocol.length)}`);
  //   }
  // }

  // useEffect(() => {
  //   if (process.env.NODE_ENV !== "development") {
  //     redirectTohttps();
  //   }
  //   return () => {};
  // }, []);

  return (
    <>
      <Head>
        <link rel='favicon icon' href='/favicon.ico'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700;800&display=swap' rel='stylesheet'></link>
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests'></meta>
      </Head>

      <section>
        <Header />
        {loading ? <FullscreenLoader /> : null}
        <Component {...pageProps} />
        <Footer />
      </section>
    </>
  );
}

export default MyApp;
