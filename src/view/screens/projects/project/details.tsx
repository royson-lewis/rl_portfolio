import React from 'react'

import styles from './details.module.scss'
import SectionHeroMain from "./section/hero/main";
import Image from "next/image";
import EssenceMainImage from '../assets/essence-main-image.png'
import SectionProjectInfoMain from "./section/project-info/main";

const ProjectDetails = () => (
  <>
    <main className={styles['project-details-page']}>
      <SectionHeroMain />
      <section className={styles['main-image']}>
        <Image src={EssenceMainImage} alt="project presentation in different devices" />
      </section>
      <SectionProjectInfoMain />
    </main>
  </>
)

export default ProjectDetails
