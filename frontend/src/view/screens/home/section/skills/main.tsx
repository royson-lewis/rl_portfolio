import React, { useEffect, useMemo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'
import { animated, useInView, useSpring, useSprings } from '@react-spring/web'

import styles from './main.module.scss'
import TechnologyTypes from '../../../../../api/technology/types'

const SectionSkillsMain: React.FC<{
  skills: TechnologyTypes[]
}> = ({ skills }) => {
  const [ref, inView] = useInView({ rootMargin: '0% 0% -50%' })

  const titleFromState = useMemo(() => ({ y: 50, opacity: 0 }), [])
  const titleToState = useMemo(() => ({ y: 0, opacity: 1 }), [])

  const [titleSprings, titleApi] = useSpring(
    {
      ...titleFromState,
    },
    [titleFromState],
  )

  const [skillsTrail, skillsTrailApi] = useSprings(skills.length, () => ({ x: 0, opacity: 1 }), [])

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

  useEffect(() => {
    if (skills.length > 1) {
      if (inView) {
        skillsTrailApi.start({
          from: { x: 0, opacity: 1 },
          to: [{ x: -2000 }, { x: -4000 }, { x: -2000 }, { x: 0 }],
          config: {
            duration: 30000,
          },
          loop: true,
        })
      } else {
        skillsTrailApi.start({
          from: { opacity: 1 },
          to: { opacity: 0 },
          config: {
            duration: 500,
          },
        })
      }
    }
  }, [skills, inView, skillsTrailApi])

  return (
    <section ref={ref} className={styles['skills-section']}>
      <div className={styles['skills-header']}>
        <animated.h2 style={titleSprings}>Skills</animated.h2>
        <animated.h3 style={titleSprings}>Languages & Technologies</animated.h3>
      </div>
      <section>
        {[1, 2, 3].map((key) => (
          <div
            key={key}
            style={{
              gridTemplateColumns: `repeat(${
                skills.length % 2 === 0 ? skills.length / 2 : skills.length
              }, 1fr)`,
            }}
            className={styles['skills-container']}
          >
            {skillsTrail.map((style, i) => (
              <animated.div
                style={style}
                key={skills[i].id}
                className={cn(styles['skill-pill'], { [styles.featured]: skills[i].featured })}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>{skills[i].name}</p>
              </animated.div>
            ))}
          </div>
        ))}
      </section>
    </section>
  )
}

export default SectionSkillsMain
