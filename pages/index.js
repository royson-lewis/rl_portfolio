/** @format */

import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/serviceSection";
import WorkSection from "../components/workSection";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.homePage}>
        <HeroSection />
        <ServiceSection />
        <WorkSection />
      </main>
    </>
  );
}
