/** @format */

import styles from "../../styles/work.module.scss";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import Head from "next/head";
import { useEffect, useState } from "react";

const CaseHero = dynamic(() => import("../../components/Work/caseHero"));
const ProjectInfo = dynamic(() => import("../../components/Work/projectInfo"));
const ProjectCase = dynamic(() => import("../../components/Work/projectCase"));
const Results = dynamic(() => import("../../components/Work/results"));
const Conclusion = dynamic(() => import("../../components/Work/conclusion"));
const ContactSection = dynamic(() => import("../../components/contactSection"));

export default function Vamyou() {
  function goToTop() {
    scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  const [topScroll, setScroll] = useState({
    showButton: false,
  });
  useEffect(() => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 1600) {
      setScroll({
        showButton: true,
      });
    } else {
      setScroll({
        showButton: false,
      });
    }

    return () => {};
  }, []);
  console.log(topScroll);

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
      <main className={styles.work} id='top'>
        {topScroll.showButton ? (
          <button className='goToTop' onClick={goToTop}>
            <svg xmlns='http://www.w3.org/2000/svg' width='17.164' height='15.921' viewBox='0 0 17.164 15.921'>
              <g id='Icon_feather-arrow-up' data-name='Icon feather-arrow-up' transform='translate(2.121 1.5)'>
                <path id='Path_1275' data-name='Path 1275' d='M18,20.422V7.5' transform='translate(-11.539 -7.5)' fill='none' stroke='#3f3d56' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' />
                <path id='Path_1276' data-name='Path 1276' d='M7.5,13.961,13.961,7.5l6.461,6.461' transform='translate(-7.5 -7.5)' fill='none' stroke='#3f3d56' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' />
              </g>
            </svg>
          </button>
        ) : null}
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
