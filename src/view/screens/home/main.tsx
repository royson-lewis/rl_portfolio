import React from "react";
import styles from './main.module.scss'
import SectionHeroMain from "./section/hero/main";

const HomeMain = () => (
  <>
    <main className={styles['home-page']}>
      <SectionHeroMain />
    </main>
  </>
)

export default HomeMain
