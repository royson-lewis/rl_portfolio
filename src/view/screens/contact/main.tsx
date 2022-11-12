import Head from "next/head";

import SectionContact from "./section/contact";

export default function ContactMain() {
  return (
    <>
      <Head>
        <title>Contact Me - Royson Lewis</title>
        <meta name='description' content='Get in touch with me for any queries or information through following methods!' />
      </Head>
      <SectionContact />
    </>
  );
}
