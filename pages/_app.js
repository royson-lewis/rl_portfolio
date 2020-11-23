/** @format */

import "../styles/globals.scss";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [cursor, setCursor] = useState({
    left: "",
    top: "",
    padding: "",
    id: "",
    cursorOver: false,
    scale: 1,
  });

  function hoverOver() {
    setCursor({
      cursorOver: true,
    });
  }
  function hoverOut() {
    setCursor({
      cursorOver: false,
    });
  }

  function redirectTohttps() {
    if (location.protocol !== "https:") {
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
  }

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      redirectTohttps();
    }
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <link rel='favicon icon' href='/favicon.ico'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700;800&display=swap' rel='stylesheet'></link>
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests'></meta>
      </Head>
      {/* onMouseMove={(e) => { 
      //   let x = e.clientX;
      //   let y = e.clientY;

      //   if (cursor.cursorOver) {
      //     setCursor({
      //       ...cursor,
      //       left: x - 10,
      //       top: y - 10,
      //       // scale: 5,
      //       // transition: "transform 0.03s linear",
      //     });
      //   } else {
      //     setCursor({
      //       ...cursor,
      //       left: x - 10,
      //       top: y - 10,
      //       scale: 1,
      //     });
      //   }
      // }}> */}
      <section>
        <Header />
        <Component {...pageProps} hoverOver={hoverOver} hoverOut={hoverOut} />
        <Footer />
      </section>
    </>
  );
}

export default MyApp;
