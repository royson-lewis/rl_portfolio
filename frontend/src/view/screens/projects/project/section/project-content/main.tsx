import React from 'react'

import Image from 'next/image'

import styles from './main.module.scss'
import { CaseStudyTypes } from '../../../../../../api/projects/types'

const SectionProjectContentMain: React.FC<{
  caseStudy: CaseStudyTypes
}> = ({ caseStudy }) => (
  <>
    {caseStudy?.caseSections?.map((section) => (
      <section key={section.id} className={styles['project-content-section']}>
        <h3>{section.title}</h3>
        {section.description && <p>{section.description}</p>}
        {section.mainImage && (
          <div className={styles['content-dynamic-section']}>
            <Image width={1200} height={1200} alt={section.title} src={section.mainImage} />
          </div>
        )}
      </section>
    ))}
  </>
)

export default SectionProjectContentMain
