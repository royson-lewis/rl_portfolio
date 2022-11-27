import React from 'react'

import styles from './main.module.scss'
import SectionHeroMain from './section/hero/main'
import SectionProjectsMain from './section/projects/main'
import SectionSkillsMain from './section/skills/main'

const HomeMain = () => (
  <>
    <main className={styles['home-page']}>
      <SectionHeroMain />
      <SectionProjectsMain />
      <SectionSkillsMain />
    </main>
  </>
)

export default HomeMain
