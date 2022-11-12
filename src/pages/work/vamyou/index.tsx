import Head from "next/head";

import WorkVamyouMain from "../../../view/screens/work/vamyou/main";

export default function Index() {
  return (
    <>
      <Head>
        <title>Project - Vamyou</title>
        <meta name='description' content='Vamyou, Visualizing and Motivating You!' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Project - Vamyou' />
        <meta property='og:description' content='Vamyou, A Finance and Business related Blogging Website' />
        <meta property='og:url' content='http://www.roysonlewis.com/work/vamyou' />
        <meta property='og:site_name' content='Royson Lewis' />
        <meta property='og:image' content='/Vamyou results mockup ipad iphone mac@2x.png' />
      </Head>
      <WorkVamyouMain />
    </>
  );
}
