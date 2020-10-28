/** @format */

import ContactSection from "../../components/contactSection";
import Conclusion from "../../components/Work/conclusion";
import EssenceHero from "../../components/Work/essenceHero";
import ProjectCase from "../../components/Work/projectCase";
import ProjectInfo from "../../components/Work/projectInfo";
import Results from "../../components/Work/results";
import styles from "../../styles/work.module.scss";

export default function Essence() {
  return (
    <main className={styles.work}>
      <EssenceHero />
      <ProjectInfo />
      <ProjectCase />
      <Results />
      <Conclusion />
      <ContactSection />
    </main>
  );
}
