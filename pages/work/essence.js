/** @format */

import styles from "../../styles/work.module.scss";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import Head from "next/head";

const CaseHero = dynamic(() => import("../../components/Work/caseHero"));
const ProjectInfo = dynamic(() => import("../../components/Work/projectInfo"));
const ProjectCase = dynamic(() => import("../../components/Work/projectCase"));
const Results = dynamic(() => import("../../components/Work/results"));
const Conclusion = dynamic(() => import("../../components/Work/conclusion"));
const ContactSection = dynamic(() => import("../../components/contactSection"));

export default function Essence() {
  return (
    <>
      <Head>
        <title>Project - Essence Naturals</title>
        <meta name='description' content='Essence Naturals, An Ecommerce Web App for daily skincare and Nutrition Essentials' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Project - Essence Naturals' />
        <meta property='og:description' content='Essence Naturals, An Ecommerce Web App for daily skincare and Nutrition Essentials' />
        <meta property='og:url' content='https://www.roysonlewis.com/work/essence' />
        <meta property='og:site_name' content='Royson Lewis' />
        <meta property='og:image' content='/essence results mockup@2x.png' />
      </Head>
      <main className={styles.work}>
        <CaseHero project='essence' />
        <ProjectInfo project='essence' />
        <ProjectCase project='essence' />
        <LazyLoad>
          <Results project='essence' height={400} />
        </LazyLoad>
        <LazyLoad height={400}>
          <Conclusion project='essence' />
        </LazyLoad>

        <section style={{ backgroundColor: "#f6f6f6", paddingBottom: "3rem" }}>
          <LazyLoad height={400}>
            <ContactSection />
          </LazyLoad>
        </section>
      </main>
    </>
  );
}
