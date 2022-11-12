import Head from "next/head";

import ContactMain from "../../view/screens/contact/main";

export default function ContactIndex() {
  return (
    <>
      <Head>
        <title>Contact Me - Royson Lewis</title>
        <meta name='description' content='Get in touch with me for any queries or information through following methods!' />
      </Head>
      <ContactMain />
    </>
  );
}
