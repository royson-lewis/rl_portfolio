/** @format */

import ContactSection from "../components/contactSection";
import HeroSection from "../components/heroSection";
import ServiceSection from "../components/serviceSection";
import SkillSection from "../components/skillSection";
import WorkSection from "../components/workSection";
import WorkSectionDesktop from "../components/workSectionDesktop";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.homePage}>
        <HeroSection />
        <ServiceSection />
        <section id='work_section'>
          <section className={styles.mobileWork}>
            <WorkSection />
          </section>
          <section className={styles.desktopWork}>
            <WorkSectionDesktop />
          </section>
        </section>
        <SkillSection />
        <section id='contact'>
          <ContactSection />
        </section>
      </main>
    </>
  );
}
