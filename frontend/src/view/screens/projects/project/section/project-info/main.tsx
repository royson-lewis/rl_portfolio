import React, { useEffect, useMemo } from 'react'

import Image from 'next/image'
import { useInView, animated, useSpring } from '@react-spring/web'

import styles from './main.module.scss'
import TechnologyTypes from '../../../../../../api/technology/types'

const SectionProjectInfoMain: React.FC<{
  role: string
  type: string
  duration: string
  technologyUsed: Array<TechnologyTypes>
  brandColor: string
}> = ({ role, duration, technologyUsed, type, brandColor }) => {
  const [ref, inView] = useInView({ rootMargin: '0% 0% -20%' })

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

  return (
    <section ref={ref} className={styles['project-info-section']}>
      <animated.h3 style={titleSprings}>Project Info</animated.h3>
      <section className={styles['info-sections-container']}>
        <animated.div style={titleSprings} className={styles['info-section']}>
          <h4>Project Type</h4>
          <h5 style={{ color: brandColor }}>{type}</h5>
        </animated.div>
        <animated.div style={titleSprings} className={styles['info-section']}>
          <h4>My Role</h4>
          <h5 style={{ color: brandColor }}>{role}</h5>
        </animated.div>
        <animated.div style={titleSprings} className={styles['info-section']}>
          <h4>Duration</h4>
          <h5 style={{ color: brandColor }}>{duration}</h5>
        </animated.div>
        <animated.div style={titleSprings} className={styles['info-section']}>
          <h4>Technology Used</h4>
          <div className={styles['technology-container']}>
            {technologyUsed?.map((tech) => (
              <span key={tech.id}>
                <Image height={50} width={50} src={tech.logo} alt={tech.name} />
              </span>
            ))}
          </div>
        </animated.div>
      </section>
    </section>
  )
}

export default SectionProjectInfoMain
