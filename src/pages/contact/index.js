/** @format */

import Head from "next/head";
import ContactSection from "../../components/contactSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>Contact Me - Royson Lewis</title>
        <meta name='description' content='Get in touch with me for any queries or information through following methods!' />
      </Head>
      <ContactSection />
    </>
  );
}
