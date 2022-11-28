import React from 'react'

import styles from './details.module.scss'
import SectionHeroMain from "./section/hero/main";

const ProjectDetails = () => (
  <>
    <main className={styles['project-details-page']}>
      <SectionHeroMain />
    </main>
  </>
)

export default ProjectDetails
