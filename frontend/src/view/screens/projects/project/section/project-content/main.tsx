import React, { useEffect, useMemo } from 'react'

import { useInView, animated, useSpring } from '@react-spring/web'

import styles from './main.module.scss'
import { CaseSectionTypes, CaseStudyTypes } from '../../../../../../api/projects/types'

import ImageMain from 'components/image/main'

const SectionProjectContentMain: React.FC<{
  caseStudy: CaseStudyTypes
}> = ({ caseStudy }) => (
  <>
    {caseStudy?.caseSections?.map((section) => (
      <Content key={section.id} content={section} />
    ))}
  </>
)

const Content: React.FC<{
  content: CaseSectionTypes
}> = ({ content }) => {
  const [ref, inView] = useInView({ rootMargin: '20% 0% 0%' })

  const titleFromState = useMemo(() => ({ y: 60, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const [titleSprings, titleApi] = useSpring(
    {
      ...titleFromState,
    },
    [titleFromState],
  )

  useEffect(() => {
    if (inView) {
      titleApi.start({
        from: titleFromState,
        to: titleToState,
      })
    } else {
      titleApi.start({
        to: titleFromState,
      })
    }
  }, [inView, titleApi, titleFromState, titleToState])

  const AnimatedImage = animated(ImageMain)
  return (
    <section ref={ref} key={content.id} className={styles['project-content-section']}>
      {content.title && <animated.h3 style={titleSprings}>{content.title}</animated.h3>}
      {content.description && <animated.p style={titleSprings}>{content.description}</animated.p>}
      {content.mainImage && (
        <div className={styles['content-dynamic-section']}>
          <AnimatedImage
            skeletonHeight={800}
            key={content.mainImage}
            style={titleSprings}
            alt={content.title}
            src={content.mainImage}
          />
        </div>
      )}
    </section>
  )
}

export default SectionProjectContentMain
