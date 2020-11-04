/** @format */

import ContactSection from "../../components/contactSection";
import Conclusion from "../../components/Work/conclusion";
import CaseHero from "../../components/Work/caseHero";
import ProjectCase from "../../components/Work/projectCase";
import ProjectInfo from "../../components/Work/projectInfo";
import Results from "../../components/Work/results";
import styles from "../../styles/work.module.scss";

export default function Vamyou() {
  return (
    <main className={styles.work}>
      <CaseHero project='vamyou' />
      <ProjectInfo project='vamyou' />
      <ProjectCase project='vamyou' />
      <Results project='vamyou' />
      <Conclusion project='vamyou' />
      <section style={{ backgroundColor: "#f6f6f6", paddingBottom: "3rem" }}>
        <ContactSection />
      </section>
    </main>
  );
}
