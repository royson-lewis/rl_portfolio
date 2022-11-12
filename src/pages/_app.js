/** @format */

import "../styles/globals.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import {  useState } from "react";
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

  return (
    <>
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
