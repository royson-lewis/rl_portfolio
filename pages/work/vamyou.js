/** @format */

import styles from "../../styles/work.module.scss";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";

const CaseHero = dynamic(() => import("../../components/Work/caseHero"));
const ProjectInfo = dynamic(() => import("../../components/Work/projectInfo"));
const ProjectCase = dynamic(() => import("../../components/Work/projectCase"));
const Results = dynamic(() => import("../../components/Work/results"));
const Conclusion = dynamic(() => import("../../components/Work/conclusion"));
const ContactSection = dynamic(() => import("../../components/contactSection"));

export default function Vamyou() {
  return (
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
  );
}
