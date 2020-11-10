/** @format */

import styles from "../../styles/work.module.scss";
import api from "../../lib/api";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import { TransitionGroup } from "react-transition-group";
import Image from "next/image";
// import ImageLoader from "../../components/imageLoader";

const CaseHero = dynamic(() => import("../../components/Work/caseHero"));
const ProjectInfo = dynamic(() => import("../../components/Work/projectInfo"));
const ProjectCase = dynamic(() => import("../../components/Work/projectCase"));
const Results = dynamic(() => import("../../components/Work/results"));
const Conclusion = dynamic(() => import("../../components/Work/conclusion"));
const ContactSection = dynamic(() => import("../../components/contactSection"));

export default function Essence({ work }) {
  return (
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
  );
}
