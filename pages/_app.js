/** @format */

import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;750;800&display=swap' rel='stylesheet'></link>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
