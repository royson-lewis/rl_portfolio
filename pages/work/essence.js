/** @format */

import ContactSection from "../../components/contactSection";
import Conclusion from "../../components/Work/conclusion";
import CaseHero from "../../components/Work/caseHero";
import ProjectCase from "../../components/Work/projectCase";
import ProjectInfo from "../../components/Work/projectInfo";
import Results from "../../components/Work/results";
import styles from "../../styles/work.module.scss";

export default function Essence() {
  return (
    <main className={styles.work}>
      <CaseHero project='essence' />
      <ProjectInfo project='essence' />
      <ProjectCase project='essence' />
      <Results project='essence' />
      <Conclusion project='essence' />
      <ContactSection />
    </main>
  );
}
