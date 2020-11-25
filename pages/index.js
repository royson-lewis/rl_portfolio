/** @format */

import Head from "next/head";
import ContactSection from "../components/contactSection";
import HeroSection from "../components/heroSection";
import ServiceSection from "../components/serviceSection";
import SkillSection from "../components/skillSection";
import WorkSection from "../components/workSection";
import WorkSectionDesktop from "../components/workSectionDesktop";
import styles from "../styles/Home.module.scss";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home - Royson Lewis</title>
        <meta name='description' content='Welcome to my Portfolio!, Explore some of my best projects, Services and Skills showcased in this portfolio. Contact me for any queries through the various options available in the contact section.' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Home - Royson Lewis' />
        <meta property='og:description' content='Welcome to my Portfolio!, Explore some of my best projects, Services and Skills showcased in this portfolio. Contact me for any queries through the various options available in the contact section.' />
        <meta property='og:url' content='https://www.roysonlewis.com/' />
        <meta property='og:site_name' content='Royson Lewis' />
        <meta property='og:image' content='/royson cover@2x.png' />
      </Head>
      <main className={styles.homePage}>
        <HeroSection hoverOver={props.hoverOver} hoverOut={props.hoverOut} />

        <ServiceSection hoverOver={props.hoverOver} hoverOut={props.hoverOut} />

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
