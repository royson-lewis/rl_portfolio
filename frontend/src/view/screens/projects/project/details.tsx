import React, { useMemo } from 'react'

import Image from 'next/image'
import { useSpring, animated } from '@react-spring/web'

import styles from './details.module.scss'
import SectionHeroMain from './section/hero/main'
import SectionProjectInfoMain from './section/project-info/main'
import SectionProjectContentMain from './section/project-content/main'
import SectionPaginationMain from './section/pagination/main'
import { CaseStudyTypes, ProjectBySlugTypes } from '../../../../api/projects/types'

const ProjectDetails: React.FC<{
  project: ProjectBySlugTypes
  caseStudy: CaseStudyTypes
}> = ({ project, caseStudy }) => {
  const titleFromState = useMemo(() => ({ y: 50, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const titleSprings = useSpring({
    delay: 500,
    from: titleFromState,
    to: titleToState,
  })

  return (
    <>
      <main className={styles['project-details-page']}>
        <SectionHeroMain
          category={project.category?.name}
          name={project.name}
          description={project.description}
          logo={project.logo}
        />
        <animated.section style={titleSprings} className={styles['main-image']}>
          {project.mainImage && (
            <Image
              priority
              width={1400}
              height={900}
              src={project.mainImage}
              alt="project presentation in different devices"
            />
          )}
        </animated.section>
        <SectionProjectInfoMain
          technologyUsed={project.technologies}
          role={project.role}
          type={project.type}
          brandColor={project.brandPrimaryColor}
          duration={project.duration}
        />
        <SectionProjectContentMain caseStudy={caseStudy} />
        <SectionPaginationMain
          prevProject={project.prevProject}
          nextProject={project.nextProject}
        />
      </main>
    </>
  )
}

export default ProjectDetails
