import Head from "next/head";

import Contact from "../contact/section/contact";
import HeroSection from "./section/hero-section";
import ServiceSection from "./section/service-section";
import SkillSection from "./section/skills-section";
import WorkSection from "./section/work-section";
import WorkSectionDesktop from "./section/work-section-desktop";
import styles from "./main.module.scss";

export default function HomeMain() {
  return (
    <>
      <Head>
        <title>Home - Royson Lewis</title>
        <meta name='description' content='Welcome to my Portfolio!, Explore some of my best projects, Services and Skills showcased in this portfolio. Contact me for any queries through the various options available in the contact section.' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Home - Royson Lewis' />
        <meta property='og:description' content='Welcome to my Portfolio!, Explore some of my best projects, Services and Skills showcased in this portfolio. Contact me for any queries through the various options available in the contact section.' />
        <meta property='og:url' content='http://www.roysonlewis.com/' />
        <meta property='og:site_name' content='Royson Lewis' />
        <meta property='og:image' content='/royson cover@2x.png' />
      </Head>
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
          <Contact />
        </section>
      </main>
    </>
  );
}
