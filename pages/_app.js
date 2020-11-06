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

  return (
    <>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;750;800&display=swap' rel='stylesheet'></link>
      </Head>
      <section
        onMouseMove={(e) => {
          let x = e.clientX;
          let y = e.clientY;

          // if (cursor.cursorOver) {
          //   setCursor({
          //     ...cursor,
          //     left: x - 10,
          //     top: y - 10,
          //     // scale: 5,
          //     // transition: "transform 0.03s linear",
          //   });
          // } else {
          setCursor({
            ...cursor,
            left: x - 10,
            top: y - 10,
            scale: 1,
          });
          // }
        }}>
        <Header />
        <div style={{ MozTransform: `translate(${cursor.left + "px"}, ${cursor.top + "px"}) scale(${cursor.scale}) `, transform: `translate(${cursor.left + "px"}, ${cursor.top + "px"}) scale(${cursor.scale}) `, MozTransition: `${cursor.transition}`, transition: cursor.transition }} className='cursor'></div>

        <Component {...pageProps} hoverOver={hoverOver} hoverOut={hoverOut} />
        <Footer />
      </section>
    </>
  );
}

export default MyApp;
