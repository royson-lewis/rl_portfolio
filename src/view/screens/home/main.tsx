import styles from './main.module.scss'
import Image from 'next/image'
import HeroEllipse from './assets/hero-ellipse.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faDribbble} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import ButtonMain from "../../../components/button/main";

const HomeMain = () => (
  <>
    <main className={styles['home-page']}>
      <HeroSection />
    </main>
  </>
)

const HeroSection = () => {
  return (
    <section className={styles["hero-section"]}>
      <Image width='100' height="100" className={styles['hero-ellipse']} src={HeroEllipse.src} alt="Hero ellipse" />
      <div className={styles['hero-info']}>
        <h2>Hi, I'm <strong>Royson Lewis</strong></h2>
        <h3>UI Designer<span>,</span></h3>
        <h3>Software Developer</h3>
        <div className={styles['social-container']}>
          <span className={styles['icon-wrapper']}>
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span className={styles['icon-wrapper']}>
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
          <span className={styles['icon-wrapper']}>
            <FontAwesomeIcon icon={faDribbble} />
          </span>
        </div>
        <ButtonMain className="no-border">View Resume</ButtonMain>
      </div>
    </section>
  )
}

export default HomeMain
