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

export default function Vamyou() {
  return (
    <>
      <Head>
        <title>Project - Vamyou</title>
        <meta name='description' content='Vamyou, Visualizing and Motivating You!' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Project - Vamyou' />
        <meta property='og:description' content='Vamyou, A Finance and Business related Blogging Website' />
        <meta property='og:url' content='https://www.roysonlewis.com/work/vamyou' />
        <meta property='og:site_name' content='Royson Lewis' />
        <meta property='og:image' content='/Vamyou results mockup ipad iphone mac@2x.png' />
      </Head>
      <main className={styles.work}>
        <CaseHero project='vamyou' />
        <ProjectInfo project='vamyou' />
        <ProjectCase project='vamyou' />
        <LazyLoad>
          <Results project='vamyou' />
        </LazyLoad>
        <LazyLoad>
          <Conclusion project='vamyou' />
        </LazyLoad>
        <section style={{ backgroundColor: "#f6f6f6", paddingBottom: "3rem" }}>
          <LazyLoad>
            <ContactSection />
          </LazyLoad>
        </section>
      </main>
    </>
  );
}
