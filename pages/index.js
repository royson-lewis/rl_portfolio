/** @format */

import ContactSection from "../components/contactSection";
import HeroSection from "../components/heroSection";
import ServiceSection from "../components/serviceSection";
import SkillSection from "../components/skillSection";
import WorkSection from "../components/workSection";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.homePage}>
        <HeroSection />
        <ServiceSection />
        <WorkSection />
        <SkillSection />
        <ContactSection />
      </main>
    </>
  );
}
