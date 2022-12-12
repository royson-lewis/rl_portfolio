import React from 'react'

import Image from 'next/image'

import styles from './details.module.scss'
import SectionHeroMain from './section/hero/main'
import SectionProjectInfoMain from './section/project-info/main'
import SectionProjectContentMain from './section/project-content/main'
import SectionPaginationMain from './section/pagination/main'
import {ProjectBySlugTypes} from "../../../../api/projects/types";

const ProjectDetails: React.FC<{project: ProjectBySlugTypes}> =
    ({
        project
     }) => (
  <>
    <main className={styles['project-details-page']}>
      <SectionHeroMain
          category={project.category?.name}
          name={project.name}
          description={project.description}
      />
      <section className={styles['main-image']}>
        <Image priority width={900} height={900} src={project.mainImage} alt="project presentation in different devices" />
      </section>
      <SectionProjectInfoMain
          technologyUsed={project.technologies}
          role={project.role}
          type={project.type}
          duration={project.duration}
      />
      <SectionProjectContentMain />
      <SectionPaginationMain />
    </main>
  </>
)

export default ProjectDetails
