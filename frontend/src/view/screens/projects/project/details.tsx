import React from 'react'

import Image from 'next/image'

import styles from './details.module.scss'
import SectionHeroMain from './section/hero/main'
import EssenceMainImage from '../assets/essence-main-image.png'
import SectionProjectInfoMain from './section/project-info/main'
import SectionProjectContentMain from './section/project-content/main'
import SectionPaginationMain from './section/pagination/main'

const ProjectDetails = () => (
  <>
    <main className={styles['project-details-page']}>
      <SectionHeroMain />
      <section className={styles['main-image']}>
        <Image src={EssenceMainImage} alt="project presentation in different devices" />
      </section>
      <SectionProjectInfoMain />
      <SectionProjectContentMain />
      <SectionPaginationMain />
    </main>
  </>
)

export default ProjectDetails
