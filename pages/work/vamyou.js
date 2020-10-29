/** @format */

import ContactSection from "../../components/contactSection";
import Conclusion from "../../components/Work/conclusion";
import EssenceHero from "../../components/Work/caseHero";
import ProjectCase from "../../components/Work/projectCase";
import ProjectInfo from "../../components/Work/projectInfo";
import Results from "../../components/Work/results";
import styles from "../../styles/work.module.scss";

export default function Vamyou() {
  return (
    <main className={styles.work}>
      <EssenceHero project='vamyou' />
      <ProjectInfo project='vamyou' />
      <ProjectCase project='vamyou' />
      <Results />
      <Conclusion />
      <ContactSection />
    </main>
  );
}
