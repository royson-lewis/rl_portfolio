/** @format */

import EssenceHero from "../../components/Work/essenceHero";
import ProjectCase from "../../components/Work/projectCase";
import ProjectInfo from "../../components/Work/projectInfo";
import styles from "../../styles/work.module.scss";

export default function Essence() {
  return (
    <main className={styles.work}>
      <EssenceHero />
      <ProjectInfo />
      <ProjectCase />
    </main>
  );
}
