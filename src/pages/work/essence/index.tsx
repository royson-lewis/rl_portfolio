import Head from "next/head";

import WorkEssenceMain from "../../../view/screens/work/essence/main";

export default function WorkEssenceIndex() {
  return (
    <>
      <Head>
        <title>Project - Essence Naturals</title>
        <meta name='description' content='Essence Naturals, An Ecommerce Web App for daily skincare and Nutrition Essentials' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Project - Essence Naturals' />
        <meta property='og:description' content='Essence Naturals, An Ecommerce Web App for daily skincare and Nutrition Essentials' />
        <meta property='og:url' content='http://www.roysonlewis.com/work/essence' />
        <meta property='og:site_name' content='Royson Lewis' />
        <meta property='og:image' content='/essence results mockup@2x.png' />
      </Head>
      <WorkEssenceMain />
    </>
  );
}
